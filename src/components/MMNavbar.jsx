import "../Css/mmnavbar.css";

export function MMNavbar() {
  return (
    <nav className="navbar mmnavbar-custom navbar-expand-lg navbar-light">
      <div className="mmnavbarimage">
        <img
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709701300/mmlogowhite_ik707g.png"
          height="30vw"
        ></img>
      </div>
      <input className="fakesearch" placeholder="Search In-Store Products "></input>
      &nbsp; &nbsp;
    </nav>
  );
}
