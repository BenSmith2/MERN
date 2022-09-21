import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokeAxios = () => {
    const [pokes, setPokes] = useState([])

    let [buttonClick, setButtonClick] = useState(false)
    
    useEffect(() => {

            axios.get('https://pokeapi.co/api/v2/pokemon')
            .then( (response)=>{
                console.log("Getting back response from API:", response)
                setPokes(response.data.results)
            })
            .catch((err) =>{
                console.log(err)
            })
            console.log("running other tasks")
        }, [buttonClick])



    return (
        <div>
            <h1>Poke Api</h1>
            <button onClick={()=>{setButtonClick(!buttonClick)}}>Who's that Pokemon</button>
            
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

export default PokeAxios