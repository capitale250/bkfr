export default class AuthToken {
  static setToken(token: string) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
