const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'openstreetmap',
 

};
 
const geocoder = NodeGeocoder (options);
 
// Using callback


const res = geocoder.geocode({
    address: 'sango, ilorin',
    country: 'Nigeria',
    zipcode: '240213'
  })
  .then((response)=>{
      console.log(response)
  })
  .catch((error)=>{
    console.log(error)
})