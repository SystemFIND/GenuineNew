import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

export default function AppLayout({ children }) {
    const { props } = usePage();
    const settings = props.auth?.user?.settings;

    useEffect(() => {
        if (settings?.dark_mode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [settings]);

    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Tambahkan navbar atau sidebar di sini jika ada */}
            <main>{children}</main>
        </div>
    );
}
