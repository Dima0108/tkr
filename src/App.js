import React from 'react';
import addNotification from 'react-push-notification';
import logo from "./images/logo.png"

function App() {
  const clickTONotify = () => {
    addNotification({
      title: 'Вам уведомления',
      message: 'Александр выставил новый пост',
      duration: 4000,
      icon: logo,
      native: true,
      onClick: () => window.location = "https://www.instagram.com/shankin_alexandr/",
    });
  }
  return (
    <div className="App">
      <button onClick={clickTONotify} style={{margin: '100px'}}>
      Нажмите, чтобы уведомить
      </button>
    </div>
  );
}

export default App;
