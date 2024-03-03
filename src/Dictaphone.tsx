import { Button, Grid, GridItem, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Translate } from './Translate';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [text, setText] = useState<string>("");

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const MicFilled = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
      <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
    </svg>
  );

  const MicEmpty = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
      <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"/>
      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
    </svg>
  );


  return (
    <div>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem w='100%' >
          <Button colorScheme='teal' height={100} width={100} borderRadius={"50%"} onClick={() => {handleListening();}}>{listening ? <MicEmpty></MicEmpty> : <MicFilled></MicFilled>}</Button>
          <Button marginLeft={"5px"} colorScheme='blue' onClick={() => {setText(""); resetTranscript()}}>Reset</Button>
        </GridItem>
        <GridItem w='100%' >
        <Textarea display={'inline-block'} value={transcript} />
        </GridItem>
      </Grid>
      <Input value={text} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)} margin={"10px"} placeholder='Type to translate' />

      <Translate
        text={text}
      ></Translate>
    </div>
  );
};
export default Dictaphone;
