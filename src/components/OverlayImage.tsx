import React, { ReactChild } from "react";

export interface OverlayImageProps {
  imageUrl: string;
  children: ReactChild;
}

export const OverlayImage = (props: OverlayImageProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img src={props.imageUrl} />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
