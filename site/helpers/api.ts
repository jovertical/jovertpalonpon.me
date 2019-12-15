import fetch from 'unfetch'

interface ApiResponse {
  status: number
  body: any
}

/**
 * Convert the parameters into a query string
 */
const queryString = (params: Record<string, any>) => {
  return (
    '?' +
    Object.entries(params)
      .map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1]))
      .join('&')
  )
}

/**
 * Sends a request.
 */
const request = (path: string, init: RequestInit): Promise<ApiResponse> => {
  const { headers, ...config } = init

  return fetch(process.env.API_URL + '/' + path.replace(/^\/|\/$/g, ''), {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  }).then(async res => ({
    status: res.status,
    body: res.ok ? await res.json() : {}
  }))
}

/**
 * A wrapper function to send a GET request.
 */
export const get = (
  path: string,
  data?: Record<string, any>,
  init?: RequestInit
): Promise<ApiResponse> => request(path + queryString(data ?? {}), { ...init })

/**
 * A wrapper function to send a POST request.
 */
export const post = (
  path: string,
  data?: Record<string, any>,
  init?: RequestInit
): Promise<ApiResponse> => {
  return request(path, {
    method: 'POST',
    body: JSON.stringify(data),
    ...init
  })
}
