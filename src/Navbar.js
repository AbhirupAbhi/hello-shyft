const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Hello SHYFT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Create</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Read All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Read One</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>  
     );
}
 
export default Navbar;