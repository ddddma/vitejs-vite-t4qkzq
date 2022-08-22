export default function validateInput(inputArg) {
  if (inputArg.length <= 10 && inputArg.length > 0) {
    return true;
  } else if (inputArg.length > 10 && inputArg.length > 0) {
    return false;
  } else {
    return 2;
  }
}
