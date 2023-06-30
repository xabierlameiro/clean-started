import { Xmark } from '@/src/assets/icons/Xmark';
import { Dispatch } from 'react';

type Props = {
    header: string;
    body: string;
    footer: string;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const BaseDialogContent = ({ header, body, footer, setOpen }: Props) => {
    return (
        <div className="border-4 bg-white shadow-xl transition-all w-full m-3 md:m-0 md:max-w-2xl">
            <div>
                <div className="flex border-2 justify-between align-center items-center w-full p-4">
                    <p className="font-bold text-lg text-gray-600">{header}</p>
                    <div className="p-1 hover:bg-gray-300 rounded-sm cursor-pointer" onClick={() => setOpen(false)}>
                        <Xmark className={'w-5 h-5'} alt={'close icon'} />
                    </div>
                </div>
                <div className="flex flex-col min-h-min pt-4 pb-8 border-2">{body}</div>
            </div>
            <footer className="flex flex-col border-2 p-3">
                <div className="flex justify-end">
                    <button
                        onClick={() => setOpen(false)}
                        className=" py-2 px-4 border-2 border-gray-500 hover:border-gray-400 bg-gray-500 rounded shadow text-white  hover:bg-gray-400 "
                    >
                        <span>{footer}</span>
                    </button>
                </div>
            </footer>
        </div>
    );
};
