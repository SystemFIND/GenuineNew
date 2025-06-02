import React from 'react';

export default function Button({ children, ...props }) {
    return (
        <button
            style={{
                background: '#333',
                border: 'none',
                borderRadius: 5,
                padding: 'clamp(10px, 2.5vw, 14px) 0',
                fontWeight: 500,
                fontSize: 'clamp(15px, 4vw, 16px)',
                cursor: 'pointer',
                marginTop: 8,
                color: '#fff',
                width: '100%',
                transition: 'background 0.2s',
            }}
            {...props}
        >
            {children}
        </button>
    );
}