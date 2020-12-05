import urlConstant from '../constants/url';
const signIn = (email, password) => {
  const apiLogin = 'login.php';
  const url = `${urlConstant}${apiLogin}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({email, password}),
  });
};

export default signIn;
