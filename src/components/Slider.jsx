import "../styles/Slider.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function Slider(){
    return(
        <section className="Slider-wrapper">
            <Splide
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    autoScroll: {
                        speed: 1,
                    },
                    breakpoints:{
                        1600:{
                            perPage:8
                        },
                        1300:{
                            perPage:7
                        },
                        1200:{
                            perPage:6
                        },
                        900:{
                            perPage:5
                        },
                        600:{
                            perPage:3
                        },
                        500:{
                            perPage:2
                        },
                    }
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>NFTBOX</SplideSlide>
                <SplideSlide>BOXNFT</SplideSlide>
                <SplideSlide>NFTBOX</SplideSlide>
                <SplideSlide>BOXNFT</SplideSlide>
                <SplideSlide>NFTBOX</SplideSlide>
                <SplideSlide>BOXNFT</SplideSlide>
                <SplideSlide>NFTBOX</SplideSlide>
                <SplideSlide>BOXNFT</SplideSlide>
                <SplideSlide>NFTBOX</SplideSlide>
                <SplideSlide>BOXNFT</SplideSlide>
            </Splide>
        </section>
    )
}

export default Slider;