import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4] p-6">
            <Head title="Verify Email" />

            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
                <h1 className="text-2xl font-bold text-center mb-4 text-[#001F3F]">Verify Your Email</h1>

                <p className="text-sm text-gray-700 mb-4 text-center">
                    Thank you for registering! Please verify your email address by clicking the link in the email we sent you. <br />
                    If you didn't receive the email, you can request another one below.
                </p>

                {status === 'verification-link-sent' && (
                    <div className="text-green-600 text-sm font-medium text-center mb-4">
                        A new verification link has been sent to your email.
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-[#001F3F] text-white py-2 px-4 rounded hover:bg-[#003366] transition"
                    >
                        Resend Verification Email
                    </button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="w-full text-center py-2 px-4 text-white bg-red-600 hover:bg-red-700 rounded transition"
                    >
                        Logout
                    </Link>
                </form>
            </div>
        </div>
    );
}
