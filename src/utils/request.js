import axios from 'axios'
import qs from 'qs'

const config = {
  timeout: 6000,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;application/json'
  }
}

function validResponse (response) {
  console.log('response', response)
  return new Promise((resolve, reject) => {
    let code = Number(response.code)
    if (code === 0) {
      resolve(response.data)
    } else {
      reject(response)
    }
  })
}

/**
 * 发起一个 GET 请求
 * @param {string} path 请求的path
 * @param {object} params 参数
 * @param {function} success 成功回调
 * @param {function} failure 失败回调
 */
export function requestGET (path = '', params = {}, success = ((e) => { }), failure = ((e) => { })) {
  request({
    path: path,
    method: 'get',
    data: params
  }).then((response) => {
    success(response)
  }).catch((error) => {
    failure(error)
  })
}

/**
 * 发起一个 POST 请求
 * @param {string} path 请求的path
 * @param {object} params 参数
 * @param {function} success 成功回调
 * @param {function} failure 失败回调
 */
export function requestPOST (path = '', params = {}, success = ((e) => { }), failure = ((e) => { })) {
  request({
    path: path,
    method: 'post',
    data: params
  }).then((response) => {
    success(response)
  }).catch((error) => {
    failure(error)
  })
}

function request (options = {}) {
  let domain = 'http://rawapi.agenric.cn'
  let {
    path,
    method,
    data
  } = options

  data = data || {}

  let req = {
    method: method || 'get',
    url: `${domain}` + path,
    timeout: config.timeout,
    headers: config.header
  }
  if (method === 'get') {
    req['params'] = data
  } else if (method === 'post') {
    req['data'] = qs.stringify(data)
  }

  return new Promise((resolve, reject) => {
    axios(req).then((response) => {
      validResponse(response.data).then((rawResponse) => {
        resolve(rawResponse)
      }).catch((rawResponse) => {
        reject(rawResponse)
      })
    }).catch((error) => {
      reject(error)
    })
  })
}
