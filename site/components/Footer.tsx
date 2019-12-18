import React from 'react'
import Logo from '@components/Logo'
import { social as socialLinks } from '@constants/links'

const Footer: React.FC = (): React.ReactElement => (
  <footer className="tw-bg-blue-500 tw-text-white">
    <div className="tw-text-center lg:tw-w-1/2 tw-p-5 lg:tw-p-32 tw-mx-auto">
      <div className="tw-mb-5 tw-inline-block">
        <Logo variant="white" />
      </div>

      <p className="tw-mb-10 lg:tw-text-lg tw-text-gray-400">
        Anything is possible, If you find the time and effort for it.
      </p>

      <div className="tw-mb-10">
        <span className="tw-mx-1 lg:tw-mx-2">
          <a
            href={socialLinks.github}
            title="My Github profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-3 tw-h-12 tw-w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z" />
            </svg>
          </a>
        </span>

        <span className="tw-mx-1 lg:tw-mx-2">
          <a
            href={socialLinks.linkedin}
            title="My Linkedin profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-2 tw-h-12 tw-w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -2 20 30"
            >
              <path d="M5 3c0 1.1-.7 2-2 2-1.2 0-2-.9-2-1.9C1 2 1.8 1 3 1s2 .9 2 2zM1 19h4V6H1v13zM14.6 6.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z" />
            </svg>
          </a>
        </span>

        <span className="tw-mx-1 lg:tw-mx-2">
          <a
            href={socialLinks.twitter}
            title="My Twitter profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-3 tw-h-12 tw-w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562 3.779 3.779 0 0 1-3.526-2.621 3.858 3.858 0 0 0 1.705-.065 3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473 3.775 3.775 0 0 1-1.168-5.041 10.716 10.716 0 0 0 7.781 3.945 3.813 3.813 0 0 1-.097-.861 3.773 3.773 0 0 1 3.774-3.773 3.77 3.77 0 0 1 2.756 1.191 7.602 7.602 0 0 0 2.397-.916 3.789 3.789 0 0 1-1.66 2.088 7.55 7.55 0 0 0 2.168-.594 7.623 7.623 0 0 1-1.884 1.953z" />
            </svg>
          </a>
        </span>

        <span className="tw-mx-1 lg:tw-mx-2">
          <a
            href={socialLinks.dribbble}
            title="My Twitter profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-3 tw-h-12 tw-w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.565,7.421C8.207,5.007,6.754,3.038,6.648,2.893C4.457,3.929,2.822,5.948,2.311,8.38  C2.517,8.384,5.793,8.423,9.565,7.421z M10.543,10.061c0.102-0.033,0.206-0.064,0.309-0.094c-0.197-0.447-0.412-0.895-0.637-1.336  C6.169,9.843,2.287,9.755,2.15,9.751c-0.003,0.084-0.007,0.166-0.007,0.25c0,2.019,0.763,3.861,2.016,5.252l-0.005-0.006  C4.154,15.247,6.304,11.433,10.543,10.061z M5.171,16.194V16.19c-0.058-0.045-0.12-0.086-0.178-0.135  C5.099,16.14,5.171,16.194,5.171,16.194z M8.118,2.372C8.111,2.374,8.103,2.376,8.103,2.376c0.006-0.002,0.014-0.002,0.014-0.002  L8.118,2.372z M15.189,4.104C13.805,2.886,11.99,2.143,10,2.143c-0.639,0-1.258,0.078-1.852,0.221  c0.12,0.16,1.595,2.119,2.938,4.584C14.048,5.839,15.167,4.136,15.189,4.104z M10,19.2c-5.08,0-9.199-4.119-9.199-9.199  C0.8,4.919,4.919,0.8,10,0.8c5.082,0,9.2,4.119,9.2,9.201C19.2,15.081,15.082,19.2,10,19.2z M11.336,11.286  c-4.611,1.607-6.134,4.838-6.165,4.904c1.334,1.041,3.006,1.666,4.828,1.666c1.088,0,2.125-0.221,3.067-0.621  c-0.116-0.689-0.573-3.096-1.679-5.967C11.371,11.274,11.354,11.28,11.336,11.286z M11.69,8.12c0.184,0.373,0.358,0.754,0.523,1.139  c0.059,0.135,0.114,0.272,0.17,0.406c2.713-0.342,5.385,0.238,5.473,0.256c-0.019-1.863-0.686-3.572-1.787-4.912  C16.051,5.032,14.79,6.852,11.69,8.12z M12.861,10.905c1.031,2.836,1.449,5.142,1.529,5.611c1.764-1.191,3.018-3.08,3.367-5.27  C17.601,11.196,15.401,10.499,12.861,10.905z" />
            </svg>
          </a>
        </span>

        <span className="tw-mx-1 lg:tw-mx-2">
          <a href={`mailto:${socialLinks.email}`} title="Send me an Email">
            <svg
              className="tw-fill-current tw-text-white tw-inline-block tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-cursor-pointer tw-rounded-full tw-p-3 tw-h-12 tw-w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z" />
            </svg>
          </a>
        </span>
      </div>

      <p className="tw-mb-5 tw-text-gray-400 tw-text-sm">
        Handcrafted with
        <svg
          className="tw-fill-current tw-text-red-500 tw-inline-block tw-mx-1 tw-h-5 tw-w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0  c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z" />
        </svg>
        by me &copy; {new Date().getFullYear()}
      </p>

      <span className="tw-w-full tw-flex tw-justify-center tw-items-center">
        <p className="tw-text-sm tw-text-gray-400 tw-mr-1">Made with</p>

        <a
          href="https://tailwindcss.com"
          title="Tailwind CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="tw-fill-current tw-text-gray-400 tw-h-10"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"
            ></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
