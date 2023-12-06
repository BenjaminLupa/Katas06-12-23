function filterApiData(apiData, mandatoryKeys) {
  const nama = [];

  for (let i = 0; i < apiData.length; i++) {
    if (mandatoryKeys.length > 1) {
      if (
        Object.keys(apiData[i]).includes(mandatoryKeys[1]) &&
        Object.keys(apiData[i]).includes(mandatoryKeys[0])
      ) {
        nama.push(apiData[i]);
      }
    }
    if (mandatoryKeys.length === 1) {
      if (Object.keys(apiData[i]).includes(mandatoryKeys[0])) {
        nama.push(apiData[i]);
      }
    }
  }
  return nama;
}
