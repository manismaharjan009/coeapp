// reference: https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
export const getViewport = () => {
  let element = window;
  let propPrefix = "inner";
  if (!("innerWidth" in window)) {
    propPrefix = "client";
    // @ts-ignore
    element = document.documentElement || document.body;
  }
  return {
    // @ts-ignore
    width: element[`${propPrefix}Width`],
    // @ts-ignore
    height: element[`${propPrefix}Height`]
  };
};

export const getPostParams = ( payload : any) => ({
  method: 'POST',
  body: JSON.stringify(payload),
  // credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPutParams = (payload: any) => ({
  method: 'PUT',
  body: JSON.stringify(payload),
  // credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getGetParams = () => ({
  // credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDeleteParams = () => ({
  method: 'DELETE',
  // body: JSON.stringify(payload),
  // credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const handleApiError = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/* http://2ality.com/2015/08/es6-map-json.html */
export const strMaptoObj = (strMap: any) => {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

//https://gitlab.com/d3byte/booker/tree/master
import localforage from 'localforage';
export default class CacheManager {

  writeData = (key:any, data:any) => localforage.setItem(key, data)

  readData = (key:any) => localforage.getItem(key)

  removeData = (key:any) => localforage.removeItem(key)

  clear = () => localforage.clear()
}





