import { Component } from "react";

export default class Newsitem extends Component{
    render(){
        return(
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="card">
            <img src={this.props. Image} height={200} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <hr/>
    <div className="source-date">
    <p>{this.props.source}</p>
   <hr/>
    <p>{new Date(this.props.date).toLocaleDateString()}</p>
    </div>
    <p className="card-text">{this.props.description}</p>
    <a href={this.props.url} target="_blank" rel="noreferrer"  className="btn btn-primary">Read More...</a>
  </div>
    </div>
     </div>
        )
    }
}