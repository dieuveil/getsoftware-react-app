import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Middle from "../Middle";
import Team from "../Team";



export default function Header() {
  return (

    <div>

      <section id="social" class="social">
        <div class="container-fluid">

          <div class="row centering">
            <div class="social-wrapper">
              <div class="col-md-4">
                <div class="social-icon myicon">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>

              <div class="col-md-8">
                <div class="social-contact right2">
                  <a href="#"><i class="fa fa-phone"></i>+011 54925849</a>
                  <a href="#"><i class="fa fa-envelope"></i>contact@</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <nav class="navbar navbar-expand-lg navbar-light mynav">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">Brand</a>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav right3">
              <a href="#" class="nav-item nav-link">Login</a>
              <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Profile</a>
                <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Inbox</a>
                    <a href="#" class="dropdown-item">Sent</a>
                    <a href="#" class="dropdown-item">Drafts</a>
                  </div>
                </div>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <button type="button" class="login">Login</button>
              </div>

              {/* <form class="d-flex">
                    <div class="input-group">
                        <button type="button" class="btn btn-secondary"><i class="bi-search"></i></button>
                    </div>
                </form> */}

            </div>
          </div>
        </div>
      </nav>

      <Middle />
      <Team />

    </div>

  )

}
