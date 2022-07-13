// // console.log(document);

// const body = document.body;
// // console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);




// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '28px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'blue';
// console.log(firstMenuItem);




// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// const noActiveLink = document.querySelector('.btn');
// console.log(noActiveLink.href);

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';


// const text = document.querySelector('.btn.gallery');
// console.log(text.textContent);

// text.textContent = 'Галлерея (по-русски)';
// console.log(text.textContent);

// text.style.backgroundColor = '#1E90FF';
// text.style.color = 'white';

// const imgHtml = document.querySelector('.image');
// console.log(imgHtml);
// imgHtml.setAttribute('alt', 'Каждый раз новая картинка')
// console.log(imgHtml.alt);
// console.log(imgHtml.attributes);

// //===================================================




// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);




// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


// const button = document.querySelector(".btn");
// const link = document.querySelector('.js-link');

// const handleClick = (event) => {
//   console.log("First callback!");
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);
// link.addEventListener('click', handleClick)




// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//     console.log(username.value, password.value);
//     console.log(event.type);
//     console.log(event.currentTarget);
// });



// document.addEventListener("keydown", event => {
//     event.preventDefault();
//     console.log("Keydown: ", event);
    // console.log(event.type);
    // console.log(event.currentTarget);
    // console.log("key: ", event.key);
    // console.log("code: ", event.code);
});

// document.addEventListener("keyup", event => {
//     event.preventDefault();
//     console.log("Keyup: ", event);
//     // console.log(event.type);
//     // console.log(event.currentTarget);
//     // console.log("key: ", event.key);
//     // console.log("code: ", event.code);
// });



// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//     console.log(`Login: ${login.value}, Password: ${password.value}`);
//     console.log(login);
//     console.log(password);
//   event.currentTarget.reset();
// }



// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage(type, key, code) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${event.type}</li>
//       <li><b>Key</b>: ${event.key}</li>
//       <li><b>Code</b>: ${event.code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (event.type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }




// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });


// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// console.log(select);
// console.log(select.children);
// console.log(select.children[0].value);
// console.log(select.children[1].value);
// console.log(select.options);

// const selectChildrens = select.children;

// console.log(selectChildrens);
// console.log(selectChildrens[1].value);

// selectChildrens.forEach((children, index) => console.log(`Индекс ${index}, значение ${children[index]}`));




// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }


