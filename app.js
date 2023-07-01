
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const idHeader = document.createElement('th');
    const nameHeader = document.createElement('th');
    const cityHeader = document.createElement('th');
    idHeader.textContent = 'ID';
    nameHeader.textContent = 'Nombre';
    cityHeader.textContent = 'Ciudad';
    headerRow.appendChild(idHeader);
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(cityHeader);
    table.appendChild(headerRow);
    data.forEach(user => {
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const cityCell = document.createElement('td');
      idCell.textContent = user.id;
      nameCell.textContent = user.name;
      cityCell.textContent = user.address.city;
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(cityCell);
      table.appendChild(row);
    });
    document.body.appendChild(table);
  })
  .catch(error => console.error('Error:', error));

const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Buscar';
button.addEventListener('click', async () => {
  const userId = input.value;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    const user = {
      name: data.name,
      phone: data.phone
    };
    const result = document.createElement('p');
    result.textContent = `Nombre: ${user.name}, Teléfono: ${user.phone}`;
    document.body.appendChild(result);
  } catch (error) {
    console.error('Error:', error);
  }
});
document.body.appendChild(input);
document.body.appendChild(button);