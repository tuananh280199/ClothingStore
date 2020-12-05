import urlConstant from '../constants/url';
const register = (email, name, password) => {
  const apiRegister = 'register.php';
  const url = `${urlConstant}${apiRegister}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({email, name, password}),
  });
};

export default register;
