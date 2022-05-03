import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  initialcards,
  shufflecards,
  matchedCards,
  scoreDown,
  scoreUp,
} from "../redux/gameSlice";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import Card from "./Card";

function Game() {
  const cards = useSelector((state) => state.game.cards);
  const dispatch = useDispatch();
  const [turn, setTurn] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    dispatch(initialcards());
    dispatch(shufflecards());
  }, []);

  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisabled(true);
      if (choiseOne.src === choiseTwo.src) {
        dispatch(scoreUp());
        dispatch(matchedCards(choiseOne));
        resetTurn();
      } else {
        dispatch(scoreDown());
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiseOne, choiseTwo]);

  const handleChoise = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  };

  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurn(turn + 1);
    setDisabled(false);
  };

  return (
    <Container maxW="container.md" mt={5}>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {cards.map((card) => (
          <div key={card.id}>
            <GridItem>
              <Card
                card={card}
                handleChoise={handleChoise}
                flipped={card == choiseOne || card == choiseTwo}
                disabled={disabled}
              />
            </GridItem>
          </div>
        ))}
      </Grid>
    </Container>
  );
}

export default Game;
