import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";


export default function App (){
    let[ language, setLanguage]=useState("")
    let [ search,setSearch]=useState("")
   
   function languageChange(input){
        setLanguage(input)
    }

   function searchChange(input){
        setSearch(input)
    }
   
        return(
            <>
            <BrowserRouter>
            <Navbar  languageChange={languageChange} searchChange={searchChange}/>
            <Routes>
                <Route path="/" element={<Home search={search} language={language} q='All'/>}/>
                <Route path="/All" element={<Home search={search} language={language} q='All'/>}/>
                <Route path="/politics" element={<Home search={search} language={language} q='politics'/>}/>
                <Route path="/sports" element={<Home search={search} language={language} q='sports'/>}/>
                <Route path="/crime" element={<Home search={search} language={language} q='crime'/>}/>
                <Route path="/science" element={<Home search={search} language={language} q='science'/>}/>
                <Route path="/entertainment" element={<Home search={search} language={language} q='entertainment'/>}/>
                <Route path="/technology" element={<Home search={search} language={language} q='technology'/>}/>
                <Route path="/science" element={<Home search={search} language={language} q='science'/>}/>
                <Route path="/cricket" element={<Home search={search} language={language} q='cricket'/>}/>
                <Route path="/ipl" element={<Home search={search} language={language} q='ipl'/>}/>
                <Route path="/India" element={<Home search={search} language={language} q='India'/>}/>
                <Route path="/economy" element={<Home search={search} language={language} q='economy'/>}/>
                <Route path="/international" element={<Home search={search} language={language} q='international'/>}/>
                <Route path="/joke"element={<Home search={search} language={language} q='joke'/>}/>
                 <Route path="/*" element={<Home search={search} language={language} q='All'/>}/>
                {/* <Route path="/science" element={<Home q='All'/>}/> */} 
            </Routes>
            <Footer/>
            </BrowserRouter>
            
            </>
        )
    }
