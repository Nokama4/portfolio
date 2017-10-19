/*
 * Npm import
 */
import React from 'react';
import { Route } from 'react-router-dom';

/*
 * Local import
 */
import Menu from 'src/components/Menu';
import Picture from 'src/components/Picture';
import About from 'src/components/About';
import Skills from 'src/components/Skills';

/*
 * Code
 */
const App = () => (
  <div id="app">
    <div id="app-menu">
      <Menu />
    </div>
    <div id="app-picture">
      <Picture />
    </div>
    <div id="app-main">
      <Route path="/About" component={About} />
      <Route path="/Skills" component={Skills} />
    </div>
  </div>
);


/*
 * Export default
 */
export default App;
