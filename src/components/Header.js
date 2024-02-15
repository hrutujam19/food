const Header =()=>{
    return(
        <nav class="navbar navbar-expand-sm navbar-light bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">sign-in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Others</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">help</a>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button> */}
      </form>
    </div>
  </div>
</nav>

    )
}
export default Header;