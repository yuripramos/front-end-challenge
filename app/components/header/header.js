import React from 'react';
import Button from './button/Button.js';
import style from './style.scss';

const Header = (props) => {
  return (
    <div>
      <h1>O Destino</h1>
      <p className={style.mainInstructions}>
        Clique no botão Iniciar e selecione uma carta por vez.<br />
        Boa sorte!
      </p>
      <Button start={props.start} />
    </div>
  );
};

export default Header;
