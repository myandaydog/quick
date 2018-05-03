/* prod env */
// const apiLoc = ""
/* dev env */
const apiLoc = "http://120.79.132.25:8875";

const apiEp = {
  register: apiLoc + '/rest/v4/user/register', // 注册
  sendSmsCode: apiLoc + '/rest/v4/common/sendSmsCode', //发送验证码
  login: apiLoc + '/rest/v4/login/auth', //登录
  findPassWord: apiLoc + '/rest/v4/user/findByPassword', //找回密码 


};
export default apiEp
