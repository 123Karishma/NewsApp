import { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from 'react-infinite-scroll-component';


export default class Home extends Component{
    constructor(){
        super()
        this.state={
            articles:[],
            totalResults:0,
            page: 1
        }
    }
   async getAPIData(){
    this.setState({page:1})
        let response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.search?this.props.search:this.props.q}&language=${this.props.language}&pageSize=26&page=1&sortBy=publishedAt&apiKey=2fd81aac021c4853bdef30c0d1ed23e0`)
        response=await response.json()
       this.setState({
        articles:response.articles.filter(x=>x.title!=="[Removed]"),
        totalResults:response.totalResults
       })
    }

    fetchData =async()=>{
        this.setState({page:this.state.page+1})
        let response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.search?this.props.search:this.props.q}&language=${this.props.language}&pageSize=26&page=${this.state.page+1}&sortBy=publishedAt&apiKey=2fd81aac021c4853bdef30c0d1ed23e0`)
        response=await response.json()
        if(response?.status==="ok")
            this.setState({
        articles:this.state.articles.concat(response.articles.filter(x=> x.title !=="[Removed"))
        })
    }
    componentDidMount(){
        this.getAPIData()
    }
    componentDidUpdate(prevPropes){
       if(this.props!==prevPropes){
        this.getAPIData()
       }
    }
    render(){
        return(
           <div className="container-flud">
                <h5 className=" background text-light text-center p-2 mt-2  text-capitalize">{this.props.search?this.props.search:this.props.q} articals</h5>
                <InfiniteScroll
  dataLength={this.state.articles?.length} //This is important field to render the next data //nules callin operator
  next={this.fetchData}
  hasMore={this.state.articles?.length<this.state.totalResults}
  loader={<div className="my-5 text-center"><div className="spinner-border" role="status">
    <span className="visually-hidden ">Loading...</span>
  </div></div>}

>
                <div className="row">
                    {this.state.articles?.map((item,index)=>{
                        return <Newsitem
                         key={index}
                         source={item.source.name?? "N/A"}
                         title={item.title?? "N/A"}
                         description={item.description}
                         url={item.url}
                         Image={item.urlToImage??"/images/no-img.png"}
                         date={item.publishedAt}
                         />


                    })}
                </div>
                </InfiniteScroll>

           </div>
        )
    }
}