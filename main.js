async function getUsers() {
  result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
}

async function showUsers() {
  const usersList = await getUsers();
  const users = document.querySelector(".users-list");
  usersList.forEach((item) => {
    const userItem = document.createElement("li");
    userItem.classList.add("users-list-item");
    userItem.innerText = item.name;
    users.append(userItem);
  });
}

function filterUsers(e) {
  const usersListItems = document.querySelectorAll("li");
  if (e.target.value.length === 0) {
    [...document.getElementsByClassName("hidden")].forEach((item) => {
      item.classList.remove("hidden");
    });
  }
  for (const user of usersListItems) {
    if (!user.innerHTML.startsWith(e.target.value)) {
      user.classList.add("hidden");
    } else {
      user.classList.remove("hidden");
    }
  }
}

showUsers();

document.querySelector("input").addEventListener("keyup", filterUsers);
