import type { NextApiRequest, NextApiResponse } from 'next'
import { createMocks } from 'node-mocks-http'
import handler from './../pages/api/hello'

test('hello api handler', () => {
  const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
    method: 'GET',
    url: '/api/hello',
  })

  handler(req, res)

  expect(res._getJSONData()).toEqual({ name: 'John Doe' })
})
