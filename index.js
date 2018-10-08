// Code your solution in this file!
// const reduce = function (agg, el, i, arr) {
//     return [...agg, el.name];
// };

function logDriverNames(drivers) {
    drivers.forEach( function (driver) {
        console.log(driver.name)
    })
}


function logDriversByHometown(array, city) {
    array.filter(function(driver){
        if (driver.hometown === city){
        console.log(driver.name)}
    })
}

function driversByRevenue(array) {
    result = array.slice().sort(function(driverA, driverB){
        if (driverA.revenue > driverB.revenue)
            return 1
        if (driverA.revenue === driverB.revenue)
            return 0
        if (driverA.revenue < driverB.revenue)
            return -1
    } )
    console.log(result.map(function (driver){
        return driver.revenue
    }))
    return result
}

function driversByName(array) {
    return array.slice().sort(function (driver1, driver2){
        return driver1.name.localeCompare(driver2.name)
    })
}

function totalRevenue(array){
    return array.reduce(function(result, driver){
        return result += driver.revenue;
    },0)
}

function averageRevenue(array) {
    return totalRevenue(array) / array.length
}