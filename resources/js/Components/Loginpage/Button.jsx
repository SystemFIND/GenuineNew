import React from 'react';

export default function Button({ children, ...props }) {
    return (
        <button
            style={{
                background: '#f9f6f2',
                border: '1px solid #e0e0e0',
                borderRadius: 4,
                padding: 'clamp(8px, 2.5vw, 12px) 0',
                fontWeight: 600,
                fontSize: 'clamp(14px, 4vw, 16px)',
                cursor: 'pointer',
                marginTop: 8,
                width: '100%',
                transition: 'background 0.2s',
            }}
            {...props}
        >
            {children}
        </button>
    );
}