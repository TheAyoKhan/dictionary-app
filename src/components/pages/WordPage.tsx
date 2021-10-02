import React, { FC, useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { getWordData } from "../../application/word";
import { WordData } from "../../domain/wordData";
import Loading from "../Loading";
import DataError from "../DataError";
import Word from "../WordParts/Word";
import styled from "styled-components";

type routeMatchTypes = {
  requestedWord: string;
}

const StyledWordPage = styled.div`
  &.Word-Page {
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const WordPage: FC = () => {
  const match = useRouteMatch<routeMatchTypes>();
  
  const [wordData, setWordData] = useState<WordData[] | undefined | null>(undefined);

  useEffect(() => {
    (async () => {
      const data = await getWordData("word");
      if (data) setWordData(data);
    })();
  }, []);

  return (
    <Switch>
      <StyledWordPage className="Word-Page">
        <Route path={`${match.path}/:requestedWord`}>
            {wordData ? wordData.map((data, i) => {
              return <Word {...data} key={i} />
            }) : wordData === null ? <DataError /> : <Loading />}
        </Route>
      </StyledWordPage>
    </Switch>
  );
}

export default WordPage;