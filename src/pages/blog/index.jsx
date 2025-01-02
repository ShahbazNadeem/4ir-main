import React from 'react';
import "./blog.css"
import Swipper1 from '@/components/swipper1/Swipper1';
import { blogswipperData } from '@/data/data';
import { ActionCard } from '@/components/ActionCard';

const index = () => {
    return (
        <div>
            <section>
                <div className="wrapper-B1">
                    <ActionCard>
                        <ActionCard.HeaderMain title="Blog" />
                        <ActionCard.Body description="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." />
                    </ActionCard>
                </div>
            </section>

            <section>
                <div className="Wrapper-B2">
                    <div className='container'>
                        <Swipper1 data={blogswipperData} />
                    </div>
                </div>
            </section>

            <section>
                
            </section>
        </div>
    )
}

export default index