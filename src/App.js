import React from 'react';
import { Route, Link} from 'react-router-dom'
import './App.css';
import './components/Search/Search.css'
import './components/Home/Home.css'
import Home from './components/Home'
import Tech from './components/Tech'
import Science from './components/Science'
import Entertainment from './components/Entertainment'
import Gadgets from './components/Gadgets'
import Search from './components/Search'

const apiKey = process.env.REACT_APP_API_TOKEN


const App = () => {

    return (
      <div className='app'>
        <nav>
          <h1>Async News</h1>
          <Link to='/' className='anchor'>Home</Link>
          <Link to='/search' className='anchor'>Search</Link>
          <Link to='/tech' className='anchor'>Tech</Link>
          <Link to='/science' className='anchor'>Science</Link>
          <Link to='/entertainment' className='anchor'>Entertainment</Link>
          <Link to='/gadgets' className='anchor'>Gadgets</Link>
          
        </nav>
        <article>
            <Route exact path='/' render={() => <Home apiKey={apiKey}/>} />
            <Route path='/search' render={() => <Search apiKey={apiKey}/>} />
            <Route path='/Tech' render={() => <Tech apiKey={apiKey}/>} />
            <Route path='/Science' render={() => <Science apiKey={apiKey}/>} />
            <Route path='/Entertainment' render={() => <Entertainment apiKey={apiKey}/>} />
            <Route path='/Gadgets' render={() => <Gadgets apiKey={apiKey}/>} />

        </article>
      </div>
    )
}


export default App; 
