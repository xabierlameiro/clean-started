import React, { useState } from 'react';
import { DropdownMenu } from './components/DropdownMenu';
import { ChevronDown } from '@/assets/icons/ChevronDown';
import { useAuthContext } from '@/src/context/auth/AuthContext';

export const Dropdown = () => {
    const { user } = useAuthContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const showRole = user && user.role ? user.role[0] : '';

    return (
        <div className="flex flex-row items-center" onClick={() => setIsOpen(!isOpen)}>
            <p className="mr-1 text-sm hover:font-medium cursor-pointer">{showRole}</p>
            <div className="mt-1 cursor-pointer">
                <ChevronDown />
            </div>
            {isOpen && <DropdownMenu />}
        </div>
    );
};
