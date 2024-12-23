import { scaleLinear, scaleTime } from "d3-scale";

import {
  ChartCanvas,
  Chart,
  AreaSeries,
  BarSeries,
  XAxis,
  YAxis,
} from "react-financial-charts";

const StockChart = ({ stockData }) => {
  const height = 400;
  const width = 800;
  const margin = { left: 50, right: 50, top: 10, bottom: 30 };
  const gridHeight = height - margin.top - margin.bottom;
  const showGrid = true;
  const xGrid = showGrid
    ? {
        innerTickSize: -1 * gridHeight,
        tickStrokeStyle: "rgb(215, 205, 205)",
        tickStrokeOpacity: 0.1,
      }
    : {};
  console.log(xGrid);
  return (
    <div className="position-relative">
      <ChartCanvas
        ratio={2}
        width={width}
        seriesName="APPL"
        height={height}
        margin={margin}
        data={stockData}
        xAccessor={(d) => d.date}
        xScale={scaleTime()}
        yScale={scaleLinear()}
        xExtents={[new Date(2012, 0, 1), new Date(2013, 0, 1)]}
      >
        <Chart id={0} yExtents={(d) => d.close}>
            <YAxis axisAt="left" orient="left"/>
          <AreaSeries
            yAccessor={(d) => d.close}
            strokeWidth={2}
            strokeStyle="#5c6bc0"
            fillStyle="#fff"
          />
          <XAxis
            axisAt="bottom"
            orient="bottom"
            ticks={6}
            showGrid={true}
            {...xGrid}
          />
        </Chart>
        <Chart
          id={1}
          height={100}
          yExtents={(d) => d.volume}
          origin={(w, h) => [0, h - 100]}
        >
          <BarSeries yAccessor={(d) => d.volume} fillStyle="lightgray" />
          <XAxis
            ticks={6}
            {...xGrid}
          />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

export default StockChart;
