// const product = {
//   name: "Pants",
//   color: "black",
//   size: "XL",
//   price: "23$",
//   "is available": true,
//   printProduct() {
//     return `${this.name} -${this.price}`;
//   },
// };

// function product(name, size, color, price) {
//   return {
//     name,
//     size,
//     color,
//     price,
//     printProduct() {
//       return `${this.name} ${this.color}`;
//     },
//   };
// }

// console.log(product("T-shirt","XXL","black").printProduct());

// const availability = "is available";

// console.log(product["printProduct"]());

// constructor function

// function Product(name, age) {
//   this.name = name, this.age = age, (this.printProduct = () => `${this.name} ${this.age}`);
// }

// const result = new Product('Rabbi',18);

// console.log(result["printProduct"]());

// function printMyself(age) {
//   return `hello ${this} you are ${age}`;
// }

// const result = printMyself.bind('rabbi');

//  const output = result.call(undefined,18);

// const output = result.apply(undefined,[18]);

// console.log(output);

// user(1, "Rabbi", (user) => {
//   console.log(user);
//   getCourses(user.name, (courses) => {
//     console.log(`${user.name} has enrolled a course named ${courses[0]}`);

//     getPrice(courses[0], (prices) => {
//       console.log(
//         `${user.name} has enrolled a course named ${courses[0]} and the price of this course is ${prices[0]}`
//       );
//     });
//   });
// });

// function user(id, name, callback) {
//   setTimeout(() => {
//     callback({
//       id,
//       name,
//     });
//   }, 2000);
// }
// function getCourses(userName, callback) {
//   setTimeout(() => {
//     callback(["javaScript", "react", "nodeJs"]);
//   }, 2000);
// }

// function getPrice(course, callback) {
//   setTimeout(() => {
//     callback([2000, 3000, 5000]);
//   }, 2000);
// }

// working with promise

// function user(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "rabbi", age: 18 });
//     }, 2000);
//   });
// }

// function courses(course) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["javaScript", "reactJs", "nodeJs"]);
//     }, 2000);
//   });
// }

// function prices(prices) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([2000, 3000, 5000]);
//     }, 2000);
//   });
// }

// try {
//   async function getResult() {
//     const getUser = await user(1);
//     console.log(getUser);
//     const getCourses = await courses(getUser.name);
//     console.log(getCourses);
//     const getPrices = await prices(getCourses[0]);
//     console.log(getPrices);
//   }

//   getResult();
// } catch {
//   (err) => {
//     console.log(err.message);
//   };
// }

// user(1)
//   .then((user) => {
//     console.log(`${user.name} has enrolled a course`);
//     courses(user.name)
//       .then((courses) => {
//         console.log(`${user.name} has enrolled a course named ${courses[0]}`);

//         prices(courses[0])
//           .then((price) => {
//             console.log(
//               `${user.name} has enrolled a course named ${courses[0]} the price of this course is ${price[0]}`
//             );
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Working with Promise all and race

// const s1 = Promise.resolve("s1");
// const s2 = Promise.resolve("s2");
// const s3 = Promise.reject(new Error('erro'));

// Promise.all([s1, s2, s3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// // Promise.race([s1,s2,s3]).then((res) => {
// //   console.log(res);
// // });

// =============================================================================

// converting callback to async await
// const http = {
//   async getTodos(url) {
//     const res = await fetch(url)
//       .then((response) => response.json())
//       .then((res) => res.splice(0, 20));

//     console.log(res);
//   },

//   async getTodo(url) {
//     const res = await fetch(url).then((response) => response.json());

//     console.log(res);
//   },

//   async post(url, data) {
//     const res = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((response) => response.json());

//     console.log(res);
//   },

//   async update(url, data) {
//     const res = await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((response) => response.json());

//     console.log(res);
//   },
//   async delete(url) {
//     const res = await fetch(url, {
//       method: "DELETE",
//     }).then((response) => response.json());

//     console.log(res);
//   },
// };

