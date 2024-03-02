import React from 'react';
import { Flex, Box, Link, Image } from '@chakra-ui/react';

export function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem 1rem"
      //bgGradient="linear(to-r, teal.500, purple.500)"
      bgGradient="linear(to-b, #167875, #d9fff7)"
      color="white"
    >
      <Flex align="center" ml={5} mr={10}>
        <Image src="hand-waving.png" alt="Logo" w="100px" h="auto" />
      </Flex>

      <Box>
        <Link href="#" mr={20}>
            Home
        </Link>
        <Link href="#speech" mr={20}>
            Speech to ASL Converter
        </Link>
        <Link href="#" mr={20}>
            Learn ASL
        </Link>
        <Link href="#" mr={20}>
            About
        </Link>
      </Box>
    </Flex>
  );
};