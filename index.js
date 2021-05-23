function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length -2)
}
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(fareQuintupler){
    return function(){ 
    return fareQuintupler * 5
    }
    }

    function fareDoubler(fare){
        return fare * 2
    }


    function fareTripler(fare){
        return fare * 3
    }

   function selectDifferentDrivers(arrayOfDrivers, Wheelperson){
       return Wheelperson(arrayOfDrivers)
   }