import Image from 'next/image';

interface Props {
    name: string;
    url: string;
}

export const Logo = ({ name, url }: Props) => {
    return <Image src={url} alt={name} width={90} height={0} />;
};
