import Img1 from '../assets/product1.jpg'
import Img2 from '../assets/product2.jpg'
import Img3 from '../assets/product3.jpg'
import Img4 from '../assets/product4.jpg'
import Img5 from '../assets/product5.jpg'
import Img6 from '../assets/product6.jpg'
import Img7 from '../assets/product7.jpg'
import Img8 from '../assets/product8.jpg'
import Img9 from '../assets/product9.jpg'
import Img10 from '../assets/product10.jpg'
import Img11 from '../assets/product11.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '../styles/product.css'

function Products(){
    return(
        <>
           <section id='Product' className="Products">
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
                        1600:{ perPage: 8 },
                        1300:{ perPage: 7 },
                        1200:{ perPage: 6 },
                        900:{ perPage: 5 },
                        600:{ perPage: 3 },
                        500:{ perPage: 2 },
                    }
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <div className="pp">
                        <img src={Img1} alt="" />
                        <h3>SkeletLn #01</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img2} alt="" />
                        <h3>SkeletLn #02</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img3} alt="" />
                        <h3>SkeletLn #03</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img4} alt="" />
                        <h3>SkeletLn #04</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img5} alt="" />
                        <h3>SkeletLn #05</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img6} alt="" />
                        <h3>SkeletLn #06</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img7} alt="" />
                        <h3>SkeletLn #07</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img8} alt="" />
                        <h3>SkeletLn #08</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img9} alt="" />
                        <h3>SkeletLn #09</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img10} alt="" />
                        <h3>SkeletLn #10</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img11} alt="" />
                        <h3>SkeletLn #11</h3>
                    </div>
                </SplideSlide>
            </Splide>
        </section>
           <section className="Products" style={{marginTop:"0px !important"}}>
            <Splide
                options={{
                    direction:'rtl',
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
                        1600:{ perPage: 8 },
                        1300:{ perPage: 7 },
                        1200:{ perPage: 6 },
                        900:{ perPage: 5 },
                        600:{ perPage: 3 },
                        500:{ perPage: 2 },
                    }
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <div className="pp">
                        <img src={Img1} alt="" />
                        <h3>SkeletLn #01</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img2} alt="" />
                        <h3>SkeletLn #02</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img3} alt="" />
                        <h3>SkeletLn #03</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img4} alt="" />
                        <h3>SkeletLn #04</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img5} alt="" />
                        <h3>SkeletLn #05</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img6} alt="" />
                        <h3>SkeletLn #06</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img7} alt="" />
                        <h3>SkeletLn #07</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img8} alt="" />
                        <h3>SkeletLn #08</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img9} alt="" />
                        <h3>SkeletLn #09</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img10} alt="" />
                        <h3>SkeletLn #10</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="pp">
                        <img src={Img11} alt="" />
                        <h3>SkeletLn #11</h3>
                    </div>
                </SplideSlide>
            </Splide>
        </section>
        </>
      
    )
}
export default Products;