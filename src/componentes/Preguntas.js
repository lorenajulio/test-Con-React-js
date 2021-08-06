import React, { Component } from 'react';

class Preguntas extends Component{
    constructor(){
    
        super()
        this.state={
         
        }
        
        this.pre1=React.createRef();
        this.pre2=React.createRef();
        this.pre3=React.createRef();
      }
      
    enviarRespuesta=()=>{
        let respuesta1=this.pre1.current.value;
        this.props.obtenerRespuesta1(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta1(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta1(respuesta1)
    }
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
            <div className= {clase} >
               <h3 className="indicador">Pregunta 1 de 9</h3>
                   
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta0" className="pag">
                        <label for="">1.¿A quien se le titulo como mejor jugador del mundo en el año 2015?</label><br/>
                        <label for="">A: </label><label id="rst" className={this.props.colorgreen}> Leonel messi</label><input type="radio" name="rst" value="Leonel messi" ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/><br/>
                        <label for="">B: </label><label> Cristiano Ronaldo</label><input type="radio" name="rst"
                            value="Cristiano Ronaldo" ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/><br/>
                        <label for="">C: </label><label> Neymar Jr</label><input type="radio" name="rst" 
                            value="Neymar Jr" ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/><br/>
                    </div>


                        </div>
                    </article>
              
            </div>
        )
    }

}
export default  Preguntas;