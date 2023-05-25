import { ReactElement } from 'react';

type Props = {
    sidebar: ReactElement;
    header: ReactElement;
    subheader: ReactElement;
    content: ReactElement;
};

export const Layout: React.FC<Props> = ({ sidebar, header, subheader, content }) => {
    return (
        <div className="flex">
            <aside className="border-r-2 w-[30%] lg:w-2/12">{sidebar}</aside>
            <section className="w-[70%] lg:w-10/12">
                {header}
                <main className="flex flex-col p-4 bg-gray-100">
                    {subheader}
                    {content}
                </main>
            </section>
        </div>
    );
};
