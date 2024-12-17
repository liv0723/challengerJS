
function timeConverter( days, hours, minute, segund) {
  let newDays = BigInt( days * 24 * 60 * 60 * 1000);
  let newHours = BigInt( hours * 60 * 60 * 1000);
  let newMinute = BigInt( minute * 60 * 1000);
  let newSegund = BigInt( segund * 1000);
  console.log(`Days: ${newDays}, Hours: ${newHours}, Minute: ${newMinute}, Segund: ${newSegund}`);
}
timeConverter(1, 1, 1, 1)
