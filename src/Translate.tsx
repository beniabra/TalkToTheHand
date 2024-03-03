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
const NUMBERS : string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

export interface TranslateProps {
    text: string
}

export function Translate({text}: TranslateProps): JSX.Element {
    const [wordList, setWordList] = useState<Word[]>([]);
    const [allWords, setAllWords] = useState<Word[]>(WORDS);

    function parseString(toParse: string) {
        if (NUMBERS.includes(toParse)){
            if (toParse === "one"){
                return "1";
            } else if (toParse === "two"){
                return "2";
            } else if (toParse === "three"){
                return "3";
            } else if (toParse === "four"){
                return "4";
            } else if (toParse === "five"){
                return "5";
            } else if (toParse === "six"){
                return "6";
            } else if (toParse === "seven"){
                return "7";
            } else if (toParse === "eight"){
                return "8";
            } else if (toParse === "nine"){
                return "9";
            }
        }
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
            if (allWords.find((curr: Word): boolean => curr.name === lookFor  || (lookFor.endsWith('s') && curr.name === lookFor.slice(0, -1)))){
                var found = allWords.find((curr: Word): boolean => curr.name === lookFor  || (lookFor.endsWith('s') && curr.name === lookFor.slice(0, -1)));
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
        <Box width="100%" py={8} textAlign="center"></Box>
        <SimpleGrid columns={4} spacing={10}>{wordList.map((word) => 
        <div>
            <Box borderRadius="20px" overflow="hidden">
                <img  src={require('./images/' + word.image)} alt={word.name} style={{ borderRadius: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', height:'200px', display: 'inline-block' }} ></img> 
                <span style={{ display: 'block', textAlign: 'center' }}>{word.name}</span>
            </Box>
        </div>)}
        </SimpleGrid>
        
      </div>
    );
  };