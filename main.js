// Зробити запит на API https://jsonplaceholder.typicode.com/users,
// щоб отримати доступ до масиву з 10 - ма фейковими користувачами і вивести його
// у вигляді списку на екран.Додати на сайт текстове поле, при введенні тексту
// в якому буде відбуватися фільтрація користувачів за іменами.Наприклад, коли
// ми вводимо ім'я "John", у списку повинні залишитись лише ті користувачі,
// ім'я яких теж John або які так починаються.

// Отримання данних з API
// async function getUsers() {
//   result = await fetch("https://jsonplaceholder.typicode.com/users");
//   return result.json();
// }

//Створення і вивід списку користувачів на екран
// async function showUsers() {
//   const usersList = await getUsers();
//   const users = document.querySelector(".users-list");
//   usersList.forEach((item) => {
//     const userItem = document.createElement("li");
//     userItem.classList.add("users-list-item");
//     userItem.innerText = item.name;
//     users.append(userItem);
//   });
// }

// Фільтрація користувачів
// function filterUsers(e) {
//   const usersListItems = document.querySelectorAll("li");
//   if (e.target.value.length === 0) {
//     document.querySelectorAll(".hidden").forEach((item) => {
//       item.classList.remove("hidden");
//     });
//   }
//   for (const user of usersListItems) {
//     if (!user.innerHTML.startsWith(e.target.value)) {
//       user.classList.add("hidden");
//     } else {
//       user.classList.remove("hidden");
//     }
//   }
// }

// showUsers();

// document.querySelector("input").addEventListener("keyup", filterUsers);
