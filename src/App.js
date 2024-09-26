import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import  {Home}  from "./components/HomePage";
import { About } from "./components/About";
import { Navbar } from './components/Navbar';
import { OrderSummary} from './components/OrderSummary'
import { Nomatch } from './components/Nomatch'
import { RoleSelector } from './components/RoleSelector';
import { Login } from './components/Login'
import { SignUp } from "./components/SignUp";
import { Dashboard } from './components/admin/Dashboard'
import { AdminPannel } from './components/admin/AdminPannel'
import { First } from "./components/First";
import { Sidebar } from './components/admin/Sidebar';


// function App() {
//   return (
//     <div>
//     <div className="header sticky-top">
//         <nav className="navbar navbar-expand-md navbar-light">
//             <a className="navbar-brand" href="index.html">
//                 <img src="/img/logo-removebg-preview.png" />
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-navbar">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse justify-content-end" id="my-navbar">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <a className="nav-link" href="#" data-toggle="modal" data-target="#signup-modal">
//                             <i className="fas fa-user"></i>Signup
//                         </a>
//                     </li>
//                     <div className="nav-vl"></div>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#" data-toggle="modal" data-target="#login-modal">
//                             <i className="fas fa-sign-in-alt"></i>Login
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     </div>

//     <div className="banner-container">
//         <h2 className="white pb-3">Discover your stay Where Comfort Meets Convenience</h2>

//         <form id="search-form">
//             <div className="input-group city-search">
//                 <input type="text" className="form-control input-city" id='city' name='city' placeholder="Enter your city to search for stay" />
//                 <div className="input-group-append">
//                     <button type="submit" className="btn btn-secondary">
//                         <i className="fa fa-search"></i>
//                     </button>
//                 </div>
//             </div>
//         </form>
//     </div>

//     <div className="page-container">
//         <h1 className="city-heading">
//             Major Cities
//         </h1>
//         <div className="row">
//             <div className="city-card-container col-md">
//                 <a href="/Html/property_surat.html">
//                     <div className="city-card rounded-circle">
//                         <img src="/img/surat.jpeg" className="city-img" />
//                     </div>
//                 </a>
//             </div>

//             <div className="city-card-container col-md">
//                 <a href="/Html/property_rajkot.html">
//                     <div className="city-card rounded-circle">
//                         <img src="/img/rajkot.png" className="city-img" />
//                     </div>
//                 </a>
//             </div>

//             <div className="city-card-container col-md">
//                 <a href="/Html/property_gandhinagar.html">
//                     <div className="city-card rounded-circle">
//                         <img src="/img/gandhinagar.jpg" className="city-img" />
//                     </div>
//                 </a>
//             </div>

//             <div className="city-card-container col-md">
//                 <a href="/Html/property_vadodara.html">
//                     <div className="city-card rounded-circle">
//                         <img src="/img/vadodara-removebg-preview.png" className="city-img" />
//                     </div>
//                 </a>
//             </div>

//             <div className="city-card-container col-md">
//                 <a href="/Html/property_ahmedabad.html">
//                     <div className="city-card rounded-circle">
//                         <img src="/img/ahmedabad.jpg" className="city-img" />
//                     </div>
//                 </a>
//             </div>
//         </div>
//     </div>

//     <div className="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="signup-heading" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="signup-heading">Signup with StayGuide</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>

//                 <div className="modal-body">
//                     <form id="signup-form" className="form" role="form">
//                         <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text">
//                                     <i className="fas fa-user"></i>
//                                 </span>
//                             </div>
//                             <input type="text" className="form-control" name="full_name" placeholder="Full Name" maxlength="30" required />
//                         </div>

//                         <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text">
//                                     <i className="fas fa-phone-alt"></i>
//                                 </span>
//                             </div>
//                             <input type="text" className="form-control" name="phone" placeholder="Phone Number" maxlength="10" minlength="10" required />
//                         </div>

