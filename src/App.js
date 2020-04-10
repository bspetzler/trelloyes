import React, { Component } from 'react';
import './App.css';

import List from './List';

class App extends Component {
  // 'class App extends Component {' if import React, { Component } from 'react'; is used
  static defaultProps = { // creates empty object for default prop 'store'
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    console.log(this.props);
    const { store } = this.props // makes {store}, this will be the empty object above if no store object is passed in
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => ( //fills empty array 'list' with in empty object 'store' with List
            <List // from List function in List.js, 
              key={list.id} // every element must have a key, this key is the id of the element
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}


export default App;
