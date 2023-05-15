const listRideElement = document.querySelector('#rideList')

const allRides = getAllRides()
console.log(allRides)

allRides.forEach(([id, value]) => {
    const ride = JSON.parse(value)
    ride.id = id

    const itemElement = document.createElement('li');
    itemElement.innerText = ride.id;
    itemElement.id = ride.id; //adidiona o id como ride.id

    listRideElement.appendChild(itemElement)
});