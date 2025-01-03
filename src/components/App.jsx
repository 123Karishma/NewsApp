import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";


export default class App extends Component{
    constructor(){
        super()
        this.state={
            language:"hi",
            search:""
        }
        this.languageChange=this.languageChange.bind(this)
        this.searchChange=this.searchChange.bind(this)
    }
    languageChange(input){
        this.setState({language:input})
    }

    searchChange(input){
        this.setState({search:input})
    }
    render(){
        return(
            <>
            <BrowserRouter>
            <Navbar  languageChange={this.languageChange} searchChange={this.searchChange}/>
            <Routes>
                <Route path="/" element={<Home search={this.state.search} language={this.state.language} q='All'/>}/>
                <Route path="/All" element={<Home search={this.state.search} language={this.state.language} q='All'/>}/>
                <Route path="/politics" element={<Home search={this.state.search} language={this.state.language} q='politics'/>}/>
                <Route path="/sports" element={<Home search={this.state.search} language={this.state.language} q='sports'/>}/>
                <Route path="/crime" element={<Home search={this.state.search} language={this.state.language} q='crime'/>}/>
                <Route path="/science" element={<Home search={this.state.search} language={this.state.language} q='science'/>}/>
                <Route path="/entertainment" element={<Home search={this.state.search} language={this.state.language} q='entertainment'/>}/>
                <Route path="/technology" element={<Home search={this.state.search} language={this.state.language} q='technology'/>}/>
                <Route path="/science" element={<Home search={this.state.search} language={this.state.language} q='science'/>}/>
                <Route path="/cricket" element={<Home search={this.state.search} language={this.state.language} q='cricket'/>}/>
                <Route path="/ipl" element={<Home search={this.state.search} language={this.state.language} q='ipl'/>}/>
                <Route path="/India" element={<Home search={this.state.search} language={this.state.language} q='India'/>}/>
                <Route path="/economy" element={<Home search={this.state.search} language={this.state.language} q='economy'/>}/>
                <Route path="/international" element={<Home search={this.state.search} language={this.state.language} q='international'/>}/>
                <Route path="/joke"element={<Home search={this.state.search} language={this.state.language} q='joke'/>}/>
                 <Route path="/*" element={<Home search={this.state.search} language={this.state.language} q='All'/>}/>
                {/* <Route path="/science" element={<Home q='All'/>}/> */} 
            </Routes>
            <Footer/>
            </BrowserRouter>
            
            </>
        )
    }
}