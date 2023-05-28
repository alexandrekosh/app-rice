const listRideElement = document.querySelector('#rideList')

const allRides = getAllRides()
console.log(allRides)

allRides.forEach(async ([id, value]) => {
    const ride = JSON.parse(value)
    ride.id = id

    const firstPosition = ride.data[0]
    const firstLocationData =  await getLocationData(firstPosition.latitude, firstPosition.longitude);

    const itemElement = document.createElement('li');
    itemElement.innerText = `${firstLocationData.city} - ${firstLocationData.countryCode}`
    itemElement.id = ride.id; //adidiona o id como ride.id

    listRideElement.appendChild(itemElement)
});

async function getLocationData(latitude, longitude) {
    const url = `http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&=localityLanguage=en`
    const response = await fetch(url)
    return await response.json()
}