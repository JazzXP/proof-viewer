import React, { MouseEvent } from "react";
import { OverlayImage } from "./OverlayImage";
import { IconButton } from "./IconButton";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Heading } from ".";

export interface FavShortImageOverlayProps {
  imageUrl: string;
  onClickFav: React.EventHandler<MouseEvent>;
  onClickShortlist: React.EventHandler<MouseEvent>;
}

export const FavShortImageOverlay = (props: FavShortImageOverlayProps) => {
  return (
    <OverlayImage imageUrl={props.imageUrl}>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <IconButton icon={faPlus} onClick={props.onClickShortlist}>
            Shortlist
          </IconButton>
          <IconButton icon={faHeart} onClick={props.onClickFav}>
            Favourite
          </IconButton>
        </div>
        <Heading
          type="h5"
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            left: 0,
            textAlign: "center",
          }}
        >
          {props.imageUrl}
        </Heading>
      </>
    </OverlayImage>
  );
};
