import pokemon from './pokemon.jsx'
import './pokedex.css'
import { useState } from "react";
import Card from './card.jsx';



function clicked(){
    document.getElementById("cbody").style.display = 'grid'
    document.getElementById("select").style.display = 'none'
}
const Pokedex = (props) => {
    const [poke, setPoke] = useState([]);

    
        const buttons = [];
       
        for (var i = 0; i < pokemon.length; i++){
           let name = pokemon[i].name
           let hp = pokemon[i].hp.toString()
           let moves = pokemon[i].moves
           let imgsrc = pokemon[i].image_src

            var btn = <button className = "btn" onClick={() => [setPoke([name, hp, moves, imgsrc]), clicked()]}  > {pokemon[i].name}</button>
            buttons.push(btn);
            
            
        }

        
    
    return (
        
        <div className = "page-container"> 
        
            <div className="header">
                <h1>Pokédex</h1>
            </div>

            <div className="body">
                <div className="pokemon-buttons">
                    {buttons}
                </div>

                <div id = "select" className="no-select">
                    <strong>Select a Pokémon!</strong>
                </div>

                <div className='bottom'>
                    {poke !== [] && <Card info = {poke}/>} 
                </div>
                
            </div>
        </div>

    )
    
}

export default Pokedex
