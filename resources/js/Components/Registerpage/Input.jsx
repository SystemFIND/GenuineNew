import React from 'react';

export default function Input({ id, type, name, ...props }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            style={{
                width: '100%',
                padding: 'clamp(8px, 2.5vw, 12px) 10px',
                border: '1px solid #ccc',
                borderRadius: 4,
                marginTop: 4,
                background: '#fcfffa',
                fontSize: 'clamp(14px, 4vw, 16px)',
                boxSizing: 'border-box',
            }}
            {...props}
        />
    );
}