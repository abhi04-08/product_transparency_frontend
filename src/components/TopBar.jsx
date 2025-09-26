import React from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function TopBar({ dark, setDark }) {
    return (
        <header className="flex items-center justify-between bg-white dark:bg-gray-900 border-b p-4">
            <div className='flex items-center gap-4'>
                <button className='md:hidden p-2 rounded bg-gray-100 dark:bg-gray-800'>☰</button>
                <div className='font-medium'>Product Transparency DashBoard</div>
            </div>
            <div className='flex items-center gap-4'>
                <DarkModeToggle dark={dark} setDark={setDark} />
                <div className='text-sm'>Producer</div>
            </div>
        </header>
    );
}