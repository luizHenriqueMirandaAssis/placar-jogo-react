import React, {Component} from 'react';

export default class BotaoGol extends Component{

    handleClick(event){
        event.preventDefault();
        this.props.marcarGol();
    }   

    render(){
        return(
            <div className="container-gol">
                <input className="btn-gol" type="button" value="GOL!"
                 onClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}