import React, { Component } from "react";
import MovieCard from "./components/MovieCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/searchBox/searchBox";
import "./App.css";


class App extends Component {
    
    render() {
        return (
            <Wrapper>
                <Title>Box Office</Title>
                <Search></Search>
            <MovieCard></MovieCard>
            

               

            </Wrapper>
            
            
            
        );
    }
}

export default App;