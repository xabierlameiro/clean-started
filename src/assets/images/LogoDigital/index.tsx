import Image from 'next/image';
import logo from './logo_digital.svg';

type Props = {
    height: number;
    width: number;
};

export const LogoDigital: React.FC<Props> = ({ height, width }) => {
    return <Image src={logo} alt="logo" height={height} width={width} />;
};
