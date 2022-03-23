import type {GetStaticProps} from 'next'
import {getJsonData} from "../utils/tool";
import CarrouselComp from "../components/ui/carrousel";
import JsonModel from "../utils/JsonModel";

const Home = (props: { data: JsonModel }) => {


    return (
        <div>
            <CarrouselComp data={props.data.carrousel}/>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const data = await getJsonData();

    return {
        props: {
            data
        }
    }

}

export default Home
