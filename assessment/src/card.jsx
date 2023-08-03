import './card.css'
import pokemon from './pokemon.jsx'

/*
This component is intended to be used for the pokemon card.
We strongly recommend using this component.
*/
const Card = ({info}) => {
    let name = info[0]
    let hp = info[1];
    let attacks = []
    if (info[2]){
    attacks = info[2]
    }
    let moves = [];
    for (var i = 0; i < attacks.length; i++){
        moves.push(attacks[i])
        moves.push(<br></br>)
        moves.push(<br></br>)
    }
    let imgsrc = info[3]
    return (
        
        <div id  = "cbody" className="card-body">
            
           <div className="head">

            <div className="name">
                    {name} 
                </div>

                <div className="hp">
                    {hp} HP
                </div>
           </div>
            
            <img src={imgsrc} alt="" />

            <div className="foot">

                <div className="attacks">
                    {moves}
                </div>
            </div>
        </div>
          

    
    )
}

export default Card