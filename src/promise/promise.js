const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject("D'oh!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True 2 seconds before');
      }, 2000);
    } else {
      const error = new Error("D'oh!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log('Array of results', response);
  })
  .catch((error) => {
    console.error(error);
  });