// // calling methods
// try {
//   http.getTodos("https://jsonplaceholder.typicode.com/todos");
//   http.getTodo(`https://jsonplaceholder.typicode.com/todos/1`);
//   http.post("https://jsonplaceholder.typicode.com/todos", {
//     userId: 1,
//     title: "walking Around",
//     completed: false,
//   });

//   http.update("https://jsonplaceholder.typicode.com/todos/1", {
//     title: "walking around update",
//   });

//   http.delete("https://jsonplaceholder.typicode.com/todos/1");
// } catch {
//   (err) => {
//     console.log(err);
//   };
// }

//==========================================================================

// =============================================================================

// converting async await to promise

// const http = {
//   getTodos(url) {
//     const res = new Promise((resolve, reject) => {
//       fetch(url).then((data) => resolve(data.json()));
//     });

//     res.then((data) => console.log(data.splice(0, 20)));
//   },

//   getTodo(url) {
//     const res = new Promise((resolve, reject) => {
//       fetch(url).then((data) => resolve(data.json()));
//     });

//     res.then((data) => console.log(data));
//   },

//   post(url, data) {
//     const res = new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }).then((response) => resolve(response.json()));
//     });

//     res.then((data) => console.log(data));
//   },
//   update(url, data) {
//     const res = new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }).then((response) => resolve(response.json()));
//     });

//     res.then((data) => console.log(data));
//   },
//   delete(url) {
//     const res = new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "DELETE",
//       }).then((response) => resolve(response.json()));
//     });

//     res.then((data) => console.log(data));
//   },
// };

// // calling methods

// try {
//   http.getTodos("https://jsonplaceholder.typicode.com/todos");
//   http.getTodo("https://jsonplaceholder.typicode.com/todos/1");
//   http.post("https://jsonplaceholder.typicode.com/todos", {
//     userId: 1,
//     title: "walking Around",
//     completed: false,
//   });
//   http.update("https://jsonplaceholder.typicode.com/todos/1", {
//     title: "walking around update",
//   });
//   http.delete("https://jsonplaceholder.typicode.com/todos/1", {
//     title: "walking around update",
//   });
// } catch {
//   (err) => {
//     console.log(err);
//   };
// }

// try {
//   http.getTodos("https://jsonplaceholder.typicode.com/todos");
//   http.getTodo(`https://jsonplaceholder.typicode.com/todos/1`);
//   http.post("https://jsonplaceholder.typicode.com/todos", {
//     userId: 1,
//     title: "walking Around",
//     completed: false,
//   });

//   http.update("https://jsonplaceholder.typicode.com/todos/1", {
//     title: "walking around update",
//   });

//   http.delete("https://jsonplaceholder.typicode.com/todos/1");
// } catch {
//   (err) => {
//     console.log(err);
//   };
// }

//==========================================================================

// async function getTodos() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((res) => res.splice(0, 20));

//   console.log(data);

//   // http.get("https://jsonplaceholder.typicode.com/todos", function (data) {
//   //   console.log(data);
//   // });
// }

// function getTodo(id) {
//   http.getOne(
//     `https://jsonplaceholder.typicode.com/todos/${id}`,
//     function (data, error) {
//       if (error) {
//         console.log("err", error);
//       } else {
//         console.log(data);
//       }
//     }
//   );
// }

// function addTodo() {
//   http.post(
//     "https://jsonplaceholder.typicode.com/todos",
//     {
//       userId: 1,
//       title: "walking Around",
//       completed: true,
//     },
//     function (data, err) {
//       if (err) {
//         console.error("err", err);
//       }
//       console.log(data);
//       getTodo(data.id);
//     }
//   );
// }

// function updateTodo() {
//   http.update(
//     "https://jsonplaceholder.typicode.com/todos/1",
//     {
//       title: "walking around update",
//     },
//     function (data) {
//       console.log(data);
//     }
//   );
// }

// function deleteTodo() {
//   http.delete("https://jsonplaceholder.typicode.com/todos/1", function (data) {
//     console.log(data);
//   });
// }

// //add a todo
// //get the todo
// getTodos();
// addTodo();
// // getTodo()
// updateTodo();
// deleteTodo();
