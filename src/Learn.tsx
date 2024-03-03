import React, { useState } from 'react';
import { Grid, GridItem, TabList, Text, Button } from '@chakra-ui/react';

export function Learn() {

  const [title, setTitle] = useState<string>('Select a lesson');
  const [content, setContent] = useState<string>('');

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name
    setTitle(buttonName);
    setContent("Coming Soon")
  };

    return (
      <>
      <Grid
        templateAreas={`"nav main"
                        "nav footer"`}
        gridTemplateRows={'35px 1fr 30px'}
        gridTemplateColumns={'190px 1fr'}
        
        gap='5'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='6' bg='teal' area={'nav'}>
          <TabList paddingTop="4" paddingBottom="4" color="white" style={{ marginRight: "auto" }} >
            <Grid templateRows='repeat(4, 1fr)'>
              <Text as='b'>Lessons</Text>
              <Button name="Alphabet" colorScheme='teal' variant='solid' onClick={onClick}>Alphabet</Button>
              <Button name="Numbers" colorScheme='teal' variant='solid' onClick={onClick}>Numbers</Button>
              <Button name="Basics" colorScheme='teal' variant='solid' onClick={onClick}>Basics</Button>
              <Button name="People" colorScheme='teal' variant='solid' onClick={onClick}>People</Button>
              <Button name="Greetings" colorScheme='teal' variant='solid' onClick={onClick}>Greetings</Button>
              <Button name="Universal Signs" colorScheme='teal' variant='solid' onClick={onClick}>Universal Signs</Button>
              <Button name="Emotions" colorScheme='teal' variant='solid' onClick={onClick}>Emotions</Button>
              <Button name="Actions" colorScheme='teal' variant='solid' onClick={onClick}>Actions</Button>
              <Button name="Time" colorScheme='teal' variant='solid' onClick={onClick}>Time</Button>
              <Button name="Colors" colorScheme='teal' variant='solid' onClick={onClick}>Colors</Button>
              <Button name="Food" colorScheme='teal' variant='solid' onClick={onClick}>Food</Button>
              <Button name="Places" colorScheme='teal' variant='solid' onClick={onClick}>Places</Button>
              <Button name="Animals" colorScheme='teal' variant='solid' onClick={onClick}>Animals</Button>
              <Button name="Clothing" colorScheme='teal' variant='solid' onClick={onClick}>Clothing</Button>
              <Button name="Vehicles" colorScheme='teal' variant='solid' onClick={onClick}>Vehicles</Button>
              <Button name="Jobs" colorScheme='teal' variant='solid' onClick={onClick}>Jobs</Button>
              <Button name="Sports" colorScheme='teal' variant='solid' onClick={onClick}>Sports</Button>
            </Grid>
          </TabList>
        </GridItem>
        <GridItem pl='2' bg='teal.200' area={'main'}>
          {title}
        </GridItem>
        <GridItem pl='2' bg='teal.100' area={'footer'}>
          {content}
        </GridItem>
      </Grid>
      </>
    );
  };
  