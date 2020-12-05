import urlConstant from '../constants/url';
const initData = () => {
  return fetch(urlConstant).then((response) => response.json());
};

export default initData;
