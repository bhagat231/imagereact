import React from 'react'

export default function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-light text-danger">
  <div className="container sushant">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-5  mb-lg-0  text-align-center px-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">राजनीति</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">प्रशासन</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">समाज</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">अपराध</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">बिचार</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">अन्तरवार्ता</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">अर्थ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">विश्व</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">खेल</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">कला/साहित्य</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">सम्पादकीय</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">सूचना प्रविधि</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">स्वास्थ्य, शिक्षा</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">अध्यात्म/दर्शन</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='bg-dark border-2px'>
<hr/>
</div>
<div className='container1'>
<img className='w-75 ' src={require('../assets/img/3.gif')} />  
</div>
<div className='container2 py-3'>
<img className='w-75 ' src={require('../assets/img/4.gif')} />  
</div>

    </>
  )
}
