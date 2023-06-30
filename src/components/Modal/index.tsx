import React, { ReactElement } from 'react';

type Props = {
    children?: ReactElement;
};

const Backdrop = () => {
    return <div className={'fixed inset-0 bg-terciary-color-light bg-opacity-60 transition-opacity'}></div>;
};

export const Modal = ({ children }: Props) => {
    return (
        <div className={'relative z-10'} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <Backdrop />
            <div className="fixed inset-0 z-40 overflow-y-auto">
                <main className="flex min-h-full items-center justify-center text-center">{children}</main>
            </div>
        </div>
    );
};
