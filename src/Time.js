import React, {Component} from 'react'
import BotaoGol from './BotaoGol'
import ImageTime from './ImageTime'

export default class Time extends Component{

    render(){
        return (
            <div className="container-time">
                  <ImageTime url={this.props.url}/> 
                  <label>{this.props.nome}</label>

                  <h2>{this.props.gols}</h2>
                  <BotaoGol marcarGol={this.props.marcarGol}/>
            </div>
        )
    }

}