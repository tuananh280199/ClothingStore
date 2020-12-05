import saveToken from '../AsyncStorage/saveToken';
import getToken from '../AsyncStorage/getToken';
import urlConstant from '../constants/url';

const getNewToken = (token) => {
  const apiRefreshToken = 'refresh_token.php';
  const url = `${urlConstant}${apiRefreshToken}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token}),
  }).then((res) => res.text());
};

const refreshToken = async () => {
  try {
    const token = await getToken();
    if (token === '' || token === 'TOKEN_KHONG_HOP_LE') {
      console.log('Chưa có token');
    }
    const newToken = await getNewToken(token);
    await saveToken(newToken);
  } catch (e) {
    console.log(e);
  }
};

export default refreshToken;
