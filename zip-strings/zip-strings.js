function zipStrings(strA, strB) {
  let strLength = 0;
  let output = "";

  if (strA.length >= strB.length) {
    strLength = strA.length;
  } else {
    strLength = strB.length;
  }

  for (let i = 0; i < strLength; i++) {
    if (i < strA.length) {
      output += strA[i];
    }
    if (i < strB.length) {
      output += strB[i];
    }
  }
  return output;
}
