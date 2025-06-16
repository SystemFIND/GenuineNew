import React, { useEffect } from 'react';
import AuthCard from '@/Components/Loginpage/AuthCard';
import AuthLogo from '@/Components/Loginpage/AuthLogo';
import Input from '@/Components/Loginpage/Input';
import Label from '@/Components/Loginpage/Label';
import Button from '@/Components/Loginpage/Button';
import Divider from '@/Components/Loginpage/Divider';
import GoogleButton from '@/Components/Loginpage/GoogleButton';
import { useForm, usePage } from '@inertiajs/react';

export default function Loginpage() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    // Ambil settings dari auth user (bisa kosong kalau belum login)
    const { props } = usePage();
    const settings = props.auth?.user?.settings;

    useEffect(() => {
        if (settings?.dark_mode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [settings]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    // Style dinamis berdasarkan dark mode
    const backgroundColor = settings?.dark_mode ? '#1a1a1a' : '#8c8c8c';
    const textColor = settings?.dark_mode ? '#eee' : '#333';
    const linkColor = settings?.dark_mode ? '#66aaff' : '#2d72d9';

    return (
        <div
            style={{
                minHeight: '100vh',
                background: backgroundColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
                position: 'relative',
                color: textColor,
            }}
        >
            {/* Tombol Back di pojok kiri atas */}
            <Button
                type="button"
                style={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    background: settings?.dark_mode ? '#333' : '#e0e0e0',
                    color: textColor,
                    border: 'none',
                    borderRadius: 5,
                    padding: '8px 20px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => window.location.href = '/'}
            >
                &#8592; Back to Home
            </Button>
            <AuthCard>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <AuthLogo />
                    <form style={{ width: '100%', marginTop: 20 }} onSubmit={handleSubmit}>
                        <div>
                            <Label htmlFor="email" value="Email" />
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                required
                                autoFocus
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
                            {errors.password && <div style={{ color: 'red', fontSize: 12 }}>{errors.password}</div>}
                            <div style={{ textAlign: 'right', fontSize: 12 }}>
                                <a href="#" style={{ color: linkColor, textDecoration: 'none' }}>Forgot Password ?</a>
                            </div>
                        </div>
                        <Button
                            style={{
                                marginTop: 15,
                                width: '100%',
                                background: '#2d72d9',
                                color: '#fff',
                                fontWeight: 600,
                                border: 'none',
                                borderRadius: 5,
                                padding: '12px 0',
                                fontSize: 16,
                                cursor: 'pointer',
                            }}
                        >
                            Login
                        </Button>
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                            Not signed up yet? <a href="/register" style={{ color: linkColor }}>Register Here</a>
                        </div>
                        <Divider text="OR" />
                        <GoogleButton />
                    </form>
                </div>
            </AuthCard>
        </div>
    );
}