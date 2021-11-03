// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {

  const [cars, setCars] = useState({red: false, blue: false, yellow: false})
  const [signal, setSignal] = useState({color: 'red'})

  function moveCar(car, side) {
    setCars({...cars, [car]: side})
  };

  function changeSignal(signalColor) {
    setSignal({...signal, color: signalColor})
     };

    const context = {
      ...cars, ...signal,
      moveCar,
      changeSignal,
    };


    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );

  };


export default Provider;
