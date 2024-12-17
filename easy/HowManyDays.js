function howManyDays(date1, date2) {
  try {
    let dat1 = new Date(date1).getTime();
    let dat2 = new Date(date2).getTime();
    if (date1 >= date2) {
      throw new Error("the date are bad");
    } else {
      let time = dat2 - dat1;
      console.log(new Date(time).getDate());
    }
  } catch (err) {
    console.error(err.message);
  }
}

howManyDays("2024-12-19", "2024-12-13");
