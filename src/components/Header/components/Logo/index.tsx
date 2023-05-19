import Image from 'next/image';

interface Props {
    img: string;
}

export const Logo = ({ img }: Props) => {
    return <Image src={img} alt="logo" width={90} height={0} />;
};
