const m = require('./uniProtValidator');

//console.log(process.versions.v8)

// in the case where "check" is thedefault export of the module:

//m.default("ETR1")

m.check("ETR1")
console.log("Passed first check")
m.check("XXXXX") //should fail
