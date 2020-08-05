const axios = require('axios')
const assert = require('assert')

function mapToUniProt(prot){
  return axios.get("https://www.ebi.ac.uk/proteins/api/proteins", {
      params: {
        offset: 0,
        protein: prot
      }
    })
    .then(res => 
    {let proteins = res.data.filter(
      function(x) {return ("protein" in x)})
    //console.log("Number of protein entries found: " + proteins.length)
    return proteins
    })
    .catch(err => {console.log(err)})
}
  
async function check(prot) {
  let proteins = await mapToUniProt(prot);
  assert.notEqual(proteins.length, 0); 
  //if no entries found then input does not correspond to a protein in UniProt
  return prot
}
  
//exports.default = check

module.exports = {
 check
}
