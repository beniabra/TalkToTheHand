import { Box, Button, Flex, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Translate } from './Translate';
import { FaArrowDown } from 'react-icons/fa';
import { FaUndoAlt } from 'react-icons/fa';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [text, setText] = useState<string>("");

  if (!browserSupportsSpeechRecognition) {
    return <span>Sorry, this browser doesn't support speech recognition. Try Chrome, Safari, or Edge. </span>;
  }

  const handleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const MicFilled = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
      <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
    </svg>
  );

  const MicEmpty = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
      <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"/>
      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
    </svg>
  );

  const handleEdit = () => {
    setText(transcript);
  };


  return (
    <div>
      <style>
        {`
          .readonly-textarea {
            cursor: default !important;
            border: 1px solid black;
          }

          .white-input {
            background-color: white;
            border: 1px solid black;
          }
        `}
      </style>
      <Flex justifyContent="center">
  <div>
    <Button
      marginRight={0}
      colorScheme='teal'
      height={150}
      width={150}
      borderRadius={"50%"}
      onClick={() => {handleListening();}}
    >
      {listening ? <MicEmpty /> : <MicFilled />}
    </Button>
  </div>
  <div>
    <Flex flexDirection="column" alignItems="center">
      <Box width="100%" py={4} textAlign="center"></Box>
      <Textarea
        marginLeft={20}
        width={700}
        display={'inline-block'}
        value={transcript  || "Your speech input..."}
        readOnly={true}
        className="readonly-textarea"
      />
      <Box width="100%" py={3} textAlign="center"></Box>
      <Flex>
        <Button marginLeft={"5px"} colorScheme='teal' onClick={() => {setText(""); resetTranscript()}}>
          Reset&nbsp;&nbsp;<FaUndoAlt />
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button marginLeft={"5px"} colorScheme='teal' onClick={handleEdit}>
          <FaArrowDown />
        </Button>
      </Flex>
      <Box width="100%" py={3} textAlign="center"></Box>
    </Flex>
  </div>
</Flex>
      <Input 
        value={text} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)} 
        margin={"10px"}  
        padding={"20px"} 
        className="white-input" 
        style={{ width: '70%', margin: 'auto' }}
        placeholder='Type to translate...' 
      />

      <Box width="100%" py={3} textAlign="center"></Box>

      <Translate 
        text={text}
      ></Translate>
    </div>
  );
};
export default Dictaphone;
