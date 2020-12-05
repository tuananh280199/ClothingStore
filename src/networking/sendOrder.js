import urlConstant from '../constants/url';
const sendOrder = (token, arrayDetail) => {
  const apiCard = 'cart.php';
  const url = `${urlConstant}${apiCard}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token, arrayDetail}),
  }).then((res) => res.text());
};

export default sendOrder;
