import React from 'react';
import { Box, Grid, Text, Image, Flex } from '@chakra-ui/react';

export function About() {
    return (
      <Box padding={"5px"} bg="#d9fff7" marginLeft='100px' marginRight='100px'>
        <style>
          {`
            .container {
              text-align: center;
            }

            .feature {
              background-color: #efddcc;
              padding: 20px;
              width: 70%;
              border-radius: 30px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
              margin-bottom: 35px;
              display: inline-block;
              transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            .feature:hover {
              transform: translateY(-8px);
            }

            .picture {
              padding: 10px;
              display: inline-block;
              transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            .picture:hover {
              transform: translateY(-8px);
            }
          `}
        </style>
        <Text textAlign="center">
          <div className="about-us-container">
            <h2 style={{ fontSize: '45px'}}><b>About Us</b></h2>
            <br></br>
            <p style={{ fontSize: '25px'}}>We are dedicated to enhancing accessibility and connectivity through American Sign Language (ASL).</p>
            <br></br>

            <h2 style={{ fontSize: '35px'}}><b>Meet Our Team</b></h2>
            <Box width="100%" py={3} textAlign="center"></Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={20}>
              <Flex align="center" justify="center">
                <Box>
                  <Grid gap={4} className="picture">
                    <Image src="aparna.jpg" alt="Aparna" borderRadius="lg" height="300px" objectFit="cover" />
                    <div style={{ fontSize: '23px'}}>
                      <Box width="100%" py={1} textAlign="center"></Box>
                        Aparna Roy
                      <Box width="100%" py={1} textAlign="center"></Box>
                    </div>
                  </Grid>
                </Box>
              </Flex>
              <Flex align="center" justify="center">
                <Box>
                  <Grid gap={4} className="picture">
                    <Image src="sneha.png" alt="Sneha" borderRadius="lg" height="300px" objectFit="cover" />
                    <div style={{ fontSize: '23px'}}>
                      <Box width="100%" py={1} textAlign="center"></Box>
                          Sneha Nangelimalil
                      <Box width="100%" py={1} textAlign="center"></Box>
                    </div>
                  </Grid>
                </Box>
              </Flex>
              <Flex align="center" justify="center">
                <Box>
                  <Grid gap={4} className="picture">
                    <Image src="benita.jpeg" alt="Benita" borderRadius="lg" height="300px" objectFit="cover" />
                    <div style={{ fontSize: '23px'}}>
                      <Box width="100%" py={1} textAlign="center"></Box>
                        Benita Abraham
                      <Box width="100%" py={1} textAlign="center"></Box>
                    </div>
                  </Grid>
                </Box>
              </Flex>
            </Grid>
            <br></br>
            <br></br>

            <h2 style={{ fontSize: '35px'}}><b>Our Services</b></h2>
            <p style={{ fontSize: '25px'}}>We offer three main features to support you in your ASL journey</p>
            <br></br>
            <div className="container">
              <div className="feature">
                <h3 style={{ fontSize: '30px'}}><b>Speech to ASL Translator</b></h3>
                <p>Our innovative tool allows your to convert spoken language into ASL signs, breaking down communication barriers and fostering inclusivity in real-time conversations.</p>
              </div>
              <br></br>
              <div className="feature">
                <h3 style={{ fontSize: '30px'}}><b>Text to ASL Translator</b></h3>
                <p>With our text-to-ASL converter, you can transform written text into ASL signs, empowering you to express yourself effectively and bridge the gap between written and signed communication.</p>
              </div>
              <br></br>
              <div className="feature">
                <h3 style={{ fontSize: '30px'}}><b>ASL Learning Hub</b></h3>
                <p>Dive into our comprehensive ASL learning section, designed for beginners and advanced learners alike. Explore interactive lessons, practice exercises, and resources curated to help you master ASL and connect with the vibrant deaf community.</p>
              </div>
            </div>

            <Box width="100%" py={5} textAlign="center"></Box>
            <p style={{ fontSize: '30px'}}>Join us on this journey to promote accessibility, enhance communication, and celebrate the richness of ASL. Start exploring today!</p>
          </div>
          <Box width="100%" py={7} textAlign="center"></Box>
        </Text>
      </Box>
    );
  };
  