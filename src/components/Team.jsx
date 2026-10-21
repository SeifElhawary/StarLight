import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Img1 from '../assets/team-1.jpg';
import Img2 from '../assets/team-2.jpg';
import Img3 from '../assets/team-3.jpg';
import Img4 from '../assets/team-4.jpg';
import '../styles/Team.css';

function Team(){
    return(
       <section id="OurTeam">
         <h2 className="Title">
            Our <span>Team</span>
        </h2>
        <div className="teamCards">
             <Splide
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    perPage: 3, 
                    arrows: true,
                    pagination: false,
                    breakpoints:{
                        1200:{ perPage: 3 },
                        900:{ perPage: 2 },
                        600:{ perPage: 1 }
                    }
                }}
            >
             
                <SplideSlide>
                    <div className="tt">
                        <img src={Img1} alt="Jonathan Josh" />
                        <h2>Jonathan Josh</h2>
                        <span>Founder & CEO</span>
                        <p>Visionary leader driving the strategic growth and decentralized future of NoxStar</p>
                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="tt">
                        <img src={Img2} alt="Emily Watson" />
                        <h2>Emily Watson</h2>
                        <span>Lead UI/UX Designer</span>
                        <p>Crafting immersive digital experiences and stunning visual interfaces for Web3 gamers.</p>
                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="tt">
                        <img src={Img3} alt="Alex Turner" />
                        <h2>Alex Turner</h2>
                        <span>Senior Smart Contract Developer</span>
                        <p>Securing blockchain transactions and building robust protocols for our digital assets.</p>
                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="tt">
                        <img src={Img4} alt="Lucas Martin" />
                        <h2>Lucas Martin</h2>
                        <span>Community & Marketing Manager</span>
                        <p>Engaging our global player base and expanding the NoxStar ecosystem worldwide.</p>
                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
       </section>
    )
}
export default Team;