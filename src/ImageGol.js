import React, {Component} from 'react'

export default class ImageGol extends Component {

    render(){
        return(
        <div id="img-gol" className="container-img-gol">
            <img src={this.props.image} />
        </div>  
        )
    }
}