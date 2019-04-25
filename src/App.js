import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import List from './routes/List';
import Add from './routes/Add';
import Thanks from './routes/Thanks';




class App extends Component {
  render() {
    return (

      <BrowserRouter>

      <div>

          <Route path='/' component={ Home } exact/>
          <Route path='/List' component={ List } />
          <Route path='/Add' component={ Add } />
          <Route path='/Thanks' component={ Thanks } />

      </div>

      </BrowserRouter>
    );
  }
}

export default App;
