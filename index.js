// map-like methods
const naiveMap = (arr, multiplier) => {
  modifiedArr = []

  for (e in arr) {
    modifiedArr.push(e * multiplier)
  }

  return modifiedArr
}

const mapToNegativize = (sourceArray) => return naiveMap(sourceArray, -1)
