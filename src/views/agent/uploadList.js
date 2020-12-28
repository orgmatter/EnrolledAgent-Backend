import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';

const UseStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const uploadList = () => {
  const classes = UseStyles();

    const toast = (innerHTML) => {
      const el = document.getElementById('toast')
      el.innerHTML = innerHTML
      el.className = 'show'
      setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
    }
  
    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta, remove }, status) => {
      if (status === 'headers_received') {
        toast(`${meta.name} has been successfully uploaded!`)
        remove()
      } else if (status === 'aborted') {
        toast(`${meta.name}, upload failed...`)
      }
    }
  return (
    <Page
      className={classes.root}
      title="Enrolled Agents"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3} >
          
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        inputContent="Upload CSV or Excel"
        styles={{
          dropzone: { width: 400, height: 200, backgroundColor: '#fff' },
          dropzoneActive: { borderColor: 'blue' },

        }}
      />
        </Box>
      </Container>
    </Page>
  );
};

export default uploadList;
