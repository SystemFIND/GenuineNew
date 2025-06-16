import React, { useState, useEffect } from 'react';
import AuthCard from '@/Components/Registerpage/AuthCard';
import AuthLogo from '@/Components/Registerpage/AuthLogo';
import Input from '@/Components/Registerpage/Input';
import Label from '@/Components/Registerpage/Label';
import Button from '@/Components/Registerpage/Button';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function Registerpage({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        // Terapkan dark mode class pada <html> berdasarkan preferensi user
        const root = document.documentElement;
        if (auth?.user?.settings?.dark_mode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [auth]);

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
        <div className="min-h-screen bg-gray-300 dark:bg-gray-900 flex flex-col relative">
            {/* Tombol Back */}
            <Button
                type="button"
                className="absolute top-6 left-6 z-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-5 py-2 rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => router.visit('/')}
            >
                &#8592; Back to Home
            </Button>

            {/* Form */}
            <div className="flex flex-1 items-center justify-center p-4">
                <AuthCard>
                    <div className="flex flex-col items-center w-full">
                        <AuthLogo />
                        <form className="w-full mt-5" onSubmit={handleSubmit}>
                            <div className="flex gap-2 flex-col sm:flex-row w-full">
                                <div className="flex-1 min-w-0">
                                    <Label htmlFor="first_name" value="First name" />
                                    <Input
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        required
                                        value={data.first_name}
                                        onChange={e => setData('first_name', e.target.value)}
                                    />
                                    {errors.first_name && <div className="text-red-600 text-sm mt-1">{errors.first_name}</div>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <Label htmlFor="last_name" value="Last name" />
                                    <Input
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        required
                                        value={data.last_name}
                                        onChange={e => setData('last_name', e.target.value)}
                                    />
                                    {errors.last_name && <div className="text-red-600 text-sm mt-1">{errors.last_name}</div>}
                                </div>
                            </div>

                            <div className="mt-4">
                                <Label htmlFor="email" value="Email address" />
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                            </div>

                            <div className="mt-4">
                                <Label htmlFor="password" value="Password" />
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {passwordError && <div className="text-red-600 text-sm mt-1">{passwordError}</div>}
                                {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
                            </div>

                            <div className="mt-4">
                                <Label htmlFor="password_confirmation" value="Confirm password" />
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    required
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                />
                                {errors.password_confirmation && <div className="text-red-600 text-sm mt-1">{errors.password_confirmation}</div>}
                            </div>

                            <Button
                                className="mt-6 w-full bg-gray-800 text-white dark:bg-gray-200 dark:text-black py-2 rounded-md text-base font-medium hover:bg-gray-700 dark:hover:bg-white transition-colors"
                                disabled={processing}
                            >
                                Register
                            </Button>
                        </form>

                        <div className="mt-4 text-center text-gray-800 dark:text-gray-200">
                            Already Have Account?{' '}
                            <a
                                href="/login"
                                className="text-blue-600 dark:text-blue-400 font-medium underline"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </AuthCard>
            </div>
        </div>
    );
}
