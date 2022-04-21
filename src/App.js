import React from 'react'
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      
        <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' element={HomeScreen} />
          <Route path='/product/:id' element={ProductScreen} />
          <Route path='/' element={Footer} />

      </Container>
      </main>
     
      </Router>
  );
}

export default App;

// import React from "react";
// import Header from './components/Header'
// import Footer from './components/Footer'
// function App () {
//   return(
//     <div>
//       <Header />
//       <Footer />
//     </div>
//   )
// }

// export default App
