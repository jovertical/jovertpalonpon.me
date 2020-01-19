import React from 'react'
import { NextPage } from 'next'
import Button from '@frontend/components/Button'
import Link, { ExternalLink } from '@frontend/components/Link'
import Text from '@frontend/components/Text'
import { social as socialLinks } from '@frontend/constants/links'

interface Props {
  statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <div className="w-4/5 lg:w-1/3 text-center lg:text-left">
        <Text variant="h4" weight="bold" className="mb-2">
          {statusCode === 404
            ? 'You have come too far my friend'
            : 'Something went wrong'}
        </Text>
        <Text className="mb-8">
          {statusCode === 404
            ? 'Let me help you in your journey, What do you need?'
            : `Something went wrong on our side, just chill for now!`}
        </Text>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
          {statusCode === 404 ? (
            <>
              <Link href="/blog" variant="custom">
                <Button
                  variant="primary"
                  className="mb-4 lg:mb-0 lg:mr-4"
                >
                  Discover
                </Button>
              </Link>
              <Link variant="custom">
                <Button variant="secondary">Bring Me Home</Button>
              </Link>
            </>
          ) : (
              <ExternalLink
                href={`mailto:${socialLinks.email}`}
                variant="custom"
                title="Send me an Email"
              >
                <Button>Contact Me</Button>
              </ExternalLink>
            )}
        </div>
      </div>
      <div className="hidden lg:block w-1/3">
        <img
          src={
            statusCode === 404
              ? '/svg/road_sign_mfpo.svg'
              : '/svg/server_down_s4lk.svg'
          }
          alt="Server Down"
        />
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }): Props => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
