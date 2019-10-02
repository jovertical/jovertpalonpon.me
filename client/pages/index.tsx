import * as React from 'react'
import Layout from '../components/Layout'

const Index: React.FC = (): React.ReactElement => (
    <Layout>
        <div className="tw-pt-5">
            <div className="tw-py-16 tw-px-5 lg:tw-px-0 tw-text-center">
                <h1 className="tw-font-black tw-text-2xl lg:tw-text-4xl tw-leading-tight tw-mb-5">
                    Full Stack Developer &amp; DevOps Enthusiast
                </h1>

                <h2 className="lg:tw-text-lg">
                    I code and deploy applications, through the help of
                    coffee...
                </h2>
            </div>

            <div className="tw-w-3/4 lg:tw-w-1/2 tw-mx-auto">
                <img src="/static/web_developer.svg" alt="Web Developer" />
            </div>
        </div>

        <div className="tw-bg-blue-500 tw-px-5 tw-pt-16 tw-pb-32 tw-text-center">
            <h1 className="tw-text-white tw-font-bold tw-text-xl lg:tw-text-3xl tw-mb-4">
                Hi, I'm Jovert. Nice to meet you.
            </h1>

            <p className="lg:tw-w-1/2 tw-mx-auto tw-text-white lg:tw-text-lg">
                My journey began 2 years ago right after our capstone project
                when I started collaborating with my school mates in freelance
                projects for small businesses, my corporate career is spent for
                start-up companies making me a resourceful person as a result.
                I'm also collaborating with my colleagues in developing
                applications that can help the society. Throughout the years
                I've expanded my knowledge from front-end stuff to back-end and
                now DevOps.
            </p>
        </div>
    </Layout>
)

export default Index
