import { image } from '@/src/constants/images.constants';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel={image.favicon.name} href={image.favicon.url} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
