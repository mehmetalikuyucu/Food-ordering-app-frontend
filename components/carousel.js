import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResponsiveCarousel = () => {
    return (
        <>
            <Carousel infiniteLoop >
                <div><img src="kebap.jpg"></img></div>
                <div><img src="kebap.jpg"></img></div><div><img src="kebap.jpg"></img></div>
            </Carousel>
        </>
    )
}

export default ResponsiveCarousel