import React from 'react';
import Add from './Add';
import List from './List';
import { Routes,Route, Link} from 'react-router-dom';
import Edit from './Edit';

import Menu from './Menu';


function  Files() {
  return (
    <div>


       

        <Menu></Menu>
        <Routes> 
        <Route path='/' element={<Add/>}></Route>     
        <Route path='/List' element={<List/>}></Route>
        <Route path='/Edit' element={<Edit/>}></Route>
        </Routes>
    </div>
  )
}

export default Files;
