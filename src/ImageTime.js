import React, {Component} from 'react'

export default class ImageTime extends Component{

    render(){
        return(
            <div className="img-time">
                <img src={this.props.url}/>
            </div>
        )
    }
}