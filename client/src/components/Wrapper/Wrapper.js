import React from "react";
import "./Wrapper.css";
import Title from "../Title";
import Search from "../searchBox";
import MovieCard from "../MovieCard";

const Wrapper = props => <div className="wrapper">
<Title>Box Office</Title>


<MovieCard></MovieCard>
​<Search></Search>
​
</div>;
export default Wrapper;