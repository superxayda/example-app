import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Content from '@/Pages/Content/Index';
import { Head } from '@inertiajs/react';
import { useState, useCallback } from 'react';

export default function Dashboard({ auth }) {
    // example optimize memory
    
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, [])
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Content onIncrease={handleIncrease}/>
                        <div className="p-6 text-gray-900">{count}</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
