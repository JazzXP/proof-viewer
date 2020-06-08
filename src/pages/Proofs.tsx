import React, { useState } from "react";
import styled from "styled-components";
import useEventListener from "@use-it/event-listener";
import {
  FavShortImageOverlay,
  ListControlWithButtons,
  IconButton,
  Heading,
} from "../components";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { UserData } from "../state/UserData";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavourite,
  addShortlist,
  removeShortlist,
  removeFavourite,
} from "../state";

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
  const shortlist =
    useSelector<UserData, string[]>((state) => state.shortlist) ?? [];
  const favlist =
    useSelector<UserData, string[]>((state) => state.favourites) ?? [];
  const imageList =
    useSelector<UserData, string[]>((state) => state.proofs) ?? [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

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
          onClickFav={() => {
            dispatch(addFavourite(imageList[currentImageIndex]));
          }}
          onClickShortlist={() => {
            dispatch(addShortlist(imageList[currentImageIndex]));
          }}
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
        <ListControlWithButtons
          items={shortlist}
          onRemove={(item?: string) => {
            if (item) {
              dispatch(removeShortlist(item));
            }
          }}
          onGoTo={(item?: string) => {
            if (item) {
              setCurrentImageIndex(imageList.indexOf(item));
            }
          }}
        />
        <Heading type="h2">Favourites</Heading>
        <ListControlWithButtons
          items={favlist}
          onRemove={(item?: string) => {
            if (item) {
              dispatch(removeFavourite(item));
            }
          }}
          onGoTo={(item?: string) => {
            if (item) {
              setCurrentImageIndex(imageList.indexOf(item));
            }
          }}
        />
      </StyledArticleVertical>
    </StyledSection>
  );
};
