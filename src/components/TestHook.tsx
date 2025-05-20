import React from 'react';
import { useModalStore } from '@/store/modalStore';

const TestHook = () => {
    const modal = useModalStore((state) => state.modal)
    return <div>Modal is: {modal}</div>
}

export default TestHook