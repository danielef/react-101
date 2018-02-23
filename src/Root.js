import React from 'react';

import Counter from './Counter';
import Counter2 from './Counter2';

var $ = require('jquery');
var clima = "http://api.openweathermap.org/data/2.5/weather?q=Mexico%20City,MX&appid=97a0e425b6242fb595843206f65e6dfe&lang=es&units=metric";

// function Root() {
//     return React.createElement(
//         'h1',
//         null,
//         'Root component'//,
//         //React.createElement(
//         //    Counter
//         // )
//     );
// }

// const Root = () => {
//     return React.createElement(
//         'h1',
//         null,
//         'Root component'//,
//         //React.createElement(

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, 
                   base: null,
                   weather: null,
                   weatherDesc: null,
                   city: null,
                   temp: null
                 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick!");
    $.getJSON(clima, (d) => { 
      this.setState({
          isLoaded: true,
          base: d.base,
          weather: d.weather[0].main,
          weatherDesc: d.weather[0].description,
          city: d.name,
          temp: d.main.temp
      });
    });
  }

  render() {
    const { isLoaded, weather, weatherDesc, city, temp } = this.state;
      if (isLoaded) {
        return (
      <div>
        <h1>Hello, world!</h1>
        <h2>{weather} in {city} with {temp} &deg;C.</h2>
      </div> );
      } else {
        return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Loading...</h2>
      </div> );
      }
    
  }
}

function Root() {
    return (
        <section>
            <h1>Root component</h1>
            <Counter />
            <Counter2 />
            <Weather />
        </section>
    );
}

export default Root;
