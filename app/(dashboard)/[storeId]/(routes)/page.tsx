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
        <div>
            Active Store: {store?.name || "Store not found"} {/* Menangani jika store tidak ditemukan */}
        </div>
    );
};


export default DashboardPage;
