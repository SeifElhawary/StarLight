import '../styles/Work.css'
import Img1 from '../assets/work-1.svg'
import Img2 from '../assets/work-2.svg'
import Img3 from '../assets/work-3.svg'
import Img4 from '../assets/work-4.svg'
import WorkCards from './WorkCards'
function Work(){
    return(
        <section className="workSection">
            <div className="cover"></div>
            <h2 className='title'>How to <span>StarLight</span> Work</h2>
            <div className="cards">
                <WorkCards img={Img1} title={"Collect The Wallet"} p={"Connect your secure Web3 wallet easily to start exploring and trading digital assets"}/>
                <WorkCards img={Img2} title={"Select The Quality"} p={"Browse through our exclusive collections and choose your preferred rare digital artworks"}/>
                <WorkCards img={Img3} title={"Confirm The Transaction"} p={"Approve the secure blockchain transaction instantly with transparent and low gas fees"}/>
                <WorkCards img={Img4} title={"Receive Your NFT"} p={"Get your digital collectible delivered directly to your wallet, ready to use or trade"}/>

            </div>
        </section>
    )
}
export default Work;