import axios from 'axios';
import Image from "next/image";
import Head from "next/head";
import {GetStaticProps} from "next";

const BioPage = (props: { bioData: Array<string> }) => {
    return (
        <div className="row">
            <Head>
                <meta name="description" content="Biography of hokusai"/>
            </Head>

            <div className="col-lg-8">
                <article>
                    <div className="mb-4">
                        <h1 className="fw-bolder mb-1">Houkusai Bio</h1>
                    </div>
                    <section className="mb-5">
                        {
                            props.bioData.map((bio: any, i: number) => (
                                <p key={i} className="fs-5 mb-4">{bio}</p>
                            ))
                        }
                    </section>
                </article>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <Image src={`/images/bio/bio.jpg`}
                           layout="responsive"
                           width="712"
                           height="1024"
                    />
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // api have bug
    // const bioData = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=5');

    const bioData =
        {
            data: [
                "Chislic biltong pig bacon, pork belly tail picanha venison.  Shankle tenderloin strip steak andouille, ham frankfurter pork loin.  Cupim rump cow, tenderloin pork belly sirloin venison turkey boudin t-bone bresaola leberkas flank beef ribs ham.  Pancetta shoulder kielbasa hamburger doner kevin jerky bresaola shank cupim tongue drumstick.  Beef ribs pig pork jowl spare ribs tenderloin shankle, pancetta brisket hamburger landjaeger kevin fatback picanha ground round.",
                "Tri-tip flank andouille filet mignon salami sirloin strip steak doner pork pig kevin burgdoggen turkey.  Short ribs jerky kielbasa meatloaf, jowl short loin bresaola buffalo ham prosciutto.  Venison short loin brisket shank salami meatloaf.  Pancetta drumstick kevin, fatback porchetta ball tip chuck capicola turkey burgdoggen pork.  Frankfurter kielbasa alcatra, shank porchetta corned beef prosciutto bresaola sausage jowl swine pork loin.",
                "Pork belly hamburger tenderloin chuck, boudin ham hock biltong kielbasa kevin tri-tip capicola.  Shankle spare ribs pork chop jowl.  Porchetta drumstick prosciutto corned beef chicken brisket.  Beef sausage chuck shoulder drumstick t-bone beef ribs.  Shank short loin prosciutto ball tip, cupim ground round rump beef pancetta boudin jowl kielbasa turducken doner.",
                "Short loin beef ribeye venison biltong andouille brisket t-bone doner chicken ground round.  Fatback hamburger filet mignon, doner andouille chicken beef ribs porchetta turkey jerky biltong rump cupim.  Jowl strip steak spare ribs shankle salami, ribeye sausage pork chop brisket t-bone tongue beef.  Filet mignon tri-tip andouille ball tip.  Beef short loin ribeye shankle picanha.  Biltong drumstick strip steak corned beef.",
                "Meatloaf boudin frankfurter pig.  Bresaola prosciutto short loin, chislic short ribs jerky andouille doner tail bacon venison beef meatloaf tongue.  Venison capicola bresaola leberkas sausage andouille meatloaf, beef kielbasa short ribs jowl pig buffalo.  Pork chop shoulder swine capicola pork loin prosciutto bresaola boudin ham jowl ball tip tail pork belly.  Meatloaf hamburger venison sausage buffalo leberkas.  Pig andouille rump swine turkey.  Pork loin alcatra picanha pancetta pork bacon."
            ]
        };

    if (!bioData.data) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            bioData: bioData.data
        },
        revalidate: 21600
    }
}

export default BioPage;

