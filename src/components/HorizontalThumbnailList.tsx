import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface HorizontalThumbnailListProps {
  thumbnails: string[];
  current?: string;
  onClick?: (item: number) => void;
}

const StyledUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const StyledLI = styled.li`
  display: inline-block;
  margin: 0 8px;
`;

const OutlinedImg = styled.img`
  border: 2px solid white;
`;

const StyledImg = styled.img`
  border 2px solid transparent;
  cursor: pointer;
`;

interface imgprops {
  [name: string]: number;
}

export const HorizontalThumbnailList = (props: HorizontalThumbnailListProps) => {
  const [thumbWidths, setThumbWidths] = useState<imgprops>();
  useEffect(() => {
    async function fetchData() {
      return Promise.all(
        props.thumbnails.map((imgUrl) => {
          const p = Promise;
          const img = new Image();
          img.src = imgUrl;
          img.onload = () => {
            const newVal: imgprops = { ...thumbWidths };
            newVal[imgUrl] = img.width;
            setThumbWidths(thumbWidths);
            return p.resolve();
          };
        })
      );
    }
    fetchData();
  }, [props.thumbnails]);

  const scrollToRef = createRef<HTMLImageElement>();
  useEffect(() => {
    scrollToRef?.current?.scrollIntoView?.({
      block: 'end',
      behavior: 'smooth',
    });
  }, [scrollToRef, scrollToRef.current]);
  return (
    <StyledUL>
      {props.thumbnails.map((item, idx) => {
        const width = thumbWidths?.[item];
        return (
          <StyledLI key={item}>
            {item === props.current ? (
              <OutlinedImg src={item} ref={scrollToRef} width={width} />
            ) : (
              <StyledImg src={item} width={width} role="button" onClick={() => props.onClick?.(idx)} />
            )}
          </StyledLI>
        );
      })}
    </StyledUL>
  );
};
