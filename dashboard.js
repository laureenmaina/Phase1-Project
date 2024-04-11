//a GET request can be used to retrieve information about a specific IP address,
// while a POST request can be used to create a new IP address resource. 
//A PUT request can be used to update the state or details of an existing IP address resource, and a 
//DELETE request can be used to remove an IP address resource
document.addEventListener("DOMContentLoaded", () => {
    getLocationDetails()
    // likeLocation() 
    // updateLikes() 
  
  })

const YOUR_API_KEY="d3abded7f27a4ef8ae1c0dbdc874e905"
const ip="185.28.64.255"
// Get the required elements from the DOM
const ipInput = document.getElementById('ipInput');
const findLocationBtn = document.getElementById('location');
const locationDetails = document.getElementById('locationDetails');

// Add an event listener for the button click event
function  getLocationDetails(){
findLocationBtn.addEventListener('click', () => {
    const ip = ipInput.value;
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${YOUR_API_KEY}&ip=${ip}`)
        .then(response => response.json())
        .then(data => {
            locationDetails.innerHTML = `
                <p>Continent: ${data.continent_name}</p>
                <p>Continent Code: ${data.continent_code}</p>
                <p>Country: ${data.country_name}</p>
                <p>Country Code: ${data.country_code2}</p>
                <p>Calling code: ${data.calling_code}</p>
                <p>Region: ${data.state_prov}</p>
                <p>Capital city: ${data.city}</p>
                <p>Zip Code: ${data.zipcode}</p>
                <p>Latitude: ${data.latitude}</p>
                <p>Longitude: ${data.longitude}</p>
                <p>Timezone: ${data.time_zone.name}</p>
                <p>Timezone Offset: ${data.time_zone.offset}</p>
                <p>Currency: ${data.currency.name} (${data.currency.code})</p>
                <p>ISP: ${data.isp}</p>
                <p>State Province: ${data.state_prov}</p>
                <p>In European Union?: ${data.is_eu}</p>

            `;
        })
        .catch(error => console.error('Error:', error));
});}



    
