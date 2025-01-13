import React from 'react'
import "./industries.css"
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import { ActionCard } from '@/components/ActionCard'

const index = () => {
    return (
        <Layout>
            <Head>
                <title>Industries</title>
            </Head>

            <section>
                <div className='wrapper-I1'>
                    <ActionCard>
                        <ActionCard.Header title="Revolutionize Real Estate with AI-Powered Lead Generation and Conversational AI" />
                        <ActionCard.Body description="In today's competitive real estate market, capturing and converting leads quickly is essential. 4IR's AI Talk Assist combines cutting-edge AI lead generation with human-like conversational AI to automate outreach, qualify leads, and schedule appointments, freeing up your agents to focus on closing deals." />
                    </ActionCard>
                </div>
            </section>

            <sectio>
                <div></div>
            </sectio>
        </Layout>
    )
}

export default index