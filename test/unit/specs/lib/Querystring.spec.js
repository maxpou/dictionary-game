import queryString from '../../../../src/lib/querystring'

describe('querystring', () => {
  it('should retreive correct query string', () => {
    const emptyUrl = 'http://localhost:8080/'
    const satisfyUrl = 'http://localhost:8080/#/?auth=secret'
    const emptyQueryUrl = 'http://localhost:8080/#/?auth='

    expect(queryString('auth', emptyUrl)).to.be.null
    expect(queryString('auth', satisfyUrl)).to.equal('secret')
    expect(queryString('auth', emptyQueryUrl)).to.equal('')
  })
})
