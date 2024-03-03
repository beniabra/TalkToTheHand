import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export function About() {
    return (
      <Box padding={"5px"} h="100vh" bg="#d9fff7" marginLeft='100px' marginRight='100px'>
        <Text textAlign="center">
          <div className="about-us-container">
            <h2 style={{ fontSize: '45px'}}><b>About Us</b></h2>
            <br></br>
            <p style={{ fontSize: '25px'}}>Welcome to our website dedicated to enhancing accessibility and connectivity through American Sign Language (ASL). We offer three main features to support individuals in their ASL journey:</p>
            <br></br>
            <div className="feature">
              <h3 style={{ fontSize: '30px'}}><b>Speech to ASL Translator</b></h3>
              <p>Our innovative tool allows users to convert spoken language into ASL signs, breaking down communication barriers and fostering inclusivity in real-time conversations.</p>
            </div>
            <br></br>
            <div className="feature">
              <h3 style={{ fontSize: '30px'}}><b>Text to ASL Translator</b></h3>
              <p>With our text-to-ASL converter, written messages can be transformed into ASL signs, empowering users to express themselves effectively and bridge the gap between written and signed communication.</p>
            </div>
            <br></br>
            <div className="feature">
              <h3 style={{ fontSize: '30px'}}><b>ASL Learning Hub</b></h3>
              <p>Dive into our comprehensive ASL learning section, designed for beginners and advanced learners alike. Explore interactive lessons, practice exercises, and resources curated to help you master ASL and connect with the vibrant Deaf community.</p>
            </div>

            <p>Join us on this journey to promote accessibility, enhance communication, and celebrate the richness of ASL. Start exploring today!</p>
          </div>
        </Text>
      </Box>
    );
  };
  