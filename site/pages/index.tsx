import React from 'react'
import Layout from '../components/Layout'
import * as SKILLS from '../constants/skills'

const Index: React.FC = (): React.ReactElement => {
    const projects: Project[] = [
        {
            id: 'AE2S-GHS7-1RZ5-89AE',
            name: 'Workgalore',
            description: 'This is a wonderful project',
            imageUrl: '/static/workgalore.png'
        }
    ]

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
                    person as a result. {`I'm`} also collaborating with my
                    colleagues in developing applications that can help the
                    society. Throughout the years {`I've`} expanded my knowledge
                    from front-end stuff to back-end and then DevOps. I only
                    follow a basic principle: {`"Don't Repeat Yourself"`}.
                </p>
            </section>

            <section className="tw--mt-32 tw-mx-5 lg:tw-mx-40">
                <div className="tw-flex tw-flex-wrap tw--mx-2">
                    <div className="tw-w-full lg:tw-w-1/3 tw-px-2 tw-mb-5 lg:tw-mg-0">
                        <div className="tw-h-full tw-text-center tw-p-8 tw-bg-white tw-rounded tw-border hover:tw-shadow-lg">
                            <div className="tw-m-5">
                                <svg
                                    className="tw-fill-current tw-text-blue-500 tw-h-16 tw-mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13 17h-2v2h2v-2zm2 0v2h2a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h2v-2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5zM4 5v10h16V5H4z" />
                                </svg>
                            </div>

                            <h1 className="tw-font-bold tw-text-xl tw-mb-4">
                                Front-end Developer
                            </h1>

                            <p className="tw-mb-10 lg:tw-text-lg">
                                I love to convert a design into code, ensure
                                that it is responsive and cross-browser
                                compatible.I always tries to be the {`"user"`}{' '}
                                when doing frontend stuff.
                            </p>

                            <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                                Languages I Speak:
                            </p>

                            <p className="tw-mb-10 lg:tw-text-lg">
                                {SKILLS.frontendLanguages.map(
                                    lang => lang + ', '
                                )}
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
                    </div>

                    <div className="tw-w-full lg:tw-w-1/3 tw-px-2 tw-mb-5 lg:tw-mg-0">
                        <div className="tw-h-full tw-text-center tw-p-8 tw-bg-white tw-rounded tw-border hover:tw-shadow-lg">
                            <div className="tw-m-5">
                                <svg
                                    className="tw-fill-current tw-text-blue-500 tw-h-16 tw-mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z" />
                                </svg>
                            </div>

                            <h1 className="tw-font-bold tw-text-xl tw-mb-4">
                                Back-end Developer
                            </h1>

                            <p className="tw-mb-10 lg:tw-text-lg">
                                I love making simple to complex application
                                backend systems, I code with maintainability in
                                mind by following industry-proven coding
                                standards.
                            </p>

                            <p className="tw-mb-2 lg:tw-text-lg tw-text-blue-500">
                                Languages I Speak:
                            </p>

                            <p className="tw-mb-10 lg:tw-text-lg">
                                {SKILLS.backendLanguages.map(
                                    lang => lang + ', '
                                )}
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
                    </div>

                    <div className="tw-w-full lg:tw-w-1/3 tw-px-2 tw-mb-5 lg:tw-mg-0">
                        <div className="tw-h-full tw-text-center tw-p-8 tw-bg-white tw-rounded tw-border hover:tw-shadow-lg">
                            <div className="tw-m-5">
                                <svg
                                    className="tw-fill-current tw-text-blue-500 tw-h-16 tw-mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </div>

                            <h1 className="tw-font-bold tw-text-xl tw-mb-4">
                                DevOps Enthusiast
                            </h1>

                            <p className="tw-mb-10 lg:tw-text-lg">
                                My interest in DevOps and cloud has just
                                developed over the years, its just fulfilling to
                                see your app being a reality.I ensure that the
                                app is secure &amp; scalable.
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
                                        <p className="lg:tw-text-lg">
                                            {platform}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tw-my-32 tw-mx-5 lg:tw-mx-40 tw-text-center">
                <h1 className="tw-font-bold tw-text-2xl tw-mb-10">
                    Featured Projects
                </h1>

                <div className="tw-flex tw-flex-wrap">
                    {projects.map(project => (
                        <div className="project tw-w-full lg:tw-w-1/3">
                            <div
                                className="content tw-relative tw-bg-cover tw-bg-center tw-h-0 tw-w-full tw-rounded-lg hover:tw-bg-gray-700"
                                style={{
                                    backgroundImage: `url("${project.imageUrl}")`
                                }}
                            >
                                <div className="tw-justify-center tw-items-center tw-absolute tw-inset-0 tw-w-full tw-h-full">
                                    <p className="tw-text-white">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .project .content {
                    padding-top: 56.25%;
                }

                .project .content:hover {
                    background-image: none !important;
                }
            `}</style>
        </Layout>
    )
}

export default Index
