const transformDate = (time) => {
  const months = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    4: "05",
    5: "06",
    6: "07",
    7: "08",
    8: "09",
    9: "10",
    10: "11",
    11: "12",
  };
  const date = new Date(time);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const fullDate = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + seconds;
  return fullDate;
};

module.exports = {
  transformDate,
};
