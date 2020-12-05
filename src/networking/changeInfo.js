import urlConstant from '../constants/url';
const changeInfo = (token, name, phone, address) => {
  const apiChangeInfo = 'change_info.php';
  const url = `${urlConstant}${apiChangeInfo}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token, name, phone, address}),
  });
};

export default changeInfo;
