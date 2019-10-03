import React from 'react'
import Link from 'next/link'

const Footer: React.FC = (): React.ReactElement => {
    return (
        <footer className="tw-bg-blue-500 tw-text-white">
            <div className="tw-text-center lg:tw-w-1/2 tw-p-5 lg:tw-p-32 tw-mx-auto">
                <div className="tw-mb-5">
                    <Link href="/">
                        <a title="home" className="tw-font-bold">
                            Jovert P.
                        </a>
                    </Link>
                </div>

                <p className="tw-mb-10 lg:tw-text-lg">
                    Anything is possible, If you find the time and effort for
                    it.
                </p>

                <div>
                    <span className="tw-mx-2">
                        <a
                            href="https://github.com/palonponjovertlota"
                            title="Github Profile"
                        >
                            <svg
                                className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-gray-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-3 tw-h-12 tw-w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z" />
                            </svg>
                        </a>
                    </span>

                    <span className="tw-mx-2">
                        <a
                            href="https://www.linkedin.com/in/jovert-palonpon-958761185/"
                            title="Linkedin Profile"
                        >
                            <svg
                                className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-gray-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-2 tw-h-12 tw-w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -2 20 30"
                            >
                                <path d="M5 3c0 1.1-.7 2-2 2-1.2 0-2-.9-2-1.9C1 2 1.8 1 3 1s2 .9 2 2zM1 19h4V6H1v13zM14.6 6.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z" />
                            </svg>
                        </a>
                    </span>

                    <span className="tw-mx-2">
                        <a
                            href="https://twitter.com/JovertPalonpon"
                            title="Twitter Profile"
                        >
                            <svg
                                className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-gray-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-3 tw-h-12 tw-w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562 3.779 3.779 0 0 1-3.526-2.621 3.858 3.858 0 0 0 1.705-.065 3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473 3.775 3.775 0 0 1-1.168-5.041 10.716 10.716 0 0 0 7.781 3.945 3.813 3.813 0 0 1-.097-.861 3.773 3.773 0 0 1 3.774-3.773 3.77 3.77 0 0 1 2.756 1.191 7.602 7.602 0 0 0 2.397-.916 3.789 3.789 0 0 1-1.66 2.088 7.55 7.55 0 0 0 2.168-.594 7.623 7.623 0 0 1-1.884 1.953z" />
                            </svg>
                        </a>
                    </span>

                    <span className="tw-mx-2">
                        <a
                            href="mailto:palonponjovertlota@gmail.com"
                            title="Twitter Profile"
                        >
                            <svg
                                className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-gray-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-3 tw-h-12 tw-w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
