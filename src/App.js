import React, {useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Coin from './coin';



function App() {
  const [coins,setcoins] = useState([]);
  const[search,setsearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then(res => {setcoins(res.data)
  })
  .catch(error => console.log(error));
    
  },[]);

  const handlechange = e =>{
    setsearch(e.target.value)
  }

  const filtercoins = coins.filter(
    coin=>coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="Coin-App">
      <div className='coin-search'>
        <h1 className='coint-text'>
          <br/>Search a currency<br/><br/>
        </h1>
        <form>
          <input type = "text" placeholder='search' className='coin-input' onChange={handlechange}></input>

        </form>

      </div>
      {filtercoins.map(coin => {
        return(
          <Coin key = {coin.id} name = {coin.name} symbol = {coin.symbol} volumeUsd24Hr = {coin.total_volume}
           priceUsd = {coin.current_price} image = {coin.image} pricechange={coin.price_change_percentage_24h} marketcap={coin.market_cap}/>
        );
      })}
    
    </div>
  );
}

export default App;
