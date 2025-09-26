import React from 'react';

export default function SuggestionList({ items = [] }){
    return (
        <ul className='space-y-2'>
            {items.map((s, idx) => (
                <li key={idx} className='flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded'>
                    <div className='w-8 h-8 items-center justify-center bg-indigo-100 rounded'>💡</div>
                    <div>
                        <div className='text-sm'>{s}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}