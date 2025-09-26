import React from 'react';

export default function WizardSteps({ step = 1 }) {
    const steps = ["Basic Info", "Ingredients", "Certifications", "Review"];
    return (
        <div className='flex items-center gap-3 mb-4'>
            {steps.map((s, i) => (
                <div key={s} className='flex items-center gap-3'>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i+1<=step ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}>{i+1}</div>
                    <div className={`${i+1<=step ? 'text-indigo-700 font-medium' : 'text-gray-500'}`}>{s}</div>
                    {i < steps.length-1 && <div className="w-6 h-0.5 bg-gray-200"/>}
                </div>
            ))}
        </div>
    );
}