// map-like methods
const naiveMap = (arr, multiplier) => {
  const mappedArr = []

  for (const e of arr) {
    mappedArr.push(e * multiplier)
  }

  return mappedArr
}

const mapToNegativize = (sourceArray) => naiveMap(sourceArray, -1)

const mapToNoChange = (sourceArray) => sourceArray

const mapToDouble = (sourceArray) => naiveMap(sourceArray, 2)

const mapToSquare = (sourceArray) => {
  const squaredArr = []

  for (const e of sourceArray) {
    squaredArr.push(e ** 2)
  }

  return squaredArr
}

// reduce-like methods
const naiveReduce = (arr, startingPoint) => {
  const reducedValue = 0 + startingPoint

  for (const e of arr) {
    reducedValue += e
  }

  return reducedValue
}
