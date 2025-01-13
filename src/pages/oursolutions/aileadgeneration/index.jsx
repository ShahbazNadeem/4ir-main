import { ActionCard } from '@/components/ActionCard'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'
import "./aileadgenerataion.css"

const index = () => {
  return (
    <Layout>
      <Head>
        <title>AI Lead Generation</title>
      </Head>

      <section>
        <div className="wrapper-AI1">
          <ActionCard>
            <ActionCard.Header title="Generate More Leads. Close More Deals. With AI" />
            <ActionCard.Body description="Effortlessly replace manual lead generation and calling processes with our AI-powered solution. Enjoy 24/7 availability, scalable capacity, and improved lead quality." />
          </ActionCard>
        </div>
      </section>

    </Layout>
  )
}

export default index