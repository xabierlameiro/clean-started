import { ReactElement, useState } from 'react';
import { BarsArrowDown } from '../Icons/BarsArrowDown';
import { Xmark } from '../Icons/Xmark';

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
                </main>
            </section>
        </div>
    );
};
