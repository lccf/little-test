import {
  fetch
} from '../utils/fetch';

import store from '../store/index'

export function GetGoodsInfo(data) {
  return fetch({
    url: store.getters.base_uri+'/good/info',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params:{}
  })
}

export function GetAddressInfo(data) {
  return fetch({
    url: store.getters.base_uri+'/address/info',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params:{}
  })
}
