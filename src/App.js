import React, { Component } from 'react';
import user from './images/profile.jpg';
import './App.css';
import reducer from './reducers/index.js';
import { createStore } from 'redux';
const initialState = {
  name: 'John Uwimana',
  description: 'Software Engineer, and UI & UX Designer',
  likes: 'Movies, Book, and Pop Music',
  location: 'Kigali, Rwanda',
};
const store = createStore(reducer, initialState);
const state = store.getState();

class App extends Component {
  render() {
    const { name, description, likes, location } = state;
    return (
      <div className='App'>
        <section className='User__img'>
          <img src={user} alt='user' />
        </section>

        <section className='User__info'>
          <p>
            {' '}
            <span className='faint'>I am</span> a {description}
          </p>
          <p>
            {' '}
            <span className='faint'>I like</span> {likes}
          </p>

          <p className='User__info__details User__info__divider faint'>
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className='User__info__details faint'>
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
