/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
function createEmployeeRecords(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(rec){
    return rec.firstName === firstName
})
}

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
 */

