import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Sector } from "recharts";
import './PieChart.css';
import { transactionsService } from '../../Services/transaction_services';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


const renderActiveShape = (props: any) => {

    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        amount,
        name
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    const fill2 = '#ffc107';
    const fill3 = '#ffc107';
    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 2}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill2}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`${amount} euros`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`( ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

function Camembert(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <Card className="camembert" id='camembert'>
            <div className="titleCamembert"  id='titleCamembert'>{props.titre}</div>
            <PieChart className="contentCamembert" id='contentCamembert' width={500} height={300}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={props.data}
                    cx={180}
                    cy={120}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#3F84C5"
                    dataKey="amount"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
        </Card>
    );
}

export default Camembert