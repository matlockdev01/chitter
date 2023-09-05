import { createBrowserRouter, 
  Route,   
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


import './App.css';

//pages
import Home from './pages/Home';
import Library from './pages/Library';
import Deck from './pages/Deck';

//layout
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='library' element={<Library />} />
      <Route path='deck' element={<Deck />}/>
      {/* Route path='deck/:id' element=deck ? I want to dynamically create and serve a route for a specific deck id. */}
    </Route>
  )
)

function App() {
    return (
        <RouterProvider router={router} />
     )
}

export default App
 