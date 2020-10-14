import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import './App.css';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/new" component={StreamCreate} />
          <Route exact path="/edit" component={StreamEdit} />
          <Route exact path="/delete" component={StreamDelete} />
          <Route exact path="/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
