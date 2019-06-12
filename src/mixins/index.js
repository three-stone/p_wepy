import wepy from 'wepy'
import { preventDoubleTap } from 'utils/common.js'

export default class mixins extends wepy.mixin {
  onLoad () {
    this._preventDoubleTap = preventDoubleTap.bind(this)
  }

  onHide () {
    // showLoading('close')
  }

  onUnload () {
    // showLoading('close')
  }
}
