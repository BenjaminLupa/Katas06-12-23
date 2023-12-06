function extractClassName(val) {
  const month = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  const session = val.split(" ").slice(-3);
  const res = [];

  if (session[0] === "Class" && session[1].length === 4) {
    res.push(session[1]);
  } else {
    return null;
  }

  for (const prob in month) {
    if (prob == session[2]) {
      res.push(month[prob]);
    }
  }

  return res.join("-");
}
