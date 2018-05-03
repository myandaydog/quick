
export function getPath (path) {
    path = path ? path.split('/') : ''
    path = path ? path[path.length - 1] : ''
  	return path
}

//获取网页url中指定参数的值
export function getUrlParam (name) {
  if(!name){
    return
  }
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}




 
        