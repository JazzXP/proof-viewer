import React, { ReactElement } from "react";

export interface OverlayImageProps {
  imageUrl: string;
  children: ReactElement;
}

export const OverlayImage = (props: OverlayImageProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
