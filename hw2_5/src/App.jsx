import {Routes, Route} from "react-router-dom";
import './App.css'
import {MainPage} from "./pages/MainPage.jsx";
import PostList from "./pages/PostList.jsx";
import {CreatePost} from "./pages/CreatePost.jsx";
import {SinglePost} from "./pages/SinglePost.jsx";
import {DeletePost} from "./pages/DeletePost.jsx";
import {EditPost} from "./pages/EditPost.jsx";
import {ProfilePage} from "./pages/ProfilePage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import Layout from "./components/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="posts" element={<PostList/>}/>
                <Route path="create" element={<CreatePost/>}/>
                <Route path="posts/:id" element={<SinglePost/>}/>
                <Route path="posts/:id/:delete" element={<DeletePost/>}/>
                <Route path="posts/:id/edit" element={<EditPost/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
    </Routes>
  )
}

export default App
