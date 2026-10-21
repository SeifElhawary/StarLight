import '../styles/About.css'
function Cards({num , title , p}){
    return(
        <div className="card">
            <span className="cardNum">{num}</span>
            <h2>{title}</h2>
            <p>{p}</p>
        </div>
    )
}
export default Cards;