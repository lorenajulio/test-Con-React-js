import { Component } from 'react';


class Welcome  extends Component{
  constructor(){
    super()
    this.state={
       

    }

}

enviarpeticion=(e)=>{
  e.preventDefault()
    let  ocultarwelcome="d-md-none"
    this.props.mostrarElemento(ocultarwelcome)
    let mostrarPregunta="d-md-block"
    this.props.mostarPregunta(mostrarPregunta)
}
  render(){
    let clase=`container ${this.props.classOcultarMostrar }`;
    return(

        <div className={clase}>

         <section className="main row " >
          <div className="col-md-12 text-center ">
        
        <div className="welcome"  id="welcome"  >
        <h1>!Bienvenido¡</h1>
        <p id="user2">{this.props.nombre} {this.props.apellido}</p>
        <h3>¿Que tanto sabes de futbol?.</h3>
        <button  onClick={this.enviarpeticion}>iniciar test </button>
    </div>
    </div> 
   
    </section>
    </div>
      );
  }
  
}

export default Welcome;