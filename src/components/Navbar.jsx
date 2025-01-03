import { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Navbar extends Component{
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  postSearch(e) {
    e.preventDefault()
    this.props.searchChange(this.state.search) 
    this.setState({search:""})
  }
    render(){
        return(
            <>
 <nav className="navbar navbar-expand-lg background ">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light " to="/" onClick={()=>this.props.searchChange("")}>News</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list  text-light fs-2"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/all" onClick={()=>this.props.searchChange("")}>All</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/politics" onClick={()=>this.props.searchChange("")}>Political</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/sports" onClick={()=>this.props.searchChange("")}>Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/crime" onClick={()=>this.props.searchChange("")}>crime</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/science" onClick={()=>this.props.searchChange("")}>Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/entertainment" onClick={()=>this.props.searchChange("")}>Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/technology" onClick={()=>this.props.searchChange("")}>Technology</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" to="/other" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/cricket" onClick={()=>this.props.searchChange("")}>cricket</NavLink></li>
            <li><NavLink className="dropdown-item" to="/ipl" onClick={()=>this.props.searchChange("")}>IPL</NavLink></li>
            <li><NavLink className="dropdown-item" to="/India" onClick={()=>this.props.searchChange("")}>India</NavLink></li>
            <li><NavLink className="dropdown-item" to="/economy" onClick={()=>this.props.searchChange("")}>Economy</NavLink></li>
            <li><NavLink className="dropdown-item" to="/international" onClick={()=>this.props.searchChange("")}>International</NavLink></li>
            <li><NavLink className="dropdown-item" to="/joke" onClick={()=>this.props.searchChange("")}>jokes</NavLink></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><button className="dropdown-item" onClick={()=>this.props.languageChange("hi")} >Hindi</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.props.languageChange("en")} >English</button></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex"  onSubmit={(e)=>this.postSearch(e)}>
        <input className="form-control me-2" name="search" value={this.state.search}  onChange={(e)=>this.setState({search:e.target.value})} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </>
        )
    }
}