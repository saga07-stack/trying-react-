import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks1";
import SearchBar from "./SearchBar";
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <NavLogo/>
      <NavLinks/>
      <SearchBar/>

    </div>
  );
};

export default NavBar;
