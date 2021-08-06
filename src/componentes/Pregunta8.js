import React, { Component } from 'react';

class Pregunta8 extends Component{
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
        this.props.obtenerRespuesta8(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta8(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta8(respuesta1)
    }
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
                   
   
            <div className= {clase} >
             
             <h3 className="indicador">Pregunta 8 de 9</h3>  
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta8" class="pag">

                        <label for="">8.¿Dónde se jugó la primera copa del mundo?</label>
                        <br/><br/>
                        <label for="">A:</label><input type="radio" name="rst7" value="Uruguay" ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/><label
                            id="rst7" className={this.props.colorgreen} >Uruguay</label><br/>
                        <label for="">B:</label><input type="radio" name="rst7"
                            value="Alemania" ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/><label>Alemania</label><br/>
                        <label for="">C:</label><input type="radio" name="rst7"
                            value="Inlgaterra" ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/><label>Inlgaterra</label><br/><br/>
                    </div>

                        </div>
                    </article>
   
            </div>
        )
    }

}
export default  Pregunta8;

                   