import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Section from './component/Section';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [darkmode, SetDarkmode] = useState(false);
  const Darkmodetoggle = () => {
    SetDarkmode(!darkmode);
  }
  const [title, setTitle] = useState("Frontend Mentor | Todo app");
  function handleVisibilityChange() {
    
    if (document.hidden) {
      
      setTitle("Come back soon");
    } else {
      
      setTitle("Frontend Mentor | Todo app");
    }
  };
  useEffect(() => {
    
    document.addEventListener("visibilitychange", handleVisibilityChange);

    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    
    document.title = title;
  }, [title]);

  useEffect(() => {
    
    if(darkmode) {
      document.body.classList.add('body-light');
      document.body.classList.remove('body-dark');
    } else {
      document.body.classList.add('body-dark');  
      document.body.classList.remove('body-light');
    }
  
  }, [darkmode]);

  return (
    <div className="App">
      <Main darkMode={darkmode}
        toggleDarkMode={Darkmodetoggle} >
    
      </Main>
     <Section darkMode={darkmode}
        toggleDarkMode={Darkmodetoggle}  />
    </div>
  );
}

export default App;
