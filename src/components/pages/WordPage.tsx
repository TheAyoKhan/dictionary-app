import React, { FC, useEffect, useState } from "react";
import { getWordData } from "../../application/word";
import { WordData } from "../../domain/wordData";
import Loading from "../Loading";
import Word from "../WordParts/Word";

const WordPage: FC = () => {
  const [wordData, setWordData] = useState<WordData[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const data = await getWordData("word");
      if (data) setWordData(data);
    })();
  }, []);

  return (
    <div className="App">
      {wordData ? wordData.map((data, i) => {
        return <Word {...data} key={i} />
      }) : wordData === null ? <div>Sorry, couldn&apos;t load the data</div> : <Loading />}
    </div>
  );
}

export default WordPage;