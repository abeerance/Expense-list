import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    // Spread operator to make 12 standalone arguments
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {/* Dynamic chartbar */}
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
