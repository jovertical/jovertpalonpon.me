import React from 'react'
import { NextPage } from 'next'
import Button from '@components/Button'
import Link, { ExternalLink } from '@components/Link'
import Text from '@components/Text'
import { social as socialLinks } from '@constants/links'

interface Props {
  statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => (
  <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-center tw-h-screen">
    <div className="tw-w-4/5 lg:tw-w-1/3 tw-text-center lg:tw-text-left">
      <Text variant="h4" weight="bold" className="tw-mb-2">
        {statusCode === 404
          ? 'You have come too far my friend'
          : 'Something went wrong'}
      </Text>
      <Text className="tw-mb-8">
        {statusCode === 404
          ? 'Let me help you in your journey, What do you need?'
          : `Something went wrong on our side, just chill for now!`}
      </Text>
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center lg:tw-justify-start">
        {statusCode === 404 ? (
          <>
            <Link href="/blog" variant="custom">
              <Button
                variant="primary"
                className="tw-mb-4 lg:tw-mb-0 lg:tw-mr-4"
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
    <div className="tw-hidden lg:tw-block tw-w-1/3">
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

Error.getInitialProps = ({ res, err }): Props => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
