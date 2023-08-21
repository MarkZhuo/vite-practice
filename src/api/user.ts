import request from '@/api/request';

/**
 * 登录用户
 * */
export const userLogin = (data: any) => request.post('/user/login', data);

// export const userLogin = (data) => {
//   return request({
//     method: 'POST',
//     url: '/user/login',
//     data
//   });
// };

/**
 * 获取用户信息
 * */
export const userinfo = () => request.get('/user/info');
