function telephoneCheck(str) {
 if (/[^0-9()-\s]/.test(str)) {
    return false;
  } else if (str.length == 10) {
    return true;
  }
  if (/\(/.test(str)) {
    if (!/\)/.test(str)) {
      return false;
    }
  }
  if (/\)/.test(str)) {
    if (!/\(/.test(str)) {
      return false;
    }
  }
  if (str.charAt(0) == "-") {
    return false;
  }
  let newArr = str.split(/[-() ]/).join(" ").trim().split(/\s+/);
  if (newArr.length == 3 && newArr[0] < 1000 && newArr[1] < 1000 && newArr[2] < 10000) {
    return true;
  }
 if (newArr.length == 4 && newArr[0] == 1 && newArr[1] < 1000 && newArr[2] < 1000 && newArr[3] < 10000) {
    return true;
  }
  return false;
}

// Or you can try this one line it does the same functionality:

function telephoneCheck(str) {
  return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}
