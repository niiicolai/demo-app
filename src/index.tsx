import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Progress from './components/Progress';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Progress 
      portOfLoading='Karlshamn'
      portOfDischarge='Klaipeda'
      departureTime={new Date('2022-11-17 10:10:10 GMT+0100 (Centraleuropæisk normaltid)')}
      arrivalTime={new Date('2022-11-20 00:30:10 GMT+0100 (Centraleuropæisk normaltid)')}
      configuration={{
        width: 520,
        height: 300,
        padding: 20,
        pin: {
            width: 45,
            height: 35,
            color: '#fff',
            backgroundColor: '#345370',
            containerHeight: 70
        },
        circles: {
            max: 8,
            radius: 20,
            endRadius: 35,
            inactiveColor: '#83a2c0',
            activeColor: '#345370'
        }
      }}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
