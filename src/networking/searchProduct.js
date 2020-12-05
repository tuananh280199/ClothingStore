import urlConstant from '../constants/url';
const searchProduct = (key) => {
  const apiSearch = `search.php?key=${key}`;
  const url = `${urlConstant}${apiSearch}`;
  return fetch(url).then((response) => response.json());
};

export default searchProduct;
