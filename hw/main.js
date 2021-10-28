const getData = async () =>{
    let response = await axios.get('https://ergast.com/api/f1/2020/1/driverStandings.json')
    console.log(response.data)
    return response.data
};


const DOM_ELEMENTS = {
    list: 'season'
};



const createList = (driverId, givenName) =>{
    let html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${driverId}">${givenName}</a>`;
    document.querySelector(DOM_ELEMENTS.list).insertAdjacentHTML('beforeend', html)
};


const loadData = async() =>{
    const f1_driver = await getData();

    f1_driver.forEach(driver => createList(driverId, givenName))

}