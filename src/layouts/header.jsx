// scss files:
import '../styles/layouts/layouts.scss';

function Header(){

  return(
    <header>
    <div className="search">
      <input type="search" placeholder="Type A Keyword"/>
    </div>
    <div className="icons">
      <span className="notifications">
        <i className="fa-regular fa-bell fa-lg"></i>
      </span>
      <img src={require('../imgs/avatar.png')} alt="person"/>
    </div>
  </header>
  )
}
export default Header;