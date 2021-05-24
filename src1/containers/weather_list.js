import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}aaa</td>
                <td><Chart data={temps} color="red"/></td>
                <td><Chart data={pressures} color="green"/></td>
                <td><Chart data={humidities} color="orange"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>도시</th>
                    <th>온도</th>
                    <th>압력</th>
                    <th>습도</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    // const weather = state.weather;
    return {weather}; // {weather} === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList);
