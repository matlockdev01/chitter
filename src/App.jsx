import { createBrowserRouter, 
  Route,   
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


import './App.css';

//pages
import Home from './pages/Home';
import Library from './pages/Library';

//layout
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='library' element={<Library />} />
    </Route>
  )
)

function App() {
    return (
        <RouterProvider router={router} />
     )
}

export default App
