import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function Layout({ children }) {
    const [dark, setDark] = useState(() => localStorage.getItem("dark") === "1");

    useEffect(() => {
        localStorage.setItem("dark", dark ? "1" : "0");
        if (dark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [dark]);

    return (
        <div className='min-h-screen flex'>
            <SideBar/>
            <div className="flex-1 flex flex-col">
                <TopBar dark={dark} setDark={setDark}/>
                <main className='p-6 container-max w-full'>{children}</main>
            </div>
        </div>
    );
}