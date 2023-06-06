import { ReactElement, useState } from 'react';
import { BarsArrowDown } from '../Icons/BarsArrowDown';
import { Xmark } from '../Icons/Xmark';
import Link from 'next/link';

type Props = {
    sidebar: ReactElement;
    header: ReactElement;
    subheader: ReactElement;
    content: ReactElement;
};

export const Layout: React.FC<Props> = ({ sidebar, header, subheader, content }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative flex bg-gray-100">
            {isMenuOpen ? (
                <button
                    className="absolute z-10 m-2 mt-3 flex items-center justify-center lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Xmark className="w-8 h-8" alt="close menu" />
                </button>
            ) : (
                <button
                    className=" w-[5%] h-16 flex items-center justify-center border-r-2 border-b-2 border-gray-300 bg-white lg:hidden"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <BarsArrowDown className=" w-6 h-6" alt="open menu" />
                </button>
            )}
            <aside className={`${isMenuOpen ? 'block pt-12' : 'hidden'} lg:block bg-white border-r-2`}>{sidebar}</aside>
            <section className="w-[95%] h-full">
                {header}
                <main className="flex flex-col p-4 bg-gray-100">
                    {subheader}
                    {content}
                    <>
                        <button className="flex justify-end ">
                            <Link href="/new-plan">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 bg-primary-color text-white rounded-xl"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </Link>
                        </button>
                    </>
                </main>
            </section>
        </div>
    );
};
