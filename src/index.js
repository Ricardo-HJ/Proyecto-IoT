import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LastReading } from './App.js';
import reportWebVitals from './reportWebVitals';

// SideMenu component
const SideMenu = () => (
  <div className="side-menu">
    <img src={process.env.PUBLIC_URL + '/home.png'} alt="Home" className="icon-home"></img>
    <img src={process.env.PUBLIC_URL + '/Mov.png'} alt="Movimiento" className="icon-mov"></img>
    <img src={process.env.PUBLIC_URL + '/Peso.png'} alt="Peso" className="icon-peso"></img>
    <img src={process.env.PUBLIC_URL + '/Sonido.png'} alt="Sonido" className="icon-Sonido"></img>
    <img src={process.env.PUBLIC_URL + '/Temp.png'} alt="Temperatura" className="icon-Temp"></img>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <table className="main-container">
      <tr>
        <SideMenu />
      </tr>
      <tr>
          <table>
            <tr className="blocks-container">  
              <td className="block">
                <div className="block-title">
                <img src={process.env.PUBLIC_URL + '/Icono de peso.png'} alt=""></img>
                <p>Sensor de<br/>peso</p>
                </div>
                <div className='block-info'>
                <h1><LastReading CompID='1'/></h1>
                  <div>
                    <h2>0.94 kg</h2>
                    <p>Mas desde el ultimo mes</p>
                  </div>
                </div>
              </td>
              <td className="block">
                <div className="block-title">
                <img src={process.env.PUBLIC_URL + '/Icono de luz.png'} alt=""></img>
                <p>Sensor de<br/>luz</p>
                </div>
                <div className='block-info'>
                <h1><LastReading CompID='9'/></h1>
                  <div>
                    <h2>-12lm</h2>
                    <p>Que el promedio a esta hora</p>
                  </div>
                </div>
              </td>
              <td className="block">
                <div className="block-title">
                <img src={process.env.PUBLIC_URL + '/Icono sonido.png'} alt=""></img>
                <p>Sensor de<br/>sonido</p>
                </div>
                <div className='block-info'>
                <h1><LastReading CompID='5'/></h1>
                  <div>
                    <h2>{''}</h2>
                    <p>Hay mucho ruido</p>
                  </div>
                </div>
              </td>
              <td className="block">
                <div className="block-title">
                <img src={process.env.PUBLIC_URL + '/Icono mov.png'} alt=""></img>
                <p>Sensor de<br/>movimiento</p>
                </div>
                <div className='block-info'>
                  <h3><LastReading CompID='7'/></h3>
                  <div>
                    <p>Desde hace 15 min</p>
                  </div>
                </div>
              </td>
              <td className="block">
                <div className="block-title">
                <img src={process.env.PUBLIC_URL + '/Icono temp.png'} alt=""></img>
                <p>Sensor de <br/>temperatura</p>
                </div>
                <div className='block-info'>
                  <h1><LastReading CompID='3'/></h1>
                  <div>
                    <h2>{''}</h2>
                    <p>Temperatura mas alta del dia</p>
                  </div>
                </div>
              </td>
            </tr>
          </table>
      </tr>
    </table>
  </React.StrictMode>
);

reportWebVitals();
