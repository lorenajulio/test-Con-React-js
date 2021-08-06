import React, { Component } from 'react';

class Pregunta3 extends Component{
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
        this.props.obtenerRespuesta3(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta3(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta3(respuesta1)
    }
  
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
            <div className= {clase} >
                
                <h3 className="indicador">Pregunta 3 de 9</h3>
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta3" className="pag">
                        <label for="">3.¿Mejor tecnico 2019?</label>
                        <br/><br/>
                        <label for="">A:</label>
                        <label>Pep Guardiola</label>
                        <input type="radio" name="rst2"value="Pep Guardiola"  ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/>
                               
                                <br/>
                        <label for="">B:</label>
                        <label>Zinedine Zidane</label>
                         <input type="radio" name="rst2"value="Zinedine Zidane"  ref={this.pre2} onClick={this.enviarRespuest2} className={this.props.desabilitar}/>
                              
                                <br/>
                        <label for="">C:</label>
                        <label id="rst2" className={this.props.colorgreen}>Jurgen Klopp</label>
                        <input type="radio" name="rst2" value="Jurgen Klopp"  ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/>
                            <br/><br/>
                    </div>


                        </div>
                    </article>
          
            </div>
        )
    }

}
export default  Pregunta3;