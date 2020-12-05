import urlConstant from '../constants/url';
const getOrderHistory = (token) => {
  const apiOrderHistory = 'order_history.php';
  const url = `${urlConstant}${apiOrderHistory}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token}),
  }).then((res) => res.json()); //nếu user chưa order thì sẽ res.json sẽ null.làm tiếp check null
};

export default getOrderHistory;
