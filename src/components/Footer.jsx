import '../styles/Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Star<span>Light</span></h2>
                <p>The ultimate Web3 platform for digital assets, gaming, and rare NFT collections.</p>
                
                <div className="footer-links">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Products">Products</a>
                    <a href="#OurTeam">Our Team</a>
                    <a href="#Partners">Partners</a>
                </div>

                <div className="footer-social">
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-telegram"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 STARLIGHT. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;