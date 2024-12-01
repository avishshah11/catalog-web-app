import { useState } from "react";
import StockChart from "./components/StockChart/StockChart";
import FetchStockAPI from "./components/utils/FetchStockAPI";
import Navigation from "./components/Navigation/Navigation";
import TimeLine from "./components/TimeLine/TimeLine";
import StockPrice from "./components/StockPrice/StockPrice";
import "./App.css";

function App() {
  const [stockData, setStockData] = useState([]);
  console.log(stockData);

  return (
    <div>
      <FetchStockAPI setStockData={setStockData} />
      <div>
        <StockPrice stockPrice={stockData} />
        <Navigation />
        <TimeLine />
        {stockData.length > 0 && <StockChart stockData={stockData} />}
      </div>
    </div>
  );
}

export default App;
