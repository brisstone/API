const request =  require('request');

const home = '>'
const url =  "https://api.mapbox.com/geocoding/v5/mapbox.places/" + home + ".json?access_token=pk.eyJ1IjoiYnJpc3N0b25lIiwiYSI6ImNrZXBvanRsbTJrMzEyeW5wdTI4NjFuemQifQ.nEFfTXCWlfo3Y2RgII0I8g"
request({url: url, json: true}, (error, response)=>{
   
   
  
    if(error){
        return console.log('bad network')
    } else if(response.body.features.length === 0){
               return console.log('incorrect ')
    } else{
        console.log()
    
        console.log(response.body.features[0].center[0])
    }

    
    console.log(response.body.features[0].place_name)
})