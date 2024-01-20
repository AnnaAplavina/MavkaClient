import { useState } from 'react';
import jwt_decode from 'jwt-decode';

function useToken() {

  function getToken() {
    const userToken = localStorage.getItem('token');
    return userToken && userToken
  }

  const [token, setToken] = useState(getToken());
  const userId = useState(token !== null ? getUserId(token) : null);

  function saveToken(userToken: string) {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  function getUserId(token: string): string | null {
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.id;
    } catch (error) {
      console.log('Ошибка при декодировании токена', error);
      return null;
    }
  }

  return {
    setToken: saveToken,
    token,
    removeToken,
    userId,
  }

}

export default useToken;