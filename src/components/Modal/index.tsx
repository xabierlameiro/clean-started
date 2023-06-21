import React, { ReactNode } from 'react';

type Props = {
    borderColor: string;
    dialogRef?: React.RefObject<HTMLDivElement>;
    open?: boolean;
    large?: boolean;
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
};

export const DialogModal = ({ borderColor = 'gray', dialogRef, open, header, body, footer }: Props) => {
    return (
        <div
            className={`${open ? 'visible' : 'hidden'}  relative z-10`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Background backdrop */}
            <div
                className={`${
                    open ? 'visible' : 'hidden'
                } fixed inset-0 bg-terciary-color-light bg-opacity-60 transition-opacity`}
            ></div>

            {/* Modal panel */}
            <div ref={dialogRef} id="asdf" className="fixed inset-0 z-40 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center text-center">
                    <div
                        className={`border-4 border-${borderColor}-400 bg-white shadow-xl transition-all w-full m-3 md:m-0 md:max-w-2xl`}
                    >
                        <main>
                            <div className="flex border-2 justify-between align-center items-center w-full p-4">
                                {header}
                            </div>
                            <div className="flex flex-col min-h-min pt-4 pb-8 border-2">{body}</div>
                        </main>
                        <footer className="flex flex-col border-2 p-3">{footer}</footer>
                    </div>
                </div>
            </div>
        </div>
    );
};
