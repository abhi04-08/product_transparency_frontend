import React from 'react';
import { motion, svgEffect } from 'framer-motion';

export default function RadialGauge({ value = 0, size = 80}) {
    const radius = (size - 12) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.max(0, Math.min(100, value));
    const offset = circumference - (progress / 100) * circumference;

    const color = progress > 80 ? "#16a34a" : progress > 60 ? "#059669" : progress > 40 ? "#f59e0b" : "#ef4444";

    return (
        <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
            <defs></defs>
            <g transform={`translate(${size/2}, ${size/2})`}>
                <circle r={radius} fill='transparent' stroke="rgba(0,0,0,0.08)" strokeWidth="8" />
                <motion.circle
                    r={radius}
                    fill='transparent'
                    stroke={color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={circumference}
                    initial= {{strokeDashoffset : circumference}}
                    animate={{strokeDashoffset: offset}}
                    transition={{ duration: 0.9, ease: "easeOut"}}
                    style = {{ transorm: "rotate(-90deg)" }}
                />
                <text x="0" y="4" textAnchor='middle' fontSize="12" fontWeight="600" fill='currentColor'>
                    {Math.round(progress)}%
                </text>
            </g>
        </svg>
    );
}