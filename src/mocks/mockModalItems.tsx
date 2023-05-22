import React, { ReactNode } from 'react';

export type ModalProps = {
    dialogRef?: React.RefObject<HTMLDivElement>;
    open?: boolean;
    large?: boolean;
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
};

export const modalItems: ModalProps = {
    // dialogRef,
    open: true,
    large: false,
    header: (
        <>
            <h3 className="text-base font-bold leading-6 text-secondary-color">Grabación realizada con éxito</h3>
        </>
    ),
    body: (
        <>
            <div className="mt-2">
                <p className="text-sm text-terciary-color">. Plan nº XXXXXXX guardado con éxito.</p>
            </div>
        </>
    ),
    footer: (
        <>
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-color-light sm:ml-3 sm:w-auto"
                // onClick={() => setOpen(false)}
            >
                Cerrar
            </button>
        </>
    ),
};