//                         <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text">
//                                     <i className="fas fa-envelope"></i>
//                                 </span>
//                             </div>
//                             <input type="email" className="form-control" name="email" placeholder="Email" required />
//                         </div>

//                         <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text">
//                                     <i className="fas fa-lock"></i>
//                                 </span>
//                             </div>
//                             <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required />
//                         </div>

//                         <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text">
//                                     <i className="fas fa-university"></i>
//                                 </span>
//                             </div>
//                             <input type="text" className="form-control" name="college_name" placeholder="College Name" maxlength="150" required />
//                         </div>

//                         <div className="form-group">
//                             <span>I'm a</span>
//                             <input type="radio" className="ml-3" id="gender-male" name="gender" value="male" /> Male
//                             <label for="gender-male">
//                             </label>
//                             <input type="radio" className="ml-3" id="gender-female" name="gender" value="female" />
//                             <label for="gender-female">
//                                 Female
//                             </label>
//                         </div>

//                         <div className="form-group">
//                             <button type="submit" className="btn btn-block btn-primary">Create Account</button>
//                         </div>
//                     </form>
//                 </div>

//                 <div className="modal-footer">
//                     <span>Already have an account?
//                         <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Login</a>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-heading" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="login-heading">Login with StayGuide</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>

//                 <div className="modal-body">
//                     <form id="login-form" className="form" role="form">
//                         <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text">
//                                     <i className="fas fa-user"></i>
//                                 </span>
//                             </div>
//                             <input type="email" className="form-control" name="email" placeholder="Email" required />
//                         </div>

//                         <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text">
//                                     <i className="fas fa-lock"></i>
//                                 </span>
//                             </div>
//                             <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required />
//                         </div>

//                         <div className="form-group">
//                             <button type="submit" className="btn btn-block btn-primary">Login</button>
//                         </div>
//                     </form>
//                 </div>

//                 <div className="modal-footer">
//                     <span>
//                         <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#signup-modal">Click here</a>
//                         to register a new account
//                     </span>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="footer">
//         <div className="page-container footer-container">
//             <div className="footer-cities">
//                 <div className="footer-city">
//                     <a href="/Html/property_ahmedabad.html">PG in Ahmedabad</a>
//                 </div>
//                 <div className="footer-city">
//                     <a href="/Html/property_surat.html">PG in Surat</a>
//                 </div>
//                 <div className="footer-city">
//                     <a href="/Html/property_rajkot.html">PG in Rajkot</a>
//                 </div>
//                 <div className="footer-city">
//                     <a href="/Html/property_vadodara.html">PG in Vadodara</a>
//                 </div>
//                 <div className="footer-city">
//                     <a href="/Html/property_gandhinagar.html">PG in Gandhinagar</a>
//                 </div>
//             </div>
//             <div className="footer-copyright">© 2024 Copyright Stay Guide</div>
//         </div>
//     </div>
// </div>
  //   <>
  //   <Navbar />
  //   <Routes>
  //     <Route path='/' element={<RoleSelector />}></Route>
  //     <Route path='home' element={<Home />}></Route>
  //     <Route path='about' element={<About />}></Route>
  //     <Route path='order-summary/:pgId' element={<OrderSummary />} />
  //     <Route path='login' element={<Login />}/>
  //     <Route path='signup' element={<SignUp />}></Route>
  //     <Route path='dashboard' element={<Dashboard />}/>
  //     <Route path='*' element={< Nomatch/>} />
  //   </Routes>
  //   </>
  // );
// }

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path='/admin-model' element={<AdminModel/>}/> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin-pannel" element={< AdminPannel />}/>
        <Route path='sidebar' element={< Sidebar />}/>
        <Route path="/" element={<First />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path='/Roleselector' element={<RoleSelector />}/>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="order-summary/:city" element={<OrderSummary />} />
                {/* <Route path="first" element={<First />}></Route> */}
                <Route path="*" element={<Nomatch />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
