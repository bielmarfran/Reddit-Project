import React from "react";

export default function getApi(time) {
  const datePost = new Date(time);
  const dateNow = new Date();
  const year = 1000 * 3600 * 24 * 365;
  const month = 1000 * 3600 * 24 * 31;
  const day = 1000 * 3600 * 24;
  const hour = 1000 * 3600 * 1;
  const minute = 1000 * 60;
  const second = 1000;
  //console.log(new Date().toISOString());
  var Difference_In_Time = dateNow.getTime() - datePost.getTime();

  //console.log(Difference_In_Time / hour);
  var difYear = Difference_In_Time / year;
  var time;
  if (difYear > 1) {
    var result = Math.trunc(difYear);
    result > 1 ? (time = result + " anos") : (time = result + " ano");
    return time;
  } else if (Difference_In_Time / month > 1) {
    var result = Math.trunc(Difference_In_Time / month);
    result > 1 ? (time = result + " mese") : (time = result + " mês");
    return time;
  } else if (Difference_In_Time / day > 1) {
    var result = Math.trunc(Difference_In_Time / day);
    result > 1 ? (time = result + " dias") : (time = result + " dia");
    return time;
  } else if (Difference_In_Time / hour > 1) {
    var result = Math.trunc(Difference_In_Time / hour);
    result > 1 ? (time = result + " horas") : (time = result + " hora");
    return time;
  } else if (Difference_In_Time / minute > 1) {
    var result = Math.trunc(Difference_In_Time / minute);
    result > 1 ? (time = result + " minutos") : (time = result + " minuto");
    return time;
  } else {
    var result = Math.trunc(Difference_In_Time / second);
    result > 1 ? (time = result + " segundos") : (time = result + " segundo");
    return time;
  }

  return Difference_In_Time;
}
