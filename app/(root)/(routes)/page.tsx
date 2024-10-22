'use client';

import { Button } from "@/components/ui/button"; // Jika Anda berniat menggunakan Button
import Modal from "@/components/ui/modal"; // Jika Anda ingin menampilkan Modal
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs"; 
import { useEffect } from "react"; // Import useEffect

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen && typeof onOpen === 'function') { // Periksa apakah onOpen adalah fungsi
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      Root Page
      <UserButton afterSignOutUrl="/" />
      {/* Jika ingin menampilkan modal, tambahkan di sini */}
      {/* <Modal isOpen={isOpen} onClose={onClose} /> */}
    </div>
  );
};

export default SetupPage;
