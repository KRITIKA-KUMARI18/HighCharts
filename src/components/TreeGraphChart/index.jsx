import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsTreegraph from 'highcharts/modules/treegraph.js';

// Initialize the Treegraph module
HighchartsTreegraph(Highcharts);

const TreegraphChart = () => {
    useEffect(() => {
        // Initialize the chart only once the component has mounted
        Highcharts.chart('container', {
            chart: {
                type: 'treegraph'
            },
            title: {
                text: 'Treegraph Box Layout Example'
            },
            series: [{
                data: [
                    { id: 'A', name: 'Root' },
                    { id: 'B', name: 'Child 1', parent: 'A' },
                    { id: 'C', name: 'Child 2', parent: 'A' },
                    { id: 'D', name: 'Grandchild 1', parent: 'B' },
                    { id: 'E', name: 'Grandchild 2', parent: 'B' }
                ],
                keys: ['id', 'parent', 'name'],
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }]
        });
    }, []); // Empty dependency array to run only once after the initial render

    return <div id="container" className="graph-container" />;
};

export default TreegraphChart;
