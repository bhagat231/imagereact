import React from 'react'

export default function Main1() {
  return (
   <>
<nav className="navbar navbar-expand-lg bg-light navbar-black ">
  <div className="container">
    <a className="navbar-brand" href="#"> <img className='w-100 ' src={require('../assets/img/2.png')} />  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-center ms-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">आवरण</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">भिडियो</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ग्यालरी</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">नयाँसूचना</a>
        </li>
      </ul>
      <form className="d-flex ms-4" role="search">
        <input className="form-control me-2" type="search" placeholder="खोजनुहोस" aria-label="Search" />
        <button className="btn btn-outline-success bg-danger ms-2" type="submit">English</button>
      </form>
    </div>
  </div>
</nav>
<div className='bg-dark border-2px'>
<hr/>
</div>



   </>
  )
}
