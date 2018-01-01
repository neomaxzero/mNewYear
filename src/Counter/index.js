import React, { Component } from "react";
import d from "date-fns/distance_in_words_strict";
import addMilliseconds from 'date-fns/add_milliseconds';
import a from "./styles.css";

export default class Counter extends Component {
  state = {
    date: new Date()
  };
  nextYear = new Date("2018/01/01");

//   nextYear = addMilliseconds(new Date(),5000);
  
  values = [
    { u: "M", divisor: 12 },
    { u: "d", divisor: 31 },
    { u: "h", divisor: 24 },
    { u: "m", divisor: 60 },
    { u: "s", divisor: 60 }
  ];

  componentDidMount() {
    setInterval(this.updateDate, 75);
  }

  checkDates = () => {
    if( this.state.date > this.nextYear) {
        this.props.countdownDone();
    }
    
  }
  updateDate = () => {
    this.setState({ date: new Date() }, this.checkDates);
  };

  render() {
    const { date } = this.state;
    var timeDiff = Math.abs(this.nextYear.getTime() - date.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    var diffHours = Math.ceil(timeDiff / (1000 * 3600)) - 1 ;
    var diffMinutes = Math.ceil(timeDiff / (1000 * 60)) - 1;
    var diffSecs = Math.ceil(timeDiff / 1000) - 1 ;
    var diffMilliseconds = Math.ceil(timeDiff) - 1;
    const units = [
      { value: diffDays, divisor: 1, label: "dias" },
      { value: diffHours, mod: 24, label: "horas" },
      { value: diffMinutes, mod: 60, label: "minutos" },
      { value: diffSecs, mod: 60, label: "segundos" },
      { value: diffMilliseconds, mod: 1000, label: "milisegungos" }
    ];

    return (
      <div className="counterContainer">
        {units.filter(u => u.value > 0).map((el, ix) => (
          <div className={`u${ix}-unit`}>
            {el.mod ? el.value % el.mod : el.value / el.divisor} {el.label}
          </div>
        ))}
      </div>
    );
  }
}
