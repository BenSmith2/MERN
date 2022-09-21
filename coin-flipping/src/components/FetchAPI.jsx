import React, {useState} from 'react'

export const FetchAPI = () => {
  const[coin, setCoin] = useState([])

  const fetchData = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response)=>{
      return response.json()
    })
    .then( (response)=>{
      console.log("Getting back response from API:", response)
      setCoin(response)
    })
    .catch((err) =>{
      console.log(err)
    })
    console.log("running other tasks")
  }
  
  return (
    <div>
      <h1>FetchAPI</h1>
      <button onClick={fetchData}>click for cypto data</button>
      {
        coin.map((coin, index)=>{
          return(
            <div key={index}>
              <h3>{coin.name} {coin.current_price} </h3>
              <img src={coin.image} alt="coin image" height="100px" />
            </div>
          )
        })
      }
    </div>
  )
}
export default FetchAPI;