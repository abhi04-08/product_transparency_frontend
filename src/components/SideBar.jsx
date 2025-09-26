import React from 'react';

export default function SideBar() {
    return (
        <aside className='w-64 bg-white dark:bg-gray-800 border-r hidden md:block'>
            <div className="p-6">
                <div className='text-2xl font-semibold text-brand-500 mb-4'>Hedamo</div>
                <nav className='space-y-2 text-sm'>
                    <div className='px-3 py-2 rounded bg-indigo-50 text-indigo-700'>DashBoard</div>
                    <div className='px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>Products</div>
                    <div className='px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>Insights</div>
                    <div className='px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>Settings</div>
                </nav>
            </div>
        </aside>
    );
}