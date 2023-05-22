import React, { useState } from 'react';
import Image from 'next/image';
import { icons } from '@/constants/icons';
import { DropdownMenu } from './components/DropdownMenu';

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-row items-center" onClick={toggle}>
            <p className="mr-1 text-sm hover:font-medium cursor-pointer">Dropdown</p>
            <div className="mt-1 cursor-pointer">
                <Image
                    src={icons.chevronDown.url}
                    alt={icons.chevronDown.name}
                    width={15}
                    height={0}
                    className="mx-auto"
                />
            </div>
            {isOpen && <DropdownMenu />}
        </div>
    );
};
