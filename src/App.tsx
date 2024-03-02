import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  TabPanels,
  TabList,
  Tabs,
  Tab,
  TabPanel,
  Flex,
  Grid,
} from "@chakra-ui/react"
//import { ColorModeSwitcher } from "./ColorModeSwitcher"
//import { Logo } from "./Logo"
import { Home } from "./Home";
import { Image } from "@chakra-ui/react";
import { Converter } from "./Converter";
import { Learn } from "./Learn";
import { About } from "./About";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor="#fffff">

      <Tabs variant='soft-rounded' colorScheme='teal'>
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
          <TabList paddingTop="4" paddingBottom="4" color="white" style={{ marginLeft: "auto" }}>
            <Grid templateColumns='repeat(4, 1fr)'>
              <Tab color="#ffffff" _hover={{ color: '#000000', backgroundColor: '#ffffff' }} >Home</Tab>
              <Tab color="#ffffff" _hover={{ color: '#000000', backgroundColor: '#ffffff' }}>Speech to ASL Converter</Tab>
              <Tab color="#ffffff" _hover={{ color: '#000000', backgroundColor: '#ffffff' }}>Learn ASL</Tab>
              <Tab color="#ffffff" _hover={{ color: '#000000', backgroundColor: '#ffffff' }}>About</Tab>
            </Grid>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel padding="0px">
            <Home></Home>
          </TabPanel>
          <TabPanel>
            <Converter></Converter>
          </TabPanel>
          <TabPanel>
            {/* Content for Learn ASL */}
            <Learn></Learn>
          </TabPanel>
          <TabPanel>
            {/* Content for About */}
            <About></About>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </Box>
  </ChakraProvider>
)
