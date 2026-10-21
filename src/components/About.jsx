import Cards from "./AboutCards";
import '../styles/About.css'
function About(){
    return(
        <section id="About">
            <div className="container">
                <h2 className="title"><span>About</span>Us</h2>
                <p>NoxStar is a leading Web3 platform dedicated to delivering unique digital assets and immersive gaming experiences. We connect creators and collectors in a secure, decentralized ecosystem built for the future</p>
                <div className="info">
                    <p>2025+ <br />
                    Total Items
                    </p>
                    <p>20000+ <br />
                    Wishlist Profiles
                    </p>
                </div>
                <div className="cards">
                    <Cards num={1} title={"High Quality"} p={"Crafted with exceptional detail and rare artistic attributes for maximum value"}/>
                    <Cards num={2} title={"Big Collection"} p={"Explore thousands of unique digital items tailored for collectors and players"}/>
                    <Cards num={3} title={"Top Resource"} p={"Powered by robust blockchain technology ensuring absolute security and ownership"}/>
                    <Cards num={4} title={"Big Community"} p={"Join a thriving network of gamers, creators, and Web3 enthusiasts worldwide"}/>

                </div>
            </div>
        </section>
    )
}
export default About;