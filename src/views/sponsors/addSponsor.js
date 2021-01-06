import React, { Component } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { sponsorAdd } from '../../redux/_actions/sponsors/index';

// React Notification
import { NotificationManager } from 'react-notifications';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
  
}));

export class addSponsor extends Component {
  state = {
    link: '',
    name: '',
    avatar: '',
    errors: {}
  };

  onChangeInput = (e) => this.setState({
    [e.target.name] : e.target.value
  })

  handleSubmit = (e) =>{
    e.preventDefault();
    
    const { link, name, avatar } = this.state;

    //Check for errors
    if(link === ''){
      this.setState({ errors: { link: 'Link is required'}});
      return;
    }
    if(name === ''){
      this.setState({ errors: { name: 'Name is required'}});
      return;
    }
    if (avatar === '') {
      this.setState({ errors: { avatar: 'Avatar Image is required'}})
    }
    const newPropertyCategory = {
      link,
      name,
      avatar
    }
   
    
    //Submit Category
    this.props.addSponsor(newPropertyCategory)
    NotificationManager.success('Sponsor added!', 'Successful!', 2000);
    
     //Clear state
     this.setState({
      link: '',
      name: '',
      avatar: '',
      errors: {}
    })
    this.props.history.push('/admin/index');
    
  }
  
  render() {
  const classes = useStyles();
  const { link, name, avatar, errors } = this.state;

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={this.handleSubmit}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Create Sponsor"
          title="Sponsor add"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the link "
                label="Link"
                value={link}
                onChange = {this.onChangeInput}
                name="link"
                error={errors.link}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={6}
            >
              <TextField
                fullWidth
                label="Sponsor name"
                name="name"
                value={name}
                onChange = {this.onChangeInput}
                name="name"
                error={errors.name}
                variant="outlined"
              />
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />

        <CardActions>
        <Button
          color="primary"
          fullWidth
          value={avatar}
          name="avatar"
          error={errors.avatar}
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>

        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
    )
  }
}

export default connect(null, {sponsorAdd})(addSponsor);
