// resources\js\Components\Profile\Edit.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, settings }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Settings
                </h2>
            }
        >
            <Head title="Settings" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <p><strong>Dark Mode:</strong> {settings.dark_mode ? 'Enabled' : 'Disabled'}</p>
                            <p><strong>Timezone:</strong> {settings.timezone}</p>
                            <p><strong>Date Format:</strong> {settings.date_format}</p>
                            <p><strong>Time Format:</strong> {settings.time_format}</p>
                            <p><strong>Push Notification:</strong> {settings.push_notification ? 'Enabled' : 'Disabled'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
