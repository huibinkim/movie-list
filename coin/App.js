import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [game, setGame] = useState(0);
  // const [company, setCompany] = useState('');
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //빈배열이면 한번만 작동
  const coinValue = (e) => {
    setGame(e.target.value);
  };
  const onChangeInput = (e) => {
    setMoney(e.target.value);
  };

  return (
    <div>
      <h1 className={styles.title}>The Coins({coins.length})</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={coinValue}>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.name}
              symbol={coin.symbol}
            >
              ({coin.name}) ({coin.symbol}) : ({coin.quotes.USD.price})
            </option>
          ))}
        </select>
      )}

      <input
        type="number"
        onChange={onChangeInput}
        placeholder="put you dollor"
        min={1}
      ></input>
      <h3>you can bet {Math.floor(money / game)}개</h3>
    </div>
  );
}

export default App;
