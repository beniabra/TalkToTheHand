/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Word } from './interface/word';

export interface TranslateProps {
    text: string
}

export function Translate({text}: TranslateProps): JSX.Element {
    const [wordList, setWordList] = useState<string[]>([]);
    const [allWords, setAllWords] = useState<Word[]>([]);

    function splitText(){
        var newList = text.split(" ");
        setWordList(newList.map((word) => word.replace(/[,.]/g, '')));
        let modifiedList: string[] = [];
        wordList.forEach((word) => {
            if (allWords.find((curr: Word): boolean => curr.name === word)){
                modifiedList = [...modifiedList, word]
            } else {
                
                modifiedList = [...modifiedList, ...word.split("")]
            }
        })
            
        setWordList([...modifiedList]);
    }

    return (
      <div>
        <Button colorScheme="teal" onClick={splitText}>Translate</Button>
        {wordList.map((word) => <div>{word}</div>)}
      </div>
    );
  };