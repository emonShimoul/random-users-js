const loadData = async() => {
    const rand = Math.floor(Math.random() * 1000);
    console.log(rand);
    const url = `https://randomuser.me/api/`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}

loadData();

const displayData = (data) => {
    console.log(data.results[0]);
    const randomUser = document.getElementById('random-user');
    const div = document.createElement('div');
    div.innerHTML = `
        <img class='pb-3' src="${data.results[0].picture.large}">
        <p><span class='fw-bold text-success me-1'>Name: </span>${data.results[0].name.title} ${data.results[0].name.first}</p>
        <p><span class='fw-bold text-success me-1'>Gender: </span>${data.results[0].gender}</p>
        <p><span class='fw-bold text-success me-1'>Age: </span>${data.results[0].dob.age}</p>
        <p><span class='fw-bold text-success me-1'>Email: </span>${data.results[0].email}</p>
        <p><span class='fw-bold text-success me-1'>Phone: </span>${data.results[0].phone}</p>
        <p><span class='fw-bold text-success me-1'>City: </span>${data.results[0].location.city}</p>
        <p><span class='fw-bold text-success me-1'>Street Name: </span>${data.results[0].location.street.name}</p>
        <p><span class='fw-bold text-success me-1'>Street No. : </span>${data.results[0].location.street.number}</p>
    `;
    randomUser.appendChild(div);
}