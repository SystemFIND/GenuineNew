import React from 'react';

export default function AuthCard({ children }) {
    return (
        <div
            style={{
                background: '#f6f6f6',
                borderRadius: 16,
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                padding: 32,
                width: '100%',
                maxWidth: 380,
                minWidth: 0,
                boxSizing: 'border-box',
            }}
        >
            {children}
        </div>
    );
}