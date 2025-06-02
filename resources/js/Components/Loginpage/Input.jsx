import React from 'react';

export default function Input({ id, type, name, ...props }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
             style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #ccc',
                borderRadius: 4,
                marginTop: 4,
                background: '#fcfffa',
                fontSize: 16,
                boxSizing: 'border-box',
            }}
            {...props}
        />
    );
}