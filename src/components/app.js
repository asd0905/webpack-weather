import React from "react";
import {Component} from "react";

import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
                {/*<button className="btn pt-22">test</button>
                <button className="btn-indigo mr-11">test</button>
                <button className="btn-indigo-2 ml-11">test</button>*/}
            </div>
        )
    }
}
