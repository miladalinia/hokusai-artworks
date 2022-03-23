import {GetStaticProps} from "next";
import Image from "next/image";
import {getJsonData} from "../../utils/tool";

const ArticlePage = ({data}: any) => {
    console.log(data)

    return (
        <div>
            <Image
                src={`/images/arts/${data.img}`}
                layout="responsive"
                width="1920"
                height="1080"
            />
            <div className="article_container">
                <h1>{data.name}</h1>
                <div dangerouslySetInnerHTML={{__html: data.content}}></div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const data = await getJsonData();
    const articles = data.articles;

    let articleData = articles?.find(article => article.slug === params.slug)

    return {
        props: {
            data: articleData
        }
    }
}

export const getStaticPaths = async () => {
    const data = await getJsonData();
    const paths = data.articles?.map((article => (
        {
            params: {slug: article.slug}
        }
    )))

    return {
        paths,
        fallback: false
    }
}


export default ArticlePage;