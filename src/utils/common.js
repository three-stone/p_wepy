import wepy from 'wepy'
import { ApiGetUserLoginToken, ApiGetUserOpenId } from 'apis/app.js'
import khsy from 'internal/khsy'

export function login () {
  return new Promise(async (resolve, reject) => {
    const { code } = await wepy.login()
    try {
      const { rawData, iv, signature, encryptedData } = await wepy.getUserInfo()
      const requestData = Object.assign({}, { code }, { raw_data: rawData, iv, signature, encrypted_data: encryptedData })
      const { token } = await wepy.request(ApiGetUserLoginToken(requestData))
      await wepy.setStorage({ key: khsy.$token_key, data: token })
      console.log(`The token was successful in ${new Date().getTime()}`)
      resolve()
    } catch (err) {
      reject(err)
      throw new Error('Unable to get userinfo')
    }
  })
}

// 获取未授权用户的openID
export function getOpenId () {
  // eslint-disable-next-line
  wx.login({
    Success(res) {
      // eslint-disable-next-line
      wx.request({
        ...ApiGetUserOpenId({ code: res.code }),
        success(res) {
          const openId = res.data.data.openId
          // eslint-disable-next-line
          wx.setStorageSync(khsy.$open_id, openId)
        }
      })
    }
  })
}

// 防止多次点击
export function preventDoubleTap (key = '__preventTap', time = 800) {
  const timeoutName = `${key}Timeout`
  if (typeof this[key] !== 'boolean') {
    this[key] = false
  }
  return new Promise((resolve, reject) => {
    if (this[key]) {
      reject(this[timeoutName])
    } else {
      this[key] = true
      this[timeoutName] = setTimeout(() => {
        this[key] = false
        this.$apply()
      }, time)
      resolve(this[timeoutName])
    }
  })
}

// 获取手机信息
export function getPhoneInfo () {
  return new Promise((resolve, reject) => {
    wepy.getSystemInfo()
      .then(res => {
        resolve(res)
      })
  })
}

// 获取单个容器尺寸
export function getContainerSize (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      wepy.createSelectorQuery('.').select(name).boundingClientRect((rect) => {
        resolve(rect)
      }).exec()
    }, 500)
  })
}

// 获取所有容器尺寸
export function getContainerSizeAll (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      wepy.createSelectorQuery('.').selectAll(name).boundingClientRect((rect) => {
        resolve(rect)
      }).exec()
    }, 500)
  })
}

// 提示框
export function showTost (txt) {
  wepy.showToast({
    title: txt,
    icon: 'none',
    mask: true,
    duration: 2000
  })
}
// loading
export function showLoading (txt) {
  wepy.showLoading({
    title: 'loading',
    icon: 'loading',
    mask: true,
  })
}