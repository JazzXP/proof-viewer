import React, { useState } from 'react';
import styled from 'styled-components';
import useEventListener from '@use-it/event-listener';
import {
  FavShortImageOverlay,
  ListControlWithButtons,
  IconButton,
  Heading,
  HorizontalThumbnailList,
} from '../components';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { UserData } from '../state/UserData';
import { useSelector, useDispatch } from 'react-redux';
import { addFavourite, addShortlist, removeShortlist, removeFavourite, StoreShape } from '../state';

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(90vw - 220px);
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
`;

const StyledArticleWithMargin = styled.article`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 64px;
`;

const StyledSectionVertical = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Proofs = () => {
  const shortlist = useSelector<StoreShape, string[]>((state) => state.userData?.shortlist) ?? [];
  const favlist = useSelector<StoreShape, string[]>((state) => state.userData?.favourites) ?? [];
  const imageList = useSelector<StoreShape, string[]>((state) => state.userData?.proofs) ?? [];
  const thumbnailList = useSelector<StoreShape, string[]>((state) => state.userData?.thumbnails) ?? [];
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

  useEventListener('keyup', (event: any) => {
    if (event.code && event.code === 'ArrowRight') {
      moveNext();
    } else if (event.code && event.code === 'ArrowLeft') {
      movePrev();
    }
  });

  return (
    <StyledSectionVertical>
      <StyledSection
        onKeyUp={(event) => {
          console.log(event.keyCode);
        }}
      >
        <StyledArticleWithMargin>
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
        </StyledArticleWithMargin>
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
      <StyledArticle>
        <HorizontalThumbnailList
          thumbnails={thumbnailList}
          current={thumbnailList[currentImageIndex]}
          onClick={setCurrentImageIndex}
        />
      </StyledArticle>
    </StyledSectionVertical>
  );
};
