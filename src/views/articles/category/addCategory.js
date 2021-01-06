import React, { Component } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { addArticleCategory } from '../../../redux/_actions/articles/category/index';

// React Notification
import { NotificationManager } from 'react-notifications';
import {
  Box,
  Button,
  Card,
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

export class addCategory extends Component {
  state = {
    name: '',
    description: '',
    errors: {}
  };

  onChangeInput = (e) => this.setState({
    [e.target.name] : e.target.value
  })

  handleSubmit = (e) =>{
    e.preventDefault();
    
    const { name, description } = this.state;

    //Check for errors
    if(name === ''){
      this.setState({ errors: { name: 'name is required'}});
      return;
    }
    if(description === ''){
      this.setState({ errors: { description: 'description is required'}});
      return;
    }
    const newPropertyCategory = {
      name,
      description
    }
   
    
    //Submit Category
    this.props.addArticleCategory(newPropertyCategory)
    NotificationManager.success('Article category added!', 'Successful!', 2000);
    
     //Clear state
     this.setState({
      name: '',
      description: '',
      errors: {}
    })
    this.props.history.push('/admin/index');
    
  }
  
  render() {
  const classes = useStyles();
  const { description, name, errors } = this.state;

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
          subheader="Create Category"
          title="Article Category"
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
                helperText="Please specify the category name"
                label="Category name"
                value={name}
                onChange = {this.onChangeInput}
                name="name"
                error={errors.name}
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
                label="Category description"
                name="description"
                value={description}
                onChange = {this.onChangeInput}
                name="description"
                error={errors.description}
                variant="outlined"
              />
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
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

export default connect(null, {addArticleCategory})(addCategory);
