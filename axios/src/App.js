import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Site/Home/Home";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import PostDetail from "./pages/Site/PostDetail/PostDetail";
import Error from "./pages/Site/Error/Error";
import Shop from "./pages/Site/Shop/Shop";
import Posts from "./pages/Admin/Posts/Posts";
import ProductDetail from "./pages/Admin/ProductDetail/ProductDetail";
import Add from "./pages/Admin/Add/Add";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/posts" element={<Posts />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/admin/products/add" element={<Add />} />
                <Route path="/admin/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
