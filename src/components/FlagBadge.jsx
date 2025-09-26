import React from 'react';

export default function FlagBadge({ text = ""}) {
    const severity = text.toLowerCase().includes("risk") ? "high" : text.toLowerCase().includes("incomplete") ? "medium" : "low";
    const classes = severity === "high" ? "bg-red-100 text-red-700" : severity === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700";
    return (
        <span className={`text-xs px-2 py-1 rounded ${classes}`}>{text}</span>
    );
}