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
} from "@chakra-ui/react"
//import { ColorModeSwitcher } from "./ColorModeSwitcher"
//import { Logo } from "./Logo"
import { Home } from "./Home";
import { Converter } from "./Converter";
import { Learn } from "./Learn";
import { About } from "./About";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor="#d9fff7">

      <Tabs variant='soft-rounded' colorScheme='white'>
        <Flex
              as="nav"
              align="center"
              justify="space-between"
              padding="1rem 1rem"
              //bgGradient="linear(to-r, teal.500, purple.500)"
              bgGradient="linear(to-b, #167875, #d9fff7)"
              color="white"
        >
          <TabList paddingTop="4" paddingBottom="4" color="white">
            <Flex align="center" ml={5} mr={10}>
              Logo
            </Flex>
            
              <Tab color="#ffffff">Home</Tab>
              <Tab color="#ffffff">Speech to ASL Converter</Tab>
              <Tab color="#ffffff">Learn ASL</Tab>
              <Tab color="#ffffff">About</Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
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
