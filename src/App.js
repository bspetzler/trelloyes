import React, { Component } from 'react';
import './App.css';

import List from './List';
import STORE from './STORE';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  // 'class App extends Component {' if import React, { Component } from 'react'; is used
  static defaultProps = { // creates empty object for default props 'store'
    store: {
      lists: [],
      allCards: {},
    }
  };

  state = STORE

  handleDeleteItem = (item) => {
    const {lists, allCards} = this.state;
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== item)
    }));

    const newCards = omit(allCards, item)

    this.setState({
      lists: newLists,
      allCards: newCards
    })
    console.log(this.state)
  }

  handleAddCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
	return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  
  //addRandom = {this.handleAddRandom};

  render() {
    console.log(this.state);

    const store = this.state; // makes {store}, this will be the empty object above if no store object is passed in
    //console.log(store)
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => ( //fills empty array 'list' with in empty object 'store' with List
            <List // from List function in List.js, 
              key={list.id} // every element must have a key, this key is the id of the element
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDelete = {this.handleDeleteItem}
              onAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}


export default App;
