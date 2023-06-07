import React, { useState } from 'react';
import { DropdownMenu } from './components/DropdownMenu';
import { ChevronDown } from '@/assets/icons/ChevronDown';

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-row items-center" onClick={toggle}>
            <p className="mr-1 text-sm hover:font-medium cursor-pointer">Dropdown</p>
            <div className="mt-1 cursor-pointer">
                <ChevronDown />
            </div>
            {isOpen && <DropdownMenu />}
        </div>
    );
};
