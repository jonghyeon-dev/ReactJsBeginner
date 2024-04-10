import { useState, useEffect } from "react";

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [dollar,setDollar] = useState(0);
  const [price,setPrice] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10").then((response)=>{
      return response.json();
    }).then((json)=>{
      setCoins(json);
      setLoading(false);
    })
  },[])
  function onSelect(event){
    setPrice(event.target.value);
  }
  function onChangeInput(event){
    setDollar(event.target.value);
  }
  return (
    <div>
     <h1>The Coins!  { loading ? "" : `(${coins.length})`}</h1>
     { loading ? 
      <strong>Loading...</strong>
      :
      <div>
        <div>
          <label htmlFor="transe">변환할 달러 값 입력 : </label>
          <input id="transe" value={dollar} type="number" onChange={onChangeInput}></input>
        </div>
        <select onChange={onSelect}>
          <option key="0" value="">Select Your Coins</option>
          {coins.map((coin)=>{
            return (
                <option key={coin.id} value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD 
                </option>
            );
          })}
        </select>
        <div>
          <span>변환: {(price > 0 && dollar > 0) ? (dollar/price).toFixed(8) : 0}</span>
        </div>
      </div>
     }
    </div>
  );
}

export default App;