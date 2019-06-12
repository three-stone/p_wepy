// 公共api可以放在这里
/**
 * [getPeople description] 获取预约用户
 */
export function GetPeople (data) {
  return {
    url: 'appUser/family/list/' + data,
    method: 'get',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}

/**
 * [GetOrg description] 获取预约机构
 */
export function GetOrg (data) {
  return {
	  url: 'reservationController/getServiceOrganizationList',
	  method: 'get',
	  data,
	  header: {
	    'content-type': 'application/x-www-form-urlencoded' // 默认值
	  }
  }
}
/**
 * [GetServicer description] 获取服务人(医生)
 */
export function GetServicer (data) {
  return {
    url: 'staffManage/listStaff',
    method: 'get',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}

/**
 * [GetDate description] 获取预约日期
 */
export function GetDate (data) {
  return {
    url: 'his/order/serviceList',
    method: 'post',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}

/**
 * [GetTime description] 获取预约时段
 */
export function GetTime (data) {
  return {
    url: 'his/order/serviceList',
    method: 'post',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}

/**
 * [GetBanner description] 获取广告banner
 */
export function GetBanner (data) {
  return {
    url: 'imageAd/forSp',
    method: 'get',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}


/**
 * [GetServiceCard description] 获取服务卷
 */
export function GetServiceCard (data) {
  return {
    url: 'appUser/assets/assetsByMemberAndService',
    method: 'get',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}


/**
 * [GetAmountCard description] 金额卡
 */
export function GetAmountCard (data) {
  return {
    url: 'appUser/assets/usableAssetsList',
    method: 'get',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}

/**
 * [GetMsg description] 获取推送消息
 */
export function GetMsg (data) {
  return {
    url: 'memberMsg/servicePlanMsg/fetchLatest',
    method: 'get',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}
/**
 * [GetSingleCode description] 获取预约code
 */
export function GetSingleCode (data) {
  return {
    url: 'singleServiceBusiness/getSingleServiceByTypeAndSourceId',
    method: 'get',
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    }
  }
}