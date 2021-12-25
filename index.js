const { arrayContaining } = require("expect")

function findMatching(array, str){
    let driverList = array.filter(name => name.toLowerCase() === str.toLowerCase())
    return driverList
}

function fuzzyMatch(array, string){
    return array.filter(array => array.startsWith(string))
}

function matchName(array, str){
    return array.filter(array => array.name === str)}
