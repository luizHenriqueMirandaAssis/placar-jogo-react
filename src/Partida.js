import React, {Component} from 'react';
import './Partida'

export default class Partida extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.campeonato}</h3>
                <div>
                    <span>{this.props.dataHora}</span>
                </div>                
            </div>
        );
    }
}

