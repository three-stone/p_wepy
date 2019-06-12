import base from './base.js'

const khsy = {
  base,
  // $
  $env: '__develop__', // 当前环境
  $request_url: 'http://139.159.148.80:8091', // 请求接口   
  $version: '0.0.1',
  $app_id: 1, // 未来可能会用于区别客户端；例如：1代表小程序入口
  $token_key: 'TOKEN_KEY'
}

export default khsy
