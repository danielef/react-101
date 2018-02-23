import React from 'react';

var $ = require('jquery');
var url = "http://api.openweathermap.org/data/2.5/forecast?q=Mexico%20City,MX&appid=97a0e425b6242fb595843206f65e6dfe&lang=es&units=metric";

class ForecastItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
     
    }
  }
 
  render() {
    return (
        <div>
          <span>ForecastItem</span>
          <ul>
            <li>{this.props.description}</li>
            <li>{this.props.temperature}</li>
            <li>{this.props.hour}</li>
          </ul>          
        </div>
    );
  }
}

class Forecast extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,  
            farray: []
        }
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.load(),
        10000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    } 

    load() {
      console.log("Loading...");
      $.getJSON(url, (data) => {
        this.setState((previousState) => {
          return {
            ...previousState,
            loaded: true,
            farray: data.list
          };
        });   
      });
    }
      
    render() {
      if (this.state.loaded) {
        var items = this.state.farray.map(function(item) { return <div><ForecastItem description={item.weather[0].description} 
                                                                                     temperature={item.main.temp}
                                                                                     hour={item.dt_txt}
                                                                                        /></div>; })
        return (
            <div>{items}</div>
        );        
      } else {
        return (
            <div>Loading ...</div>
        );
      }
    }
}

export default Forecast;

