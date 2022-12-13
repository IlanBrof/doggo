import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ paddingBottom: '10px' }}>
        <h2 className='menu-title'>{props.title}</h2>
        {props.children}
        {/* <Box sx={{ bgcolor: 'white', height: '35vh', marginTop: '15px', marginBottom: '15px', borderRadius: '10px', borderWidth:'1px', borderStyle: 'solid', borderColor:'#e6e6e6'}} />
        <Box sx={{ bgcolor: 'white', height: '35vh', marginTop: '15px', marginBottom: '15px', borderRadius: '10px', borderWidth:'1px', borderStyle: 'solid', borderColor:'#e6e6e6'}} />
        <Box sx={{ bgcolor: 'white', height: '35vh', marginTop: '15px', marginBottom: '15px', borderRadius: '10px', borderWidth:'1px', borderStyle: 'solid', borderColor:'#e6e6e6'}} /> */}
      </Container>
    </React.Fragment>
  );
}
