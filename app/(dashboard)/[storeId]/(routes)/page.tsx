import db from '@/lib/db';

interface DashboardPageProps {
    params: { storeId: string }
}


const DashboardPage = async ({ params }: DashboardPageProps) => {
    const store = await db.store.findFirst({
        where: {
            id: params.storeId,
        },
    });

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="font-extrabold text-7xl text-blue-800">Welcome Admin</h1>
                <h2 className="font-semibold text-5xl mt-2">
                    {store?.name || "Store not found"}
                </h2>
            </div>
        </div>
    );
    
};


export default DashboardPage;
