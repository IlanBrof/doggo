import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SimpleContainer from './components/SimpleContainer';
import Box from '@mui/material/Box';


function App(props) {

  const routinesTitle = 'Routines';
  const myDogsTitle = 'My Dogs';

  return (
    <div className='body'>
      <ResponsiveAppBar />

      {/* Routines Component */}
      <SimpleContainer title={routinesTitle}>
       <Box sx={{ bgcolor: 'white', height: '35vh', marginTop: '15px', marginBottom: '15px', borderRadius: '10px', borderWidth:'1px', borderStyle: 'solid', borderColor:'#e6e6e6'}} />
       <Box sx={{ bgcolor: 'white', height: '35vh', marginTop: '15px', marginBottom: '15px', borderRadius: '10px', borderWidth:'1px', borderStyle: 'solid', borderColor:'#e6e6e6'}} />
       <Box sx={{ bgcolor: 'white', height: '35vh', marginTop: '15px', marginBottom: '15px', borderRadius: '10px', borderWidth:'1px', borderStyle: 'solid', borderColor:'#e6e6e6'}} />
       </SimpleContainer>
      {/* Routines Component */}

      {/* My Dogs Component */}
      <SimpleContainer title={myDogsTitle} />
      {/* My Dogs Component */}
    </div>
  );
}

export default App;
