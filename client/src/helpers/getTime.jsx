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
  if (difYear > 1) {
    var result = Math.trunc(difYear);
    return result + " anos";
  } else if (Difference_In_Time / month > 1) {
    var result = Math.trunc(Difference_In_Time / month);
    return result + " meses";
  } else if (Difference_In_Time / day > 1) {
    var result = Math.trunc(Difference_In_Time / day);
    return result + " dias";
  } else if (Difference_In_Time / hour > 1) {
    var result = Math.trunc(Difference_In_Time / hour);
    return result + " horas";
  } else if (Difference_In_Time / minute > 1) {
    var result = Math.trunc(Difference_In_Time / minute);
    return result + " minutos";
  } else {
    var result = Math.trunc(Difference_In_Time / second);
    return result + " segundos";
  }

  //console.log(Difference_In_Time / (1000 * 3600 * 24));
  // To calculate the no. of days between two dates
  //var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  return Difference_In_Time;
}
