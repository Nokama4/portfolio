/*
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';


/*
 * Local import
 */


/*
 * Code
 */
const Menu = () => (
  <div id="menu">
    <div id="menu-link">
      <NavLink
        className="link"
        activeClassName="link--active"
        to="/About"
      >
        #About
      </NavLink>
      <NavLink className="link" activeClassName="link--active" to="/Skills">#Skills</NavLink>
      <NavLink className="link" activeClassName="link--active" to="/Contact">#Contact</NavLink>
    </div>
    <div id="menu-name">
      Carine Dahomais
    </div>
  </div>
);


/*
 * Export default
 */
export default Menu;
