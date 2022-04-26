import '../styles/globals.css'
import type {AppProps} from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutMain from "../components/ui/main.layout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <LayoutMain>
                <Component {...pageProps}
                />
            </LayoutMain>
        </>
    )
}

export default MyApp
