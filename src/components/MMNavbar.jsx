import "../Css/mmnavbar.css";

export function MMNavbar() {
  return (
    <nav className="navbar mmnavbar-custom navbar-expand-lg navbar-light">
      <div className="containernavbar">
        <div className="mmnavbarimage">
          <img
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709869285/mmlogocenteredtext_pch4eo.png"
            height="40vw"
          ></img>
        </div>
        {/* <input className="fakesearch" placeholder="Search In-Store Products... "></input> */}
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <p className="dropdown-divider"> </p>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}
        &nbsp; &nbsp;
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href=""><img
    //           src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709701300/mmlogowhite_ik707g.png"
    //           height="30vw"
    //         ></img></a>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li><a className="dropdown-item" href="#">Action</a></li>
    //             <li><a className="dropdown-item" href="#">Another action</a></li>
    //             <li><hr className="dropdown-divider"></li>
    //             <li><a className="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
}
