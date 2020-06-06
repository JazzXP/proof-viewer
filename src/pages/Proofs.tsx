import React, { useState, useCallback } from "react";
import styled from "styled-components";
import useEventListener from "@use-it/event-listener";
import {
  FavShortImageOverlay,
  ListControl,
  IconButton,
  Heading,
} from "../components";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { UserData } from "../state/userdata";
import { useSelector } from "react-redux";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vw;
`;

const StyledArticleVertical = styled.article`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const StyledArticle = styled.article`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 64px;
`;

export const Proofs = () => {
  const shortlist = useSelector<UserData, string[]>((state) => state.shortlist);
  const favlist = useSelector<UserData, string[]>((state) => state.favourites);
  const imageList = useSelector<UserData, string[]>((state) => state.proofs);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moveNext = () => {
    if (currentImageIndex < imageList.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const movePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  useEventListener("keyup", (event: any) => {
    if (event.code && event.code === "ArrowRight") {
      moveNext();
    } else if (event.code && event.code === "ArrowLeft") {
      movePrev();
    }
  });

  return (
    <StyledSection
      onKeyUp={(event) => {
        console.log(event.keyCode);
      }}
    >
      <StyledArticle>
        <IconButton
          icon={faArrowLeft}
          onClick={() => {
            movePrev();
          }}
          disabled={currentImageIndex === 0}
        />
        <FavShortImageOverlay
          imageUrl={imageList[currentImageIndex]}
          onClickFav={(event) => {}}
          onClickShortlist={(event) => {}}
        />
        <IconButton
          icon={faArrowRight}
          onClick={() => {
            moveNext();
          }}
          disabled={currentImageIndex >= imageList.length - 1}
        />
      </StyledArticle>
      <StyledArticleVertical>
        <Heading type="h2">Shortlist</Heading>
        <ListControl items={shortlist} />
        <Heading type="h2">Favourites</Heading>
        <ListControl items={favlist} />
      </StyledArticleVertical>
    </StyledSection>
  );
};