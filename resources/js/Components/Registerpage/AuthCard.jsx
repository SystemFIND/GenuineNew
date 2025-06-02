import React from 'react';

export default function AuthCard({ children }) {
    return (
        <div style={{
            background: '#f6f6f6',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: 'clamp(18px, 5vw, 32px)',
            width: '100%',
            maxWidth: 400,
            minWidth: 0,
            boxSizing: 'border-box',
        }}>
            {children}
        </div>
    );
}