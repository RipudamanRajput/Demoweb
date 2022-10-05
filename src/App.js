
import './App.css';
import './Media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Panel from './Panel/Panel';
import { useEffect } from 'react';
AOS.init();
function App() {
  
  return (
    <Panel />
  );
}

export default App;
