import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, agents, ...rest }) => {
  const classes = useStyles();
  const [selectedAgetnIds, setSelectedAgentIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedAgentIds;

    if (event.target.checked) {
      newSelectedAgentIds = agents.map((agent) => agent.id);
    } else {
      newSelectedAgentIds = [];
    }

    setSelectedAgentIds(newSelectedAgentIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedAgentIds.indexOf(id);
    let newSelectedAgentIds = [];

    if (selectedIndex === -1) {
      newSelectedAgentIds = newSelectedAgentIds.concat(selectedAgentIds, id);
    } else if (selectedIndex === 0) {
      newSelectedAgentIds = newSelectedAgentIds.concat(selectedAgentIds.slice(1));
    } else if (selectedIndex === selectedAgentIds.length - 1) {
      newSelectedAgentIds = newSelectedAgentIds.concat(selectedAgentIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedAgentIds = newSelectedAgentIds.concat(
        selectedAgentIds.slice(0, selectedIndex),
        selectedAgentIds.slice(selectedIndex + 1)
      );
    }

    setSelectedAgentIds(newSelectedAgentIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAgentIds.length === agents.length}
                    color="primary"
                    indeterminate={
                      selectedAgentIds.length > 0
                      && selectedAgentIds.length < agents.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agents.slice(0, limit).map((agent) => (
                <TableRow
                  hover
                  key={agent.id}
                  selected={selectedAgentIds.indexOf(agent.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAgentIds.indexOf(agent.id) !== -1}
                      onChange={(event) => handleSelectOne(event, agent.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={agent.avatarUrl}
                      >
                        {getInitials(agent.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {agent.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {agent.email}
                  </TableCell>
                  <TableCell>
                    {`${agent.address.city}, ${agent.address.state}, ${agent.address.country}`}
                  </TableCell>
                  <TableCell>
                    {agent.phone}
                  </TableCell>
                  <TableCell>
                    {moment(agent.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={agents.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  agents: PropTypes.array.isRequired
};

export default Results;
