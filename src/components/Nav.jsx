import carrito from './assets/img/carrito.png'

function Nav(props){
    return(
  
      <nav className="navbar">
  
        <a href="" className="logo">MolinaShop</a>
  
        <ul className="menu">
          <li><a href="" className="menu-link">{props.inicio}</a></li>
          <li><a href="" className="menu-link">{props.nosotros}</a></li>
          <li><a href="" className="menu-link">{props.productos}</a></li>
          <img src= {props.carrito}/>
        </ul>
      </nav>
  
    )
  }

  export default Nav