import React from 'react';

export default function GoogleButton() {
    return (
        <button
            style={{
                width: '100%',
                background: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: 4,
                padding: 'clamp(8px, 2.5vw, 12px) 0',
                fontWeight: 500,
                fontSize: 'clamp(14px, 4vw, 16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                gap: 10,
            }}
            type="button"
            onClick={() => window.location.href = '/auth/google/redirect'}
        >
            <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                style={{
                    width: 22,
                    height: 22,
                    display: 'inline-block',
                }}
            />
            <span style={{ display: 'inline-block' }}>Continue with Google</span>
        </button>
    );
}