import React, { useState } from 'react';
import AuthCard from '@/Components/Registerpage/AuthCard';
import AuthLogo from '@/Components/Registerpage/AuthLogo';
import Input from '@/Components/Registerpage/Input';
import Label from '@/Components/Registerpage/Label';
import Button from '@/Components/Registerpage/Button';
import { useForm } from '@inertiajs/react';

export default function Registerpage() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(data.password)) {
            setPasswordError("Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.");
            return;
        } else {
            setPasswordError('');
        }
        post('/register');
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#8c8c8c',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            {/* Tombol Back di pojok kiri atas */}
            <Button
                type="button"
                style={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    background: '#e0e0e0',
                    color: '#333',
                    border: 'none',
                    borderRadius: 5,
                    padding: '8px 20px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    zIndex: 10
                }}
                onClick={() => window.location.href = '/'}
            >
                &#8592; Back to Home
            </Button>
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
            }}>
                <AuthCard>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <AuthLogo />
                        <form style={{ width: '100%', marginTop: 20 }} onSubmit={handleSubmit}>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: 10,
                                    flexDirection: 'row',
                                    width: '100%',
                                }}
                            >
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <Label htmlFor="first_name" value="First name" />
                                    <Input
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        required
                                        value={data.first_name}
                                        onChange={e => setData('first_name', e.target.value)}
                                    />
                                    {errors.first_name && <div style={{ color: 'red', fontSize: 12 }}>{errors.first_name}</div>}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <Label htmlFor="last_name" value="Last name" />
                                    <Input
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        required
                                        value={data.last_name}
                                        onChange={e => setData('last_name', e.target.value)}
                                    />
                                    {errors.last_name && <div style={{ color: 'red', fontSize: 12 }}>{errors.last_name}</div>}
                                </div>
                            </div>
                            <style>
                                {`
                                @media (max-width: 600px) {
                                    form > div:first-child {
                                        flex-direction: column !important;
                                        gap: 0 !important;
                                    }
                                }
                                `}
                            </style>
                            <div style={{ marginTop: 15 }}>
                                <Label htmlFor="email" value="Email address" />
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                {errors.email && <div style={{ color: 'red', fontSize: 12 }}>{errors.email}</div>}
                            </div>
                            <div style={{ marginTop: 15 }}>
                                <Label htmlFor="password" value="Password" />
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {passwordError && <div style={{ color: 'red', fontSize: 12 }}>{passwordError}</div>}
                                {errors.password && <div style={{ color: 'red', fontSize: 12 }}>{errors.password}</div>}
                            </div>
                            <div style={{ marginTop: 15 }}>
                                <Label htmlFor="password_confirmation" value="Confirm password" />
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    required
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                />
                                {errors.password_confirmation && <div style={{ color: 'red', fontSize: 12 }}>{errors.password_confirmation}</div>}
                            </div>
                            <Button
                                style={{
                                    marginTop: 25,
                                    width: '100%',
                                    background: '#333',
                                    color: '#fff',
                                    padding: 'clamp(10px, 2.5vw, 14px) 0',
                                    fontSize: 'clamp(15px, 4vw, 16px)',
                                    borderRadius: 5,
                                    fontWeight: 500
                                }}
                                disabled={processing}
                            >
                                Register
                            </Button>
                        </form>
                        <div style={{ marginTop: 16, textAlign: 'center' }}>
                            Already Have Account?{' '}
                            <a href="/login" style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 500 }}>
                                Login
                            </a>
                        </div>
                    </div>
                </AuthCard>
            </div>
        </div>
    );
}