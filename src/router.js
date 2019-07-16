import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Users from './components/Users';
import Pokemon from './components/Pokemon';
import Pokemons from './components/Pokemons';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Redirect from='/home' to='/' />
      <Route exact path='/about' component={About} />
      <Route exact path='/pokemon/:name' component={Pokemon} />
      <Route exact path='/users/:name/age/:age' component={Users} />
      <Route exact path='/pokemons' component={Pokemons} />
      <Route component={NotFound}/>
    </Switch>
  )
}

export default AppRoutes;