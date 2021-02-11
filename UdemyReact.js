import React, {Component} from 'react';
import './cronometro.css';
import cronometro from "../src/img/cronometro.png";




class index extends Component{ 
      constructor(props){
        super(props);
        this.state={
           tempo:0,
           inicial:'vai',
           final:'limpa',

        }
        this.contagem = null;
        this.vai = this.vai.bind(this);
        this.limpa = this.limpa.bind(this);
      }
      vai(){
        let estado = this.state; 
        if(this.contagem !== null){
          clearInterval(this.tempo);
          this.contagem = null;
          this.state.inicial='Vai';
        } else{
          this.contagem =1;
          let time = this.state;
          this.tempo = setInterval(() => {
          time.tempo += 0.1;
          this.setState(time);
          }, 100);
          this.state.inicial = "Pausar";
        }  
       
        this.setState(estado);
      }
      limpa(){
         let estado = this.state;
         if(this.contagem !== null || this.contagem == null){
          clearInterval(this.tempo);
          this.contagem = null;
          this.state.inicial='Vai';
          this.state.tempo =0;  
      }
        this.setState(estado);  
    }  
      render(){
      return(
         <div className="container">
             <img src={cronometro} className="tempo"/>
             <a name="timer" className="contagem">{this.state.tempo.toFixed(1)}</a>
         <div className="botoes">
              <a name="botao"  onClick={this.vai} className="botao">{this.state.inicial}</a>
              <a name="botao" onClick={this.limpa} className="botao">{this.state.final}</a>
         </div>
         </div>
      );
    }

}
export default index;