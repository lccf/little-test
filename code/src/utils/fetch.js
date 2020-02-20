import axios from 'axios';

//与服务器的对接的封装（异常的处理）
export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {

      },
      timeout: 12000
    });
    instance(options)
      .then(response => {
        const res = response.data;
        // 服务器的标准有问题，存在retCode不存在的情况
        resolve(res.result);
      })
      .catch(error => {
        // alert('当前网络不可用，请检查您的网络');
        reject(error);
      });
  });
}
