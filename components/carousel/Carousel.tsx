import * as React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props extends React.HTMLProps<HTMLDivElement> {
  config?: {
    showArrows?: boolean;
    showStatus?: boolean;
    showIndicators?: boolean;
    showThumbs?: boolean;
    infiniteLoop?: boolean;
    selectedItem?: number;
    autoPlay?: boolean;
    stopOnHover?: boolean;
    interval?: number;
    transitionTime?: number;
    swipeable?: boolean;
    dynamicHeight?: boolean;
    emulateTouch?: boolean;
  };
}

const Carousel: React.SFC<Props> = ({ children, className, config, ...props }: Props) => {
  const CarouselConfig = {
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    emulateTouch: true,
    swipeable: false,
    ...config,
  };
  return (
    <ReactCarousel {...CarouselConfig} className={className}>
      {children}
    </ReactCarousel>
  );
};

export default Carousel;
