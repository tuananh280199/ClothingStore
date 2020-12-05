import urlConstant from '../constants/url';
const getListProductByCate = (idType, page) => {
  const apiProductByType = `product_by_type.php?id_type=${idType}&page=${page}`;
  const apiGetCollection = `get_collection.php?page=${page}`;
  const urlProductByType = `${urlConstant}${apiProductByType}`;
  const urlGetCollection = `${urlConstant}${apiGetCollection}`;
  let url;
  if (idType !== 'COLLECTION') {
    //COLLECTION id tự mình tạo ra trong Collecion.js khi truyền sang ListProduct.js
    url = urlProductByType;
  } else {
    url = urlGetCollection;
  }
  return fetch(url).then((response) => response.json());
};

export default getListProductByCate;
