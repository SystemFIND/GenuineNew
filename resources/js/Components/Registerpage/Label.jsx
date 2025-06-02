import React from 'react';

export default function Label({ htmlFor, value }) {
    return (
        <label htmlFor={htmlFor} style={{
            fontWeight: 500,
            fontSize: 'clamp(13px, 3vw, 15px)',
            display: 'block',
            marginBottom: 2,
        }}>
            {value}
        </label>
    );
}