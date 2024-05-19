document.addEventListener('DOMContentLoaded', (event) => {
    const nameElement = document.getElementById('name');
    const ageElement = document.getElementById('age');
    const addressElement = document.getElementById('address');
    const phoneElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');

    // Let's make it fun and dynamic
    const names = ["John Doe", "Jane Smith", "Bilbo Baggins", "Sherlock Holmes"];
    const ages = [25, 30, 111, 40];
    const addresses = ["123 Main St", "221B Baker St", "Bag End, Shire", "742 Evergreen Terrace"];
    const phones = ["555-555-5555", "123-456-7890", "987-654-3210", "555-867-5309"];
    const emails = ["john@example.com", "jane@example.com", "bilbo@shire.com", "sherlock@detective.com"];

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    nameElement.innerText = getRandomElement(names);
    ageElement.innerText = getRandomElement(ages);
    addressElement.innerText = getRandomElement(addresses);
    phoneElement.innerText = getRandomElement(phones);
    emailElement.innerText = getRandomElement(emails);
});
