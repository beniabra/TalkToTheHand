import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import Dictaphone from './Dictaphone';

export function Converter() {
    return (
      <div>
        <Box padding={"5px"} h="100vh" bg="#d9fff7">
          <Text fontSize="4xl" textAlign="center" >
              Hi, this is our Translator
          </Text>
          <Text padding={"5px"} fontSize="3m" textAlign="center" >
              Instantly translate any speech or text into ASL.
          </Text>
          <Box width="100%" py={5} textAlign="center"></Box>
          <Dictaphone></Dictaphone>
        </Box>
      </div>
    );
  };
  