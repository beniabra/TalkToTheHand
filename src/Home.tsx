import React from 'react';
import { Box, Fade, Flex, Text } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa'; 
import VisibilitySensor from "react-visibility-sensor"


export function Home() {
    return (
        <div>
            <div>
                <Box bg="#efddcc" width="100%" py={6} textAlign="center"></Box>
                <Flex 
                    justify="center" 
                    alignItems="flex-start"
                    //paddingTop={9}
                    height="100vh"
                    bgImage="asl.webp"
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    color="#ffffff"
                    fontFamily="sans-serif"
                    textAlign="center"
                    position="relative"
                >
                    <Text 
                        fontSize="45px" 
                        fontWeight="bold" 
                        color="#2a3555"
                        style={{ animation: 'moveText 3s infinite' }} // Add animation to the text
                    >
                        Hi, welcome to Talk to the Hand
                    </Text>
                    <Box position="absolute" bottom="3%" left="50%" transform="translateX(-50%)">
                        <FaArrowDown style={{ animation: 'bounceArrow 1s infinite', color:'#2a3555'}} />
                    </Box>
                </Flex>
                <style>
                    {`
                    @keyframes moveText {
                        0% { transform: translateY(-10px); }
                        50% { transform: translateY(10px); }
                        100% { transform: translateY(-10px); }
                    }
                    @keyframes bounceArrow {
                        0%, 10%, 50%, 80%, 100% {
                            transform: translateY(0);
                        }
                        40% {
                            transform: translateY(-30px);
                        }
                        80% {
                            transform: translateY(-15px);
                        }
                    }

                    .bounce {
                        animation: bounce 1s;
                    }
                    @keyframes bounce {
                        0% { transform: translateY(70px); }
                        100% { transform: translateY(0px); }
                    }
                    `}
                </style>
            </div>
            
            <div>
                <VisibilitySensor offset={{bottom:200}} partialVisibility={true}>
                    {({ isVisible }: { isVisible: boolean }) =>
                        <Fade in={isVisible}>
                            <div className={isVisible ? "bounce" : ""}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '90px' }}>
                                    <div style={{ flex: 1, boxShadow: '0px 4px 6px rgba(0,0,0,0.3)' }}>
                                        <img src="speech-to-ASL.jpg" alt="Speech to ASL" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                    <div style={{ flex: 1, marginLeft: '20px' }}>
                                        <h2 style={{ fontSize: '35px'}}><b>Speech to ASL Translator</b></h2>
                                        <p>Don't know how to say something in ASL? No problem! Our real-time speech-to-ASL translator makes it easy to communicate in ASL!</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    }
                </VisibilitySensor>
                
                <Box bg="#efddcc">
                    <VisibilitySensor offset={{bottom:200}} partialVisibility={true}>
                        {({ isVisible }: { isVisible: boolean }) =>
                            <Fade in={isVisible}>
                                <div className={isVisible ? "bounce" : ""}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '90px' }}>
                                        <div style={{ flex: 1, boxShadow: '0px 4px 6px rgba(0,0,0,0.3)' }}>
                                            <img src="text-to-ASL.jpg" alt="Text to ASL" style={{ maxWidth: '100%', height: 'auto' }} />
                                        </div>
                                        <div style={{ flex: 1, marginLeft: '20px' }}>
                                            <h2 style={{ fontSize: '35px'}}><b>Text to ASL Translator</b></h2>
                                            <p>No more flipping through long, confusing ASL handbooks. Our text-to-ASL translator instantly converts your text into its ASL equivalent.</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        }
                    </VisibilitySensor>
                </Box>

                <VisibilitySensor offset={{bottom:200}} partialVisibility={true}>
                    {({ isVisible }: { isVisible: boolean }) =>
                        <Fade in={isVisible}>
                            <div className={isVisible ? "bounce" : ""}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '90px' }}>
                                    <div style={{ flex: 1, boxShadow: '0px 4px 6px rgba(0,0,0,0.3)'  }}>
                                        <img src="learn-ASL.jpg" alt="Text to ASL" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                    <div style={{ flex: 1, marginLeft: '20px' }}>
                                        <h2 style={{ fontSize: '35px'}}><b>Learn ASL</b></h2>
                                        <p>Looking to learn ASL? Learn fundamentals in an easy-to-follow format, empowering users to communicate effectively in ASL in minutes.</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    }
                </VisibilitySensor>
            </div>
        </div>
    );
};