import React, { Component } from 'react';

class Pregunta6 extends Component{
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
        this.props.obtenerRespuesta6(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta6(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta6(respuesta1)
    }
  
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
            <div className= {clase} >
                <h3 className="indicador">Pregunta 6 de 9</h3>
                   
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta6" class="pag">
                        <label for="">6.¿Si sumamos los botines de oro obtenidos por Leonel messi y Cr7 cuantas
                            serian?</label>
                            <br/><br/>
                        <label for="">A:</label>
                        <label>9 </label>
                        <input type="radio" name="rst5" value="9" ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/><br/>
                        
                        <label for="">B:</label>
                        <label className={this.props.colorgreen}>10</label>
                        <input type="radio" name="rst5" value="10" ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/>
                        <br/>
                        
                        <label for="">C:</label>
                        <label>8</label>
                        < input type="radio" name="rst5" value="8" ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/>
                       
                        <br/><br/>
                    </div>
                            
                        

                        </div>
                    </article>
            
            </div>
        )
    }

}
export default  Pregunta6;