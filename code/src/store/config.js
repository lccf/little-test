/**
 * Created by Harry on 17/7/24.
 * 全局变量入口
 */
global.GETENV = function() {
  let ROOT_API = {};
  switch (process.env.NODE_ENV) {
    case 'dev':
      ROOT_API.ROUTER='dev';
      ROOT_API.base_uri = 'http://mock.seek.wiki';
      break;
    case 'qa':
      ROOT_API.ROUTER='qa';
      ROOT_API.base_uri = 'http://mock.seek.wiki';
      break;
    case 'prod':
      ROOT_API.ROUTER='prod';
      ROOT_API.base_uri = 'http://mock.seek.wiki';
      break;
  }

  return ROOT_API;
}

global.CLEARCONSOLE = function() {
  console.log('====== Environment [' + process.env.NODE_ENV + '] CLEARCONSOLE ======')
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {}
  };
}
global.ROOT_API = GETENV();
