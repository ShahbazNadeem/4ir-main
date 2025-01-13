"use client";
import Layout from "@/components/layout/Layout";
import Swipper2 from "@/components/Swipper2";
import { aboutusReviews, lastestBlog } from "@/data/data";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogPost() {
    const [data, setData] = useState(null);
    // this
    // const router = useRouter();
    // const { slug } = router.query;
    // or this
    const { query: { slug } } = useRouter();

    useEffect(() => {
        if (slug) {
            //   const foundData = lastestBlog.find((blog) => blog.link.includes(slug));
            const foundData = lastestBlog.find((blog) => blog.link.split("/").pop() === slug);
            setData(foundData || null);
        }
    }, [slug]);

    if (!data) {
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <h2>Nothing To Show</h2>
            </div>
        )
    }

    const { title, img, description } = data;
    return (
        <Layout>
            <Head>
                <title>{data.title}</title>
            </Head>
            <section>
                <div className="wrapper-slug-S1">
                    <div className="container">
                        <div className="slug-S1-content">
                            <h2>{title}</h2>
                            <figure><Image src={img} alt={data.title} /></figure>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-slug-S2">
                    <div className="container">
                        <div className="slug-S2-content">

                            <h2>Client Reviews</h2>
                            <Swipper2 data={aboutusReviews} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
