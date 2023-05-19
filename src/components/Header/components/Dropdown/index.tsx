import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { icons } from 'src/constants/icons';
import { itemsList } from '@/mocks/mockDropdownHeaderList';

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-row items-center" onClick={toggle}>
            <p className="mr-1 text-sm hover:font-medium cursor-pointer">Dropdown</p>
            <div className="mt-1 cursor-pointer">
                <Image src={icons.downArrow} alt="arrow down" width={15} height={0} className="mx-auto" />
            </div>
            {isOpen && (
                <div className="bg-white border-2 absolute right-5 top-12 flex flex-col items-start rounded-lg p-4 gap-2 w-60">
                    {itemsList.map(({ label }, index) => (
                        <div key={index}>
                            <Link className="text-sm hover:font-medium cursor-pointer" href={'/'}>
                                {label}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
