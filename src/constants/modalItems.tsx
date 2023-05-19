import React, { ReactNode } from 'react';

type Props = {
    dialogRef?: React.RefObject<HTMLDivElement>;
    open?: boolean;
    modalMode?: boolean;
    withPadding?: boolean;
    large?: boolean;
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
};

const modalItems: Props = {
    // dialogRef,
    open: true,
    large: false,
    // modalMode,
    header: (
        <>
            <h3 className="text-base font-bold leading-6 text-secondary-color">Grabación realisada con éxito</h3>
        </>
    ),
    body: (
        <>
            <div className="mt-2">
                <p className="text-sm text-gray-500">. Plan nº XXXXXXX guardado con éxito.</p>
            </div>
        </>
    ),
    footer: (
        <>
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                // onClick={() => setOpen(false)}
            >
                Cerrar
            </button>
        </>
    ),
};

export default modalItems;
