import React, {Component} from 'react'
import Time from './Time'
import Partida from './Partida'
import ImageGol from './ImageGol'

export default class Placar extends Component{

    constructor(){
        super();

        let golCasaStorage = localStorage.getItem("golsCasa") === null ?
        0 :
        parseInt(localStorage.getItem("golsCasa"));

        let golVisitanteStorage = localStorage.getItem("golsVisitante") === null ?
        0 :
        parseInt(localStorage.getItem("golsVisitante")); 

        this.state = {
            gols_casa: golCasaStorage,
            gols_visitante: golVisitanteStorage
        }
    }

    MarcarGolCasa(){

        let golsCasa = this.state.gols_casa + 1;

        this.setState({
            gols_casa : golsCasa
        });

        localStorage.setItem("golsCasa", golsCasa);
        this.MostrarImagemGol();
    }

    MarcarGolVisitante(){

        let golsVisitante = this.state.gols_visitante + 1;

        this.setState({
            gols_visitante : this.state.gols_visitante + 1
        });

        localStorage.setItem("golsVisitante", golsVisitante);
        this.MostrarImagemGol();
    }

    MostrarImagemGol(){
      let element = document.getElementById("img-gol");

      element.style.display = "block";

      setTimeout(function(){
        element.style.display = "none";
      },1000);

    }

    ClearStorage(){
        localStorage.clear();
    }

    render(){
        return(
            <div className="placar">
                <div className="time">
                    <h3 className="width-280" >Casa</h3>
                    <Time 
                        nome={this.props.casa.nome}
                        url={this.props.casa.image}
                        gols={this.state.gols_casa}
                        marcarGol={this.MarcarGolCasa.bind(this)}
                     />
                </div>

                <div className="partida">
                    <Partida 
                     campeonato = {this.props.partida.campeonato}
                     dataHora ={this.props.partida.dataHora}
                    />
                </div>

                <div className="time">
                    <h3 className="width-280" >Visitante</h3>
                    <Time
                        nome={this.props.visitante.nome}
                        url={this.props.visitante.image}
                        gols={this.state.gols_visitante}
                        marcarGol={this.MarcarGolVisitante.bind(this)}
                    />
                </div>  
           
                <ImageGol image={this.props.imageGol} />
            </div>
        )
    }
}

