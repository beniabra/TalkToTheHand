import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import Dictaphone from './Dictaphone';

export function Converter() {

    

    return (
      <div>
        <Box padding={"100px"} h="100vh" bg="#d9fff7">
        <Text fontSize="3xl" textAlign="center" >
            Hi, this is our Converter.
        </Text>
        <Dictaphone></Dictaphone>
        </Box>
      </div>
    );
  };
  