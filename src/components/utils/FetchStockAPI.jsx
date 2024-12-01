import { useEffect } from "react";
import { tsvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";

const FetchStockAPI = ({ setStockData }) => {
  function parseData(parse) {
    return function (d) {
      d.date = parse(d.date);
      d.open = +d.open;
      d.high = +d.high;
      d.low = +d.low;
      d.close = +d.close;
      d.volume = +d.volume;

      return d;
    };
  }

  const parseDate = timeParse("%Y-%m-%d");

  useEffect(() => {
    const fetchShare = async () => {
      try {
        const response = await fetch(
          "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/AAPL_full.tsv"
        );

        const text = await response.text();
        const parsedData = tsvParse(text, parseData(parseDate));
        const startDate = new Date("2012-01-01");
        const endDate = new Date("2013-01-01");
        const filteredData = parsedData.filter((d) => {
          const date = new Date(d.date);
          return date >= startDate && date < endDate;
        });
        setStockData(filteredData);
      } catch (error) {
        throw error;
      }
    };

    fetchShare();
  }, [setStockData]);
  return null;
};

export default FetchStockAPI;
