import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';


export default function Selects() {
  const [showNavExternal2, setShowNavExternal2] = useState(false);

  return (
    <>
      <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
        </Menu>
    </>
  );
}

