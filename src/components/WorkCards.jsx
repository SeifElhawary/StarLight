import '../styles/Work.css'
function WorkCards({img , title , p}){
    return(
        <div className="card">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{p}</p>
        </div>
    )
}
export default WorkCards;