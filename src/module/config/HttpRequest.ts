import request from './axiosConfig';

class HttpRequest {
  static get(url: string, params = {}, config = {}) {
    return request({
      url,
      method: 'GET',
      params,
      ...config,
    });
  }

  static post(url: string, data: any, config = {}) {
    return request({
      url,
      method: 'POST',
      data,
      ...config,
    });
  }

  static patch(url: string, data: any, config = {}) {
    return request({
      url,
      method: 'PATCH',
      data,
      ...config,
    });
  }

  static put(url: string, data: any, config = {}) {
    return request({
      url,
      method: 'PUT',
      data,
      ...config,
    });
  }

  static delete(url: string, config = {}) {
    return request({
      url,
      method: 'DELETE',
      ...config,
    });
  }
}

export default HttpRequest;
