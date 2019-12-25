import React from 'react'
import Head from 'next/head'
import APP_URL from '@constants/links'
import { inServer } from '@helpers/utils'

interface Props {
  title?: string
  description?: string
  image?: string
}

const SEO: React.FC<Props> = ({
  title = 'JovertPalonpon',
  description = 'My personal website where I showcase my work as a professional.',
  image = 'https://s3-ap-southeast-1.amazonaws.com/jovertpalonpon.me/projects/jovertpalonpon.me/1.png'
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:site_name" content="JovertPalonpon" />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="article" />
    <meta
      name="og:url"
      content={inServer() ? APP_URL : window.location.toString()}
    />
    <meta name="og:image" content={image} />
    <meta name="twitter:site" content="@JovertPalonpon" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Head>
)

export default SEO
