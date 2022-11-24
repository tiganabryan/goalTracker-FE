import React, { useState, useEffect } from "react";

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Form from './components/Form';
import Goals from './components/Goals';

function App() {
  const log = console.log
    
  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>            
            <h1>{message}</h1>
            <Form />
            <Goals />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
