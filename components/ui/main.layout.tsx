import Head from "next/head"
import Header from "../navigation/header";
import {ReactChild} from "react";

const LayoutMain = (props: { children: ReactChild }) => {
    return (
        <>
            <Head>
                <title>Hokusai tribute</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content="This is a tribute page pf hokusai"/>
                <meta name="keywords" content="Hokusai, art, paint"/>
                <meta name="author" content="Francis"/>
            </Head>
            <Header/>
            <div className="container">
                {props.children}
            </div>
        </>
    )
}

export default LayoutMain;