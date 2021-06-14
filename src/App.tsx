import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { makeStyles } from '@material-ui/styles'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import { PeopleWithFriendsAndPets } from './components/PeopleWithFriendsAndPets'
import { Person } from './components/Person'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div>
      <Router>        
        <ApolloProvider client={client}>
          <Switch>
            <Route path='/peopleWithFriendsAndPets'>
              <PeopleWithFriendsAndPets />
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
