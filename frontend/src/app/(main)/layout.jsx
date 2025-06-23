'use client';
import React from 'react';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
    const pathname = usePathname();
    const showNavbar = pathname !== '/';

    return (
        <>
            {/* {showNavbar && <Navbar />} */}
            <main>
                {children}
            </main>
        </>
    )
}