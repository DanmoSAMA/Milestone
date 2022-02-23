import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpRes } from '../../shared/http';
import { BE_DOMAIN } from '../constants/domain';

// 记录对哪些url的请求正在进行中, 若上一次请求未完成则不进行下一次请求
const requestSet = new Set<string>();

export async function request<T>(
  config: AxiosRequestConfig
): Promise<HttpRes<T | null>> {
  // 判断两个请求是否完全相同的 key
  // 后置! 使null和undefined类型可以赋值给其他类型并通过编译，表示该变量值可空
  const key =
    JSON.stringify(config.data) + config.url! + JSON.stringify(config.params);

  if (requestSet.has(key)) {
    // 已经有一个一样的请求在路上了, 啥都不做
    return {
      status: 400,
      msg: '请求过于频繁',
      data: null,
    };
  } else {
    requestSet.add(key);

    // 根据指定配置创建一个新的 axios
    const instance = axios.create({
      // 这里还有问题，设置了没用
      // baseURL: BE_DOMAIN,
      baseURL: 'http://127.0.0.1:8080',
      timeout: 60000,
    });

    // 暂时不使用拦截器 interceptors

    return new Promise<HttpRes<T | null>>((resolve, reject) => {
      instance(config)
        .then((res: AxiosResponse<HttpRes<T>>) => {
          if (res.data && res.data.status) {
            if (res.data.status !== 200) {
              alert(res.data.msg);
              resolve({ ...res.data, data: null });
            } else {
              resolve(res.data);
            }
          } else {
            console.log('# request then', { res });
            throw new Error('出错了');
          }
        })
        .catch((err: (Error & AxiosError) | null) => {
          // 归一化 err 为 string
          let errStr = '';

          if (!err) {
            console.error('# request !err', { err });
            errStr = '出错了';
          } else if ((err as AxiosError).response) {
            // 是出错了的 http 请求
            console.error('# request AxiosError', { err });
            errStr = '出错了';
          } else if ((err as Error) instanceof Error) {
            errStr = err.message;
          } else {
            console.error('# _request unknown err', { err });
            errStr = '出错了';
          }

          resolve({ data: null, status: 400, msg: errStr });
        })
        .finally(() => {
          requestSet.delete(key);
        });
    });
  }
}
