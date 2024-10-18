'use client'

import {Button} from "@/components/ui/button"
import Modal from "@/components/ui/modal";
import { ClerkProvider, UserButton } from "@clerk/nextjs";


const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="Test Title" description="test description"
      isOpen onClose={() => {}}>
        Childrengggg
      </Modal>
    </div>
  );
};

export default SetupPage;
