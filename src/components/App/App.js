import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import BudgetPage from '../../routes/BudgetPage/BudgetPage'

export default class App extends Component{

  render(){
    return (
      <>
      <nav>
        <h1>Trip Planning App</h1>
      </nav>
      <main>
        <Switch>
          <Route path={'/budget-tool'} component={BudgetPage}/>
        </Switch>
      </main>
      <footer>
        <p>Created by Jessica Yip</p>
      </footer>
      </>
    )
  }
  
}