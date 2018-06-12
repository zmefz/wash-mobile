class Api {
  domain = 'https://time-to-wash-ui.herokuapp.com'
  apiUrl = `${this.domain}/api/resource`

  cookUrl(path) {
    return `${this.apiUrl}${path}`
  }

  post(path, data) {
    return this.request(path, {
      method: 'POST',
      body: data,
    })
  }

  get(path) {
    return this.request(path)
  }

  put(path, data) {
    return this.request(path, {
      method: 'PUT',
      body: data,
    })
  }

  delete(path, data) {
    return this.request(path, {
      method: 'DELETE',
      body: data,
    })
  }

  request(path, options = {}) {
    const url = this.cookUrl(path)
    const defaultOptions = this._getOptions()

    return this._request(url, {
      ...defaultOptions,
      ...options,
    })
  }

  _request(url, options) {
    return fetch(url, options)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        if (response.status === 401) {
          // TODO: clean auth data
          throw new Error('Unauthorized user')
        }

        return response
          .json()
          .then(json => {
            throw json.error
          })
          .catch(error => {
            throw error || response.statusText
          })
      })
      .catch(err => {
        throw err
      })
  }

  _getOptions() {
    const headers = this._getHeaders()
    return {
      method: 'GET',
      headers,
    }
  }

  _getHeaders() {
    const headers = new Headers()
    // TODO: add needed headers
    // headers.append(headerName, headerValue)
    return headers
  }
}

export default new Api()
