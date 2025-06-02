import React from 'react';

export default function Divider({ text }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '18px 0'
        }}>
            <div style={{ flex: 1, height: 1, background: '#aaa' }} />
            <span style={{ margin: '0 10px', color: '#888', fontSize: 14 }}>{text}</span>
            <div style={{ flex: 1, height: 1, background: '#aaa' }} />
        </div>
    );
}