import urlConstant from '../constants/url';
const checkLogin = (token) => {
  const apiCheckLogin = 'check_login.php';
  const url = `${urlConstant}${apiCheckLogin}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token}),
  });
};

export default checkLogin;
