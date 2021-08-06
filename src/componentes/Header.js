import { Component } from 'react';


class Header  extends Component{
  render(){
    return(
      <header>
        <div className="col-xs-7 ha1">
            <h1>TEST FUTBOLERO</h1>
        </div>
        <nav>
          <p id="user">{this.props.nombre} {this.props.apellido}</p>
        </nav>
      </header>
    
      );
  }
  
}

export default Header;