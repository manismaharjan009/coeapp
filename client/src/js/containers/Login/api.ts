import urls from '../../config/urls';
import { handleApiError, getPostParams, getGetParams } from "../../utils";


export const fetchEmployeeListApi = () => {
  const url = `${urls.corsUrl}${urls.employeeList}`;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json());
}

export const loginApi = ({username, password}: {username: string, password: string}) => {
  const url = `${urls.corsUrl}${urls.login}?call=login&userid=${username}&password=${password}`;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json());

  // if(username === 'manishm' && password === '12345') {
  //   return 'user';
  // }

  // if(username === 'admin' && password === '12345') {
  //   return 'admin';
  // }

  // if (username === 'moderator' && password === '12345') {
  //   return 'moderator';
  // }

  // return false;
}

/* NOTE
  https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141
*/