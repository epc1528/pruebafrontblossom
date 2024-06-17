import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Character } from './pages/Characters';
import { CharacterDetails } from './pages/CharactersDetails';
import { PageError } from './pages/pageerror';




function App() {
  const uri = process.env.URL_GRAPHQL
  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  });
  return (
  <ApolloProvider client={client}>
    
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<PageError />}/>
      <Route path='/' element={<Navigate to='/character' />} />
      <Route path='/character' element={<Character></Character>} />
      <Route path='/character/:page' element={<Character></Character>} />
      <Route path='/characterdetail/:id' element={<CharacterDetails></CharacterDetails>} />
    </Routes>
    </BrowserRouter>
  </ApolloProvider>
  );
}

export default App
