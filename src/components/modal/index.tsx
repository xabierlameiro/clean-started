import React, { ReactNode } from 'react';

type ModalProps = {
    dialogRef?: React.RefObject<HTMLDivElement>;
    className?: string;
    open?: boolean;
    withPadding?: boolean;
    modalMode?: boolean;
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    large?: boolean;
};

type Modal = {
    modal: ModalProps;
};

/**
 * @example
 *     <Dialog
 *         dialogRef={dialogRef}
 *         open={open}
 *         withPadding={withPadding}
 *         modalMode={modalMode}
 *         header={<h1>Header</h1>}
 *         body={<p>Body</p>}
 *         footer={<button>Footer</button>}
 *         large={large}
 *     />;
 *
 * @param {React.RefObject<HTMLDivElement>} dialogRef - Ref to the dialog element
 * @param {boolean} open - If true, the dialog will be open
 * @param {boolean} withPadding - If true, the dialog will have padding
 * @param {boolean} modalMode - If true, the dialog will be not complete screen
 * @param {ReactNode} header - The header of the dialog
 * @param {ReactNode} body - The body of the dialog
 * @param {ReactNode} footer - The footer of the dialog
 * @param {boolean} large - If true, the dialog will be large
 * @returns {JSX.Element}
 */

function DialogModal({ modal }: Modal) {
    const { dialogRef, open, large, header, body, footer } = modal;

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
            <div ref={dialogRef} className="fixed inset-0 z-40 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center g-4 text-center sm:items-center sm:p-0">
                    <div
                        className={`${
                            large ? 'h-96' : null
                        } relative transform overflow-hidden rounded-lg bg-white py-6 px-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
                    >
                        <main>
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    {header}
                                    {body}
                                </div>
                            </div>
                        </main>
                        <footer className="px-4 sm:flex sm:flex-row-reverse sm:px-6">{footer}</footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DialogModal;
