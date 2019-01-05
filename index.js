function produceDrivingRange(blockRange){
  return function(start, finish){
    let end = parseInt(finish)
    let beginning = parseInt(start)
    let distanceOne = Math.abs(end - beginning)
    let distance = blockRange - distanceOne

    if (distance > 0){
      return `within range by ${distance}`
    } else {
      return `${Math.abs(distance)} blocks out of range`
    }
  }

}


function produceTipCalculator(num){
  return function(price){
    return num * price
  }
}

function createDriver(){
    let driverId = 0
    return class {
      constructor(name){
        this.id = ++driverId
        this.name = name
    }
  }
}
