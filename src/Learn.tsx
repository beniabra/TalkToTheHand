import React, { useState } from 'react';
import { Grid, GridItem, TabList, Text, Button, SimpleGrid, Card, CardBody, Box } from '@chakra-ui/react';
import wordsData from "../src/data/words.json"
import { Word } from "../src/interface/word"
import ReactCardFlip from 'react-card-flip';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const { WORDS }: Record<string, Word[]> = wordsData as Record<string, Word[]>;

export function Learn() {

  const [title, setTitle] = useState<string>('Alphabet');
  const [allWords] = useState<Word[]>(WORDS);
  const [currentWords, setCurrentWords] = useState<Word[]>(allWords.filter(
    (word: Word): boolean =>
      word.category === title
  ));
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  
  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  const handleNextCard = () => {
    if (currentCardIndex < currentWords.length)
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % currentWords.length);
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1) % currentWords.length);
    } else {
      setCurrentCardIndex((prevIndex) => currentWords.length - 1);
    }
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name
    setTitle(buttonName);
    setCurrentCardIndex(0);
    setCurrentWords((prevWords: Word[]) => {
      return allWords.filter((word: Word) => word.category === buttonName);
    });
  };

    return (
      <>
      <Grid
        templateAreas={`"nav main"
                        "nav footer"`}
        gridTemplateRows={'35px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        
        gap='5'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='6' bg='teal' area={'nav'}>
          <TabList paddingTop="4" paddingBottom="4" color="white" style={{ marginRight: "auto" }} >
            <Grid templateRows='repeat(4, 1fr)'>
              <Text as='b'>Lessons</Text>
              <Button name="Alphabet" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Alphabet</Button>
              <Button name="Numbers" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Numbers</Button>
              
              <Box bg='teal.550' w='100%' p={4}></Box>
              
              <Button name="Basics" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Basics</Button>

              <Box bg='teal.550' w='100%' p={4}></Box>

              <Button name="Actions" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Actions</Button>
              <Button name="Animals" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Animals</Button>
              <Button name="Clothing" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Clothing</Button>
              <Button name="Colors" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Colors</Button>
              <Button name="Emotions" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Emotions</Button>
              <Button name="Food" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Food</Button>
              <Button name="Greetings" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Greetings</Button>
              <Button name="Jobs" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Jobs</Button>
              <Button name="People" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>People</Button>
              <Button name="Places" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Places</Button>
              <Button name="Sports" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Sports</Button>
              <Button name="Time" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Time</Button>
              <Button name="Vehicles" colorScheme='teal' variant='solid' borderRadius='0px' onClick={onClick}>Vehicles</Button>
            </Grid>
          </TabList>
        </GridItem>
        <GridItem pl='2' bg='teal.200' area={'main'}>
          {title}
        </GridItem>
        <GridItem pl='2' bg='teal.100' area={'footer'}>
        <SimpleGrid columns={2} spacing={5}>
          <Card  onClick={flipCard} >              
             <ReactCardFlip containerStyle={{ height: '275px' }} isFlipped={isFlipped} flipDirection="horizontal">
              <CardBody>
                  <img  src={require('./images/' + currentWords[currentCardIndex].image)} alt={currentWords[currentCardIndex].name}></img>
              </CardBody>
              <CardBody>
                <b>{currentWords[currentCardIndex].name}</b>
              </CardBody>
            </ReactCardFlip> 
          </Card>
          </SimpleGrid>
          <Button onClick={handlePrevCard}><FaArrowLeft /> </Button>
          <Button onClick={handleNextCard}><FaArrowRight /></Button>

          {/* <Box bg='teal.100' w='100%' p={4} color='white'>
            <Button onClick={flipCard}>Flip Cards</Button>
          </Box>
          <SimpleGrid columns={4} spacing={5}>
            {currentWords.map(currentWords => (
              <Card>
                <ReactCardFlip containerStyle={{ height: '275px' }} isFlipped={isFlipped} flipDirection="horizontal">
                  <CardBody>
                      <img  src={require('./images/' + currentWords.image)} alt={currentWords.name}></img>
                  </CardBody>
                  <CardBody>
                    <b>{currentWords.name}</b>
                  </CardBody>
                </ReactCardFlip>
              </Card>
            ))}
          </SimpleGrid> */}
        </GridItem>
      </Grid>
      </>
    );
  };
  