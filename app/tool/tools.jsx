/**
 * 数据请求 fetch
 * create by 2017-06
 * url: 请求地址
 * successCallback: 成功回调
 * failCallback: 失败回调
 * 如果请求一个XML格式文件，则调用response.text。
 * 如果请求图片，使用response.blob方法。
 */

let httpRequest = {
  //Get 请求
  fetchGet: (url, params, successCallback, failCallback) => {
    // 拼接参数
    url += "?key=" + Math.random() + "";

    if (params) {
      // Object.keys 参数是对象，{}，如果是数组结构，那么默认的key值就是索引值，返回一个每项都是字符串的数组。
      let paramsBody = Object.keys(params)
        //reduce 将每一项依次执行回调函数，接受4个参数，初始值（数组），当前元素值，当前索引，调用reduce的数组
        .reduce((a, k) => {
          console.log(a);
          // encodeURIComponent 转换类型，以便更好识别。
          a.push(k + "=" + encodeURIComponent(params[k]));
          return a;
        }, []) // a 初始化是[]
        .join('&');
      url += "&" + paramsBody;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
          //这里选择Promise.reject，是因为容易扩展。抛出异常方法也不错，但是无法扩展，唯一益处在于便于栈跟踪。
          return Promise.reject('something went wrong!')
        }
        console.log(response);
        return response.json()
      })
      .then(data => successCallback(data))
      .catch(error => failCallback(error))
  },

  //Post 请求   check have problom
  fetchPost: (url, params, successCallback, failCallback) => {

    // 拼接参数
    let paramsBody = Object.keys(params)
      .reduce((a, k) => {
        a.push(k + "=" + encodeURIComponent(params[k]));
        return a;
      }, [])
      .join("&");
    console.log(paramsBody);
    // 发送请求
    fetch(url, {
      method: "POST",
      mode: 'no-cors', //cors是表明可否通过header跨域。
      credentials: 'credentials', //credentials表明是否在跨域的时候可以传数据，比如cookie等信息。
      cache: 'default',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/json charset=UTF-8'
      },
      body: paramsBody + "&key=46439e22fab73b5274b6e3c8db0f11fe"
    })
      .then(response => response.json())
      .then(data => successCallback(data))
      .catch(error => failCallback(error))
  }
}


export default httpRequest;
