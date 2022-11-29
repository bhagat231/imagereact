import React from 'react'

export default function Header() {
  return (
   <>
   <div className='box'>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container align-items-center">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-2 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">१९ असोज, २०७९</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Wednesday, October 5, 2022, 5:07 PM</a>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-2">
    <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><p class="bi bi-facebook"></p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p class="bi bi-instagram"></p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p class="bi bi-twitter"></p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p class="bi bi-youtube"></p></a>
        </li>
      </ul>
      </div>
  </div>
</nav>
</div>

   </>
  )
}
