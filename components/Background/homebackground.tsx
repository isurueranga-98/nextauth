'use client'
import { FC, ReactNode, useEffect, useState } from "react";
import Glove from "@/components/Background/glove";

const AboutUsBackground: FC<{ children: ReactNode }> = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const getGloveProps = (position: "left" | "right", position1: "top" | "bottom") => {
    if (viewportWidth < 640) {
      return { width: "700", height: "700", top: position1 === "top" ? "500" : undefined, left: position === "left" ? "500" : undefined, bottom: position1 === "bottom" ? "400" : undefined, right: position === "right" ? "-300" : undefined };
    } else if (viewportWidth < 768) {
      return { width: "700", height: "700", top: position1 === "top" ? "500" : undefined, left: position === "left" ? "500" : undefined, bottom: position1 === "bottom" ? "400" : undefined, right: position === "right" ? "-400" : undefined };
    } else if (viewportWidth < 1024) {
      return { width: "700", height: "700", top: position1 === "top" ? "500" : undefined, left: position === "left" ? "500" : undefined, bottom: position1 === "bottom" ? "600" : undefined, right: position === "right" ? "-200" : undefined };
    } else {
      return { width: "700", height: "700", top: position1 === "top" ? "-300" : undefined, left: position === "left" ? "00" : undefined, bottom: position1 === "bottom" ? "0" : undefined, right: position === "right" ? "0" : undefined };
    }
  };

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <Glove
        gradient="linear-gradient(to right, #06FFA5, #071155, #9FA8EA)"
        {...getGloveProps("left", "top")}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AboutUsBackground;
