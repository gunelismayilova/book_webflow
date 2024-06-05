import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Store from '../Pages/Store';
import Contact from '../Pages/Contact';
import Blog from '../Pages/Blog';
import NotFound from '../Pages/NotFound';
import SingleBlog from '../Pages/SingleBlog';
import ScrollToTop from './ScrolltoTop';
import SingleProduct from '../Pages/SingleProduct';

const WebRoutes = () => {
  return (
    <div>
       <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
            <Route path='/store/:id' element={<SingleProduct />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<SingleBlog />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default WebRoutes
