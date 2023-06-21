import { Dispatch } from 'react';

type FooterProps = {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const Footer = ({ setOpen }: FooterProps): JSX.Element => {
    return (
        <div className="flex justify-end">
            <button
                onClick={() => setOpen(false)}
                className=" py-2 px-4 border-2 border-gray-500 hover:border-gray-400 bg-gray-500 rounded shadow text-white  hover:bg-gray-400 "
            >
                <span>Cerrar</span>
            </button>
        </div>
    );
};
