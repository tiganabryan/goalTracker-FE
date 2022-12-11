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
    
  const [data, setData] = useState('');

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
        console.log(data)
      })
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>            
            <p>{!data ? "loading..." : data}</p>
            <Form />
            <Goals />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
