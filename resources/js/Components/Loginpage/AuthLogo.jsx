import React from 'react';

export default function AuthLogo() {
    return (
        <div style={{ marginBottom: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
                src="/images/logo2.png"
                alt="GenuineNews"
                style={{ height: 40, marginBottom: 5, display: 'block' }}
                onError={e => (e.target.style.display = 'none')}
            />            
        </div>
    );
}