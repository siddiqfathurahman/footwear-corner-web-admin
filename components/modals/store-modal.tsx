'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();
    <Modal         
    title="Buat Store"
    description="tambahkan store untuk membuat product dan kategori"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
        Store From
    </Modal>
}