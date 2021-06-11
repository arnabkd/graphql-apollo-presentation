import './App.css'
import { LandingPage } from './LandingPage'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <LandingPage />
    </ApolloProvider>
  )
}

export default App
