import Document, { Html, Head, Main, NextScript } from 'next/document'
import { metaDetails } from '../data/data'
class MyDocument extends Document {
    render() {
        return (
            <Html lang="EN">
                <Head>
                    <meta name="title" content={metaDetails.title} />
                    <meta name="description" content={metaDetails.description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={metaDetails.url} />
                    <meta property="og:title" content={metaDetails.title} />
                    <meta property="og:description" content={metaDetails.description} />
                    <meta property="og:image" content="" />
                </Head>
                < body >
                    <Main />
                    < NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument