import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';


export function Home() {
    return (
        <div>
            <Box bg="#efddcc" width="100%" py={10} textAlign="center"></Box>
            <Flex 
                justify="center" 
                alignItems="flex-start" // Align items to the top
                height="100vh"
                bgImage="asl.webp" // Specify the path to your image
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                color="#ffffff" // Text color
                fontFamily="sans-serif"
                textAlign="center"
            >
            <Text fontSize="45px" fontWeight="bold" color="#2a3555">
                Hi, welcome to Talk to the Hand
            </Text>
        </Flex>
      </div>
    );
};
  