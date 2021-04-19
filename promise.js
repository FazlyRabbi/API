
// converting async await to promise

const http = {
    getTodos(url) {
      const res = new Promise((resolve, reject) => {
        fetch(url).then((data) => resolve(data.json()));
      });
  
      res.then((data) => console.log(data.splice(0, 20)));
    },
  
    getTodo(url) {
      const res = new Promise((resolve, reject) => {
        fetch(url).then((data) => resolve(data.json()));
      });
  
      res.then((data) => console.log(data));
    },
  
    post(url, data) {
      const res = new Promise((resolve, reject) => {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => resolve(response.json()));
      });
  
      res.then((data) => console.log(data));
    },
    update(url, data) {
      const res = new Promise((resolve, reject) => {
        fetch(url, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => resolve(response.json()));
      });
  
      res.then((data) => console.log(data));
    },
    delete(url) {
      const res = new Promise((resolve, reject) => {
        fetch(url, {
          method: "DELETE",
        }).then((response) => resolve(response.json()));
      });
  
      res.then((data) => console.log(data));
    },
  };
  
  // calling methods
  
  try {
    http.getTodos("https://jsonplaceholder.typicode.com/todos");
    http.getTodo("https://jsonplaceholder.typicode.com/todos/1");
    http.post("https://jsonplaceholder.typicode.com/todos", {
      userId: 1,
      title: "walking Around",
      completed: false,
    });
    http.update("https://jsonplaceholder.typicode.com/todos/1", {
      title: "walking around update",
    });
    http.delete("https://jsonplaceholder.typicode.com/todos/1", {
      title: "walking around update",
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
  