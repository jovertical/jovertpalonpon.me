import React from 'react'
import Layout from '../components/Layout'
import * as SKILLS from '../constants/skills'

const Index: React.FC = (): React.ReactElement => {
    return (
        <Layout>
            <section className="tw-pt-5">
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
            </section>

            <section className="tw-bg-blue-500 tw-px-5 tw-pt-16 tw-pb-40 tw-text-center">
                <h1 className="tw-text-white tw-font-bold tw-text-xl lg:tw-text-3xl tw-mb-4">
                    Hi, {`I'm`} Jovert. Nice to meet you.
                </h1>

                <p className="lg:tw-w-1/2 tw-mx-auto tw-text-white lg:tw-text-lg">
                    My journey began 2 years ago right after our capstone
                    project when I started collaborating with my school mates in
                    freelance projects for small businesses, my corporate career
                    is spent for start-up companies making me a resourceful
                    person as a result. I'm also collaborating with my
                    colleagues in developing applications that can help the
                    society. Throughout the years {`I've`} expanded my knowledge
                    from front-end stuff to back-end and then DevOps. I only
                    follow a basic principle: {`"Don't Repeat Yourself"`}.
                </p>
            </section>

            <section className="tw-bg-white tw--mt-32 tw-mx-5 lg:tw-mx-40 tw-rounded-lg tw-border">
                <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-1/3 tw-border-b lg:tw-border-b-none lg:tw-border-r tw-p-8 tw-text-center">
                        <h1 className="tw-font-bold tw-text-xl tw-mb-4">
                            Front-end Developer
                        </h1>

                        <p className="tw-mb-10 lg:tw-text-lg">
                            I love to convert a design into code, ensure that it
                            is responsive and cross-browser compatible.I always
                            tries to be the {`"user"`} when doing frontend
                            stuff.
                        </p>

                        <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                            Languages I Speak:
                        </p>

                        <p className="tw-mb-10 lg:tw-text-lg">
                            {SKILLS.frontendLanguages.map(lang => lang + ', ')}
                        </p>

                        <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                            Dev Tools:
                        </p>

                        <ul>
                            {SKILLS.frontendTools.map((tool, i) => (
                                <li key={i}>
                                    <p className="lg:tw-text-lg">{tool}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tw-w-full lg:tw-w-1/3 tw-border-b lg:tw-border-b-none lg:tw-border-r tw-p-8 tw-text-center">
                        <h1 className="tw-font-bold tw-text-xl tw-mb-4">
                            Back-end Developer
                        </h1>

                        <p className="tw-mb-10 lg:tw-text-lg">
                            I love making simple to complex application backend
                            systems, I code with maintainability in mind by
                            following industry-proven coding standards.
                        </p>

                        <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                            Languages I Speak:
                        </p>

                        <p className="tw-mb-10 lg:tw-text-lg">
                            {SKILLS.backendLanguages.map(lang => lang + ', ')}
                        </p>

                        <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                            Dev Tools:
                        </p>

                        <ul>
                            {SKILLS.backendTools.map((tool, i) => (
                                <li key={i}>
                                    <p className="lg:tw-text-lg">{tool}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tw-w-full lg:tw-w-1/3 tw-p-8 tw-text-center">
                        <h1 className="tw-font-bold tw-text-xl tw-mb-4">
                            DevOps Enthusiast
                        </h1>

                        <p className="tw-mb-10 lg:tw-text-lg">
                            My interest in DevOps and cloud has just developed
                            over the years, its just fulfilling to see your app
                            being a reality.I ensure that the app is secure
                            &amp; scalable.
                        </p>

                        <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                            Tools I use:
                        </p>

                        <p className="tw-mb-10 lg:tw-text-lg">
                            {SKILLS.devOpsTools.map(tool => tool + ', ')}
                        </p>

                        <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                            Cloud Platforms I deploy to:
                        </p>

                        <ul>
                            {SKILLS.cloudPlatforms.map((platform, i) => (
                                <li key={i}>
                                    <p className="lg:tw-text-lg">{platform}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="tw-my-32 tw-mx-5 lg:tw-mx-40 tw-text-center">
                <h1 className="tw-font-bold tw-text-2xl tw-mb-4">
                    Featured Projects
                </h1>

                <div className="tw-flex tw-flex-wrap">
                    <div className="tw-border"></div>
                </div>
            </section>
        </Layout>
    )
}

export default Index
