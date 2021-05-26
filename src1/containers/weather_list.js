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
                <td>{name}</td>
                <td><Chart data={temps} color="red"/></td>
                <td><Chart data={pressures} color="green"/></td>
                <td><Chart data={humidities} color="orange"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-50">
                <tr className="text-gray-600 text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">도시</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">온도</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">압력</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">습도</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
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
