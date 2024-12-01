import { useEffect, useState } from "react";

const StockPrice = ({ stockPrice }) => {
  const [closingPrice, setClosingPrice] = useState(null);
  useEffect(() => {
    if (stockPrice && stockPrice.length > 0) {
      const lastData = stockPrice[stockPrice.length - 1];
      setClosingPrice(lastData.close);
    }
  }, [stockPrice]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <h4
        style={{
          color: "#000",
          fontSize: "50px",
          marginBottom: "20px",
          marginTop: "0",
        }}
      >
        {closingPrice?.toFixed(2)}
      </h4>
      <h4
        style={{
          color: "rgb(215, 205, 205)",
          fontSize: "25px",
          marginBottom: "20px",
          marginTop: "0",
          marginRight: "20px",
        }}
      >
        USD
      </h4>
    </div>
  );
};

export default StockPrice;
