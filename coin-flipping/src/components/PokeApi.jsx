import React, {useState} from 'react';
// import axios from 'axios';

const PokeApi = () => {
    const [pokes, setPokes] = useState([])
    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.results.json();
        }).then(response => {
            console.log(response);
            setPokes(response.results)
        }).catch(err=>{
            console.log(err);
        });
    }
        
    return (
        <div>
            <h1>Poke Api</h1>
            <button onClick={fetchData}>Who's that Pokemon</button>
            
            {
                pokes.map((p, i)=>{
                    return(
                        <div key={i}>
                            {p.name}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PokeApi