import { Carousel } from "react-responsive-carousel";
import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = ["kebap.jpg", "yogurt-soup.jpg"]
const ResponsiveCarousel = () => {
    return (
        <>
            <Carousel infiniteLoop showStatus={false} showIndicators={false} autoPlay showArrows={false} swipeable emulateTouch showThumbs={false}>
                {images.map((i) => {
                    return (<Flex justifyContent={"center"} alignItems={"center"} mt={3}>
                        <AspectRatio width={"full"} ratio={16 / 7}>
                            <Image src={i} objectFit={"contain"}></Image>
                        </AspectRatio>
                    </Flex >)
                })}
            </Carousel>
        </>
    )
}

export default ResponsiveCarousel