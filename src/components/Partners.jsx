import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '../styles/Partners.css';

import Partner1 from '../assets/partner-1.png';
import Partner2 from '../assets/partner-2.png';
import Partner3 from '../assets/partner-3.png';
import Partner4 from '../assets/partner-4.png';
import Partner5 from '../assets/partner-5.png';
import Partner6 from '../assets/partner-6.png';
import Partner7 from '../assets/partner-7.png';
import Partner8 from '../assets/partner-8.png';
import Partner10 from '../assets/partner-10.png';
import Partner11 from '../assets/partner-11.png';
import Partner12 from '../assets/partner-12.png';

function Partners() {
    return (
        <section className="Partners">
            <Splide
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    autoScroll: {
                        speed: 1.5,
                    },
                    breakpoints: {
                        1200: { perPage: 4 },
                        900: { perPage: 3 },
                        600: { perPage: 2 },
                    }
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner1} alt="Partner 1" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner2} alt="Partner 2" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner3} alt="Partner 3" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner4} alt="Partner 4" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner5} alt="Partner 5" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner6} alt="Partner 6" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner7} alt="Partner 7" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner8} alt="Partner 8" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner10} alt="Partner 10" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner11} alt="Partner 11" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner12} alt="Partner 12" />
                    </div>
                </SplideSlide>
            </Splide>
            <Splide
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    direction:"rtl",
                    autoScroll: {
                        speed: 1.5,
                    },
                    breakpoints: {
                        1200: { perPage: 4 },
                        900: { perPage: 3 },
                        600: { perPage: 2 },
                    }
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner1} alt="Partner 1" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner2} alt="Partner 2" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner3} alt="Partner 3" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner4} alt="Partner 4" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner5} alt="Partner 5" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner6} alt="Partner 6" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner7} alt="Partner 7" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner8} alt="Partner 8" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner10} alt="Partner 10" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner11} alt="Partner 11" />
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="partner-box">
                        <img src={Partner12} alt="Partner 12" />
                    </div>
                </SplideSlide>
            </Splide>
        </section>
    );
}

export default Partners;