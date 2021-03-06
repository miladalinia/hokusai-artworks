import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";
import {Carrousel} from "../../utils/JsonModel";

const CarrouselComp = (props: { data: Array<Carrousel> | undefined}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                {props.data?.map((slide: any) => (
                    <div key={slide.id}>
                        <div
                            className="carrousel_wrapper"
                            style={{
                                background: `url(/images/arts/${slide.name}) no-repeat`
                            }}
                        >
                            <div>{slide.title}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarrouselComp;