import { Dispatch } from 'react';
import { Xmark } from '@/assets/icons/Xmark';

type FooterProps = {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ setOpen }: FooterProps): JSX.Element => {
    return (
        <>
            <p className="font-bold text-lg text-gray-600">Grabación realizada con éxito</p>
            <div className="p-1 hover:bg-gray-300 rounded-sm cursor-pointer" onClick={() => setOpen(false)}>
                <Xmark className={'w-5 h-5'} alt={'close icon'} />
            </div>
        </>
    );
};
