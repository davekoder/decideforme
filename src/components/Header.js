import React from "react";

const Header = (props) => (
  <div className='header'>
    <div className='header__container'>
      <h1 className='header__title'>{props.title}</h1>
      {props.title && <h2 className='header__subtitle'>{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: "DecideForMe App",
};

export default Header;
