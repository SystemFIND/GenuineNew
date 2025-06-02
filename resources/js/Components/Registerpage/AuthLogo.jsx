import React from 'react';

export default function AuthLogo() {
    return (
        <div style={{
            marginBottom: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img
                src="/images/logo2.png"
                alt="GenuineNews"
                style={{
                    height: 'clamp(36px, 7vw, 50px)',
                    marginBottom: 5,
                    maxWidth: '80%',
                    objectFit: 'contain',
                    display: 'block',
                }}
                onError={e => e.target.style.display='none'}
            />            
        </div>
    );
}