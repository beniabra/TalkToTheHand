import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

export interface TranslateProps {
    text: string
}

export function Translate({text}: TranslateProps): JSX.Element {
    const [wordList, setWordList] = useState<string[]>([]);
    const [allWords, setAllWords] = useState<Word[]>([]);

    function splitText(){
        var newList = text.split(" ");
        setWordList(newList.map((word) => word.replace(/[,\.]/g, '')));
        let modifiedList: string[] = [];
        for (var i = 0; i < wordList.length; i++) {
            if (allWords.find((curr: string): boolean => curr.name === wordList[i])){
                modifiedList = [...modifiedList, wordList[i]]
            } else {
                
                modifiedList = [...modifiedList, ...wordList[i].split("")]
            }
        }
        setWordList([...modifiedList]);
    }

    return (
      <div>
        <Button colorScheme="teal" onClick={splitText}>Translate</Button>
        {wordList.map((word) => <div>{word}</div>)}
      </div>
    );
  };