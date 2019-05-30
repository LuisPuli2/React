import React, { Component } from 'react'
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';



class WeatherLocation extends Component {
	constructor (props){
		super(props);
		const {city} = props;
		this.state = {
			city,
			data: null,
		};
		console.log("constructor");
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.handleUpdateClick();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
	}


	handleUpdateClick = () =>{
		const api_weather = getUrlWeatherByCity(this.state.city);
		fetch(api_weather).then( resolve => {
			return resolve.json();
		}).then (data => {
			const newWeather = transformWeather(data);
			this.setState({
				data: newWeather,
			});
		});
	}
	render() {
		console.log("Render");
		const {city,data} = this.state;
		return (
			<div className="weatherLocationCont">
				<Location city={city}></Location>
				{data?<WeatherData data = {data}></WeatherData>:<CircularProgress></CircularProgress> }
			</div>
		);
	}
}

WeatherLocation.propTypes =  {
	city: PropTypes.string.isRequired,
}

export default WeatherLocation;