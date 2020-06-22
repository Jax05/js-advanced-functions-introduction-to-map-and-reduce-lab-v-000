// map-like methods
const naiveMap = (arr, multiplier) => {
  const modifiedArr = []

  for (const e of arr) {
    modifiedArr.push(e * multiplier)
  }

  // return modifiedArr
}

const mapToNegativize = (sourceArray) => naiveMap(sourceArray, -1)

const mapToNoChange = (sourceArray) => sourceArray

const mapToDouble = (sourceArray) => naiveMap(sourceArray, 2)

const mapToSquare = (sourceArray) => {
  const squaredArr = []

  for (const e of sourceArray) {
    squaredArr.push(e ** 2)
  }

  // return squaredArr
}

// reduce-like methods
// const naiveReduce = (arr, startingPoint) => {}
