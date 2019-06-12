import khsy from 'internal/khsy.js'

/**
 * [ApiGetPersonalInfo description] 获取用户的个人信息
 */
export function ApiGetPersonalInfo () {
  return {
    url: '',
    method: 'post',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}

/**
 * [ApiGetUserLoginToken description] 获取用户的token
 * @param {Object} data [description] { code, raw_data, signature, encrypted_data, iv }
 * @response data: { token: {[ String ]} }
 */
export function ApiGetUserLoginToken (data) {
  return {
    url: '/auth/login', // 例如登录接口为auth/login
    data,
    method: 'post',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}

/**
 * [ApiGetUserOpenId description] 获取用户的openId
 * @param {Object} data [description] { code }
 * @response data: { 获取用户的openId: {[ String ]} }
 */
export function ApiGetUserOpenId (data) {
  return {
    url: khsy.$request_url + '',
    data,
    method: 'post',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}
