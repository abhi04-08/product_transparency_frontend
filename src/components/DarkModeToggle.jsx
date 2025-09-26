import React from 'react';

export default function DarkModeToggle({ dark, setDark }) {
    return (
        <button
            onClick={() => setDark(d => !d)}
            className='p-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-800'
            aria-label='Toggle Dark Mode'>
                {dark ? "🌙" : "🌞"}
        </button>
    );
}