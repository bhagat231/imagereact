import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data/Data'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import प्रशासन from '../Pages/प्रशासन';
import समाज from '../Pages/समाज';

export default function Navbar1() {
  return (
   <>
   <div className='bg-dark border-2px'>

</div>
<div className='container1'>
<img className='w-75 ' src={require('../assets/img/3.gif')} />  
</div>
<div className='container2 py-3'>
<img className='w-75 ' src={require('../assets/img/4.gif')} />  
</div>
   <nav className='mainnav'>
    <div className='con'>
        <ul>
            <li><Link to="/">राजनीति</Link></li>
            {Data.map((item)=>(
                <li><Link to={`/cat/${item.id}`}>{item.catName}</Link></li>
            ))}
        </ul>
    </div>
   </nav>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<प्रशासन />} />
        <Route path="/detail/:id" element={<समाज />} />
      </Routes>
   </>
  )
}
