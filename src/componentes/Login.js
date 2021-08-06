import React, { Component } from 'react'

class Login extends Component{
 
  constructor(){
    
    super()
    this.state={
      nombre:"",
      apellido:"",
      oculatarLogin:""
    }
    
    this.nombre=React.createRef()
   
    this.apellido=React.createRef()
  
    
  }
 
   enviarnombre=(e)=>{
      e.preventDefault()
      let nombre =this.nombre.current.value
      let apellido=this.apellido.current.value
      this.props.obtenerDatos(nombre,apellido)
      this.setState({
        oculatarLogin:"d-md-none"
        
      })
      let ocultarMostrar="d-md-block"
      this.props.mostrarElemento(ocultarMostrar)
     
}
  render(){
    let clase=`container ${this.state.oculatarLogin}`;
    return(
           <div  className={clase} >
             <section className="main row ">
            <article className="col-md-12">
           <div className="login" id="login">
             <h2>Formulario de Ingreso</h2>  
             <form onSubmit={this.enviarnombre} >
               <input  type="text" name="name" id="name" placeholder="&#128100;  Ingrese su nombre " 
               ref={this.nombre}  required/>
               <input type="text" name="last_name" id="last_name" placeholder="&#128100;   Ingrese su apellido" 
               ref={this.apellido} required />
               <button  type="submit" id="registrar">Entrar</button>
              </form>
       
         </div> 
         </article>
         </section>
         </div>
   
      );
  }
  
}

export default Login;