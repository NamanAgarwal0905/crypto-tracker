import React from 'react'
import './coin.css';

const Coin = ({name , symbol , priceUsd , volumeUsd24Hr , image , pricechange, marketcap}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>

            <div className='coin'>
                <img src = {image} alt = 'crypto'/>
                <h1>
                    {name}
                </h1>
                
                <p className='coin-symbol'>
                    {symbol}
                </p>

            </div>
            <div className='coin-data'>
                <p className='coin-price'>
                    ${priceUsd}
                </p>
                <p className='coin-volume'>
                    ${volumeUsd24Hr.toLocaleString()}
                </p>
                {pricechange < 0 ? (<p className='coin-percent red'>
                    {pricechange.toFixed(2)}
                %</p>):
                (<p className='coin-percent green'>
                {pricechange.toFixed(2)}
            %</p>)}
            <p className='coin-marketcap'>
                Mkt cap: ${marketcap.toLocaleString()}
            </p>
            </div>

        </div>
      
    </div>
  )
}

export default Coin
