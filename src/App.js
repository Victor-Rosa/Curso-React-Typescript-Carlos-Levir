
import { useEffect, useState } from 'react';

import api from './services/api';



function App() {

  const [username, setUsername] = useState('Victor-Rosa');
  const [userData, setUserData] = useState({});

  useEffect(() => {

    const localStorageUserData = localStorage.getItem('@reactapp:GITHUB_USER_DATA')

    setUserData(JSON.parse(localStorageUserData))


  }, [])

  async function getUserGithubData() {

    const { data } = await api.get(username);

    localStorage.setItem('@reactapp:GITHUB_USER_DATA', JSON.stringify(data))

    setUserData(data);
  }

  

  return (
    <div>
     <input type="text"
      value={username} 
      onChange={(event) => setUsername(event.target.value)}/>
      <button onClick={getUserGithubData}>Pesquisar Usuário</button>
      <img src={userData.avatar_url}></img>
      <div>Ocupação: {userData.bio}</div>
      <div>Nome: {userData.name}</div>
      <div>localização: {userData.location}</div>
    </div>
  );

  
}

export default App;
