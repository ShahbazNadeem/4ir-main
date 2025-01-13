"use client";
import { lastestBlog } from "@/data/data";
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
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <section>
                <div className="wrapper-slug">
                    <div className="container">
                        <div>
                            <h1>{title}</h1>
                            <Image src={img} alt={data.title} />
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
