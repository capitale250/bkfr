import { jwtDecode } from 'jwt-decode';
import AuthToken from './authToken';
export interface user{
  names: string,
  email:string,
  user_id: string,
  id: string,
  role: string,
}
export interface userInfo extends  user{
  isDatamanager: boolean,
  isSuperAdmin:boolean,
}

export const getLoggedUserInfo = () => {
  const token = AuthToken.getToken();
  if (!token) {
    return window.location.assign('/');
  }
  const user:any= jwtDecode(token);
  console.log(user)
  const userInfo = {
    ...user,
  }
  return userInfo;
};
