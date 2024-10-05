import { CSSProperties, FC, useMemo } from "react";

type GloveProps = {
  gradient: string; 
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
  opacity?: string;
  z?: string;
  position?: "left" | "right";
  position1?: "top" | "bottom";
};

const Glove: FC<GloveProps> = ({
  gradient,
  top,
  left,
  right,
  bottom,
  width,
  height,
  opacity = "70",
  z = "0",
  position,
  position1,
}) => {
  const gradientStyle: CSSProperties = useMemo(() => {
    return {
      position: "absolute",
      width: `${width}px`,
      height: `${height}px`,
      background: gradient,
      filter: "blur(450px)",
      top: top ? `${top}px` : undefined,
      left: left ? `${left}px` : undefined,
      right: right ? `${right}px` : undefined,
      bottom: bottom ? `${bottom}px` : undefined,
      zIndex: parseInt(z),
    };
  }, [gradient, top, left, right, bottom, width, height, z]);

  return <div style={gradientStyle}></div>;
};

export default Glove;
