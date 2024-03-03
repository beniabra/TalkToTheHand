/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Word } from './interface/word';
import wordsData from "./data/words.json";


const { WORDS }: Record<string, Word[]> =
  // Typecast the test data that we imported to be a record matching
  //  strings to the question list
  wordsData as Record<string, Word[]>;

const DISCARDS : string[] = ["a", "an", "the", "in", "on", "at", "of", "is", "am", "are", "do", "does", "have", "has", "to"];

export interface TranslateProps {
    text: string
}

export function Translate({text}: TranslateProps): JSX.Element {
    const [wordList, setWordList] = useState<Word[]>([]);
    const [allWords, setAllWords] = useState<Word[]>(WORDS);

    function parseString(toParse: string) {
        if (DISCARDS.includes(toParse)){
            return "";
        } else {
            if (toParse === "me" || toParse === "my" || toParse === "i") {
                return "me";
            } 
            else if (toParse === "hey" || toParse === "hi" || toParse === "hello"){
                return "hello";
            }
            else if (toParse === "eat" || toParse === "food") {
                return "eat";
            }
            else {
                return toParse;
            }
        }
    }

    function splitText(){
        setWordList([]);
        var newList = text.split(" ");
        var cleanedList = newList.map((word) => word.replace(/[,.?]/g, ''));
        var lowerCased = cleanedList.map((word) => word.toLowerCase());
        // let modifiedList: string[] = [];
        lowerCased.forEach((word) => {
            var lookFor = parseString(word);
            if (allWords.find((curr: Word): boolean => curr.name === lookFor)){
                var found = allWords.find((curr: Word): boolean => curr.name === lookFor);
                console.log("found" + word);
                // if (found) {
                setWordList((prevWordList) => [...prevWordList, found!]);
            } else {
                console.log("didn't find")
                for (let i = 0; i < lookFor.length; i++) {
                    console.log(word.charAt(i));
                    (function (char) {
                        var letter = allWords.find((curr: Word) => curr.name === char);
                        if (letter) {
                            setWordList((prevWordList) => [...prevWordList, letter!]);
                        }
                    })(word.charAt(i));
                }
            }
        })            
    }

    return (
      <div>
        <Button colorScheme="teal" onClick={splitText}>Translate</Button>
        <SimpleGrid columns={4} spacing={10}>{wordList.map((word) => 
        <div>
            <Box><img  src={require('./images/' + word.image)} alt={word.name}></img> {word.name}</Box>
            
        </div>)}
        </SimpleGrid>
        
      </div>
    );
  };