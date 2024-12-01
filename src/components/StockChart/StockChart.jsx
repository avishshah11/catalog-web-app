import { scaleLinear, scaleTime } from "d3-scale";

import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries, BarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";

const StockChart = ({ stockData }) => {
  const height = 400;
  const width = 800;
  const margin = { left: 50, right: 50, top: 10, bottom: 30 };
  const gridHeight = height - margin.top - margin.bottom;
  const showGrid = true;
  const xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.1 } : {};
  console.log(xGrid)
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
          <YAxis axisAt="left" orient="left" showGrid={true} />
          <AreaSeries
            yAccessor={(d) => d.close}
            strokeWidth={2}
            stroke="#5c6bc0"
            fill="white"
          />
          <XAxis axisAt="bottom" orient="bottom" ticks={6} showGrid={true} {...xGrid}/>
        </Chart>
        <Chart
          id={1}
          height={100}
          yExtents={(d) => d.volume}
          origin={(w, h) => [0, h - 100]}
        >
          <BarSeries yAccessor={(d) => d.volume} fill="lightgray" />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

export default StockChart;
