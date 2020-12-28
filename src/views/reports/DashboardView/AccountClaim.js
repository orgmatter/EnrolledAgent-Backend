import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const AccountClaim = ({ className, ...rest }) => {
  const classes = useStyles();
  const [claims] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Account Claims" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order Ref
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {claims.map((claim) => (
                <TableRow
                  hover
                  key={claim.id}
                >
                  <TableCell>
                    {claim.ref}
                  </TableCell>
                  <TableCell>
                    {claim.customer.name}
                  </TableCell>
                  <TableCell>
                    {moment(claim.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="secondary"
                      label={claim.status}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Link to="/">
                      <Button>
                        View
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button color="secondary">
                        Cancel
                      </Button>
                    </Link>
                  </TableCell>
               
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
        
      </Box>
    </Card>
  );
};

AccountClaim.propTypes = {
  className: PropTypes.string
};

export default AccountClaim;
