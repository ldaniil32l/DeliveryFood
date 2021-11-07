const renderItems = (data) => {
    data.forEach(element => {
        console.log(element);
    });
}

fetch('https://mydeliveryfood-daniil32-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    });