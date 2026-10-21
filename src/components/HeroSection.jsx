import '../styles/HeroSection.css'
import heroImg from '../assets/hero-img.png'
import element from'../assets/element-star.png'
import {ReactTyped} from 'react-typed'
function HeroSection(){
    return(
        <section className='heroSection'>
            <div className="cover"></div>
            <div className="curve"></div>
            <div className="sectionContent">
                <h2>
                    with <span>
                        <ReactTyped strings={["NOXSTAR" , "BOXNFT" , "NFTBOX"]} typeSpeed={100} backSpeed={70} loop={true}/>
                        </span> <br />
                    Explore NFT <br />
                    Collection
                </h2>
                <p>Discover, collect, and trade extraordinary digital assets in a galaxy of endless possibilities. Join our community and step into the future of Web3.</p>
                <div className="clients">
                    <p>2021+ <span>Clients</span></p>
                    <p>3000+ <span>Profiles</span></p>
                </div>
                <div className="btns">
                    <button><i className="fa-solid fa-wallet"></i>Connect Wallet</button>
                    <button><i className="fa-solid fa-anchor"></i>WhiteList Now</button>
                </div>
            </div>
            <div className="heroImg">
                <img src={heroImg} alt="hero img" />
                <img className='star' src={element} alt="hero img" />
            </div>
        </section>
    )
}
export default HeroSection;