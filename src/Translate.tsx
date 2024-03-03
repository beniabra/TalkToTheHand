import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

export interface TranslateProps {
    text: string
}

export function Translate({text}: TranslateProps): JSX.Element {
    const [wordList, setWordList] = useState<string[]>([]);

    function splitText(){
        for (var i = 0; i < text.length; i++){
            setWordList([...wordList, text[i]]);
        }
    }

    return (
      <div>
        <Button onClick={splitText}>Translate</Button>
        {text}
        {/* {wordList.map((word: string) => {
            return (
                <div>{word}</div>
            );
        })} */}
      </div>
    );
  };