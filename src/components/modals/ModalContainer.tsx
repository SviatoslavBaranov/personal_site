import { useEffect } from "react";
import { useModalStore } from "@/store/modalStore";
import FreelanceModal from "@/components/modals/FreelanceModal";
import InterviewModal from "@/components/modals/InterviewModal";

const ModalContainer = () => {
    const { modal } = useModalStore();
    const closeModal = useModalStore((state) => state.closeModal);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (modal) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modal, closeModal]);
    if (!modal) return null;

    return (
        <>
        {modal === "freelance" && <FreelanceModal />}
        {modal === "interview" && <InterviewModal />}
        </>
    );
};

export default ModalContainer;