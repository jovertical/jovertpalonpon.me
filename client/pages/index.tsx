import * as React from 'react'
import Layout from '../components/Layout'

const Index: React.FC = (): React.ReactElement => (
    <Layout>
        <div className="tw-py-5">
            <div className="tw-py-16 tw-px-4 lg:tw-px-0 tw-text-center">
                <h1 className="tw-font-black tw-text-2xl lg:tw-text-4xl tw-leading-tight tw-mb-5">
                    Full Stack Developer &amp; DevOps Enthusiast
                </h1>

                <h2 className="lg:tw-text-lg tw-leading-tight">
                    I code and deploy it also, through the help of coffee...
                </h2>
            </div>
        </div>
    </Layout>
)

export default Index
