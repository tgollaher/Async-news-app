import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Fullstack from './components/Engineer'
import Frontend from './components/Frontend'
import Backend from './components/Backend'
import Favorites from './components/Favorites/'
import './App.css';


const App = () => {

    return(
      <div className='app'>
        <nav>
         <h1>Your News Delivered!</h1>
            <Link to='/' className='link'>Top News</Link>
            <Link to='/fullstack' className='link'>Fullstack</Link>
            <Link to='/backend' className='link'>Backend</Link>
            <Link to='/frontend' className='link'>Frontend</Link>
        </nav>
        <article>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/fullstack' render={() => <Fullstack />} />
            <Route path='/backend' render={() => <Backend />} />
            <Route path='/frontend' render={() => <Frontend />} />
            <Route path='/favorites' render={() => <Favorites />} />
        </article>
      </div>
    )
}

export default App;