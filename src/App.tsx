import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { AllPeople } from './components/AllPeople'
import { Person } from './components/Person'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <div>
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <Route path='/' exact>
              <AllPeople />
            </Route>
            <Route path='/person/:id'>
              <Person />
            </Route>
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  )
}

export default App
