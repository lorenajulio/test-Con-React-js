import React, { Component } from 'react';

class Pregunta9 extends Component{
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
        this.props.obtenerRespuesta9(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta9(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta9(respuesta1)
    }
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
                   
   
            <div className= {clase} >
        
             <h3 className="indicador">Pregunta 9 de 9</h3>
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta8" class="pag">
                        <label for="">9.¿Quién es el máximo goleador de la historia de los mundiales?
                        </label><br/><br/>
                        <label for="">A:</label><input type="radio" name="rst8"
                            value="Johan Cruyff" ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/><label>Johan Cruyff</label><br/>
                        <label for="">B:</label><input type="radio" name="rst8"
                            value="Pele" ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/><label>Pele</label><br/>
                        <label for="">C:</label><input type="radio" name="rst8" value="Miroslav Klose" ref={this.pre3} onClick={this.enviarRespuesta3}  className={this.props.desabilitar}/><label
                            id="rst8" className={this.props.colorgreen}>Miroslav Klose</label><br/><br/>
                    </div>

                        </div> 
                    </article>
              
            </div>
        )
    }

}
export default  Pregunta9;
