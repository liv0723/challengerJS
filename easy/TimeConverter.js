
function timeConverter( days, hours, minute, segund) {
  let newDays = BigInt( days * 24 * 60 * 60 * 1000);
  let newHours = BigInt( hours * 60 * 60 * 1000);
  let newMinute = BigInt( minute * 60 * 1000);
  let newSegund = BigInt( segund * 1000);
  console.log(`hours: ${newHours}, minutte: ${newHours}, minute: ${newMinute}, segund: ${newSegund}`);
}
timeConverter(1, 1, 1, 1)
