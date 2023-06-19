
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import CreatePost from './pages/CreatePost/CreatePost';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />} >
                  <Route index element={<HomePage />}/>
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/posts' element={<Posts />} />
                  <Route path='/create' element={<CreatePost />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
