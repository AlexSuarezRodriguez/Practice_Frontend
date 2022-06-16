const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("GOOD!");
    } else {
      reject("FAIL ");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//--------------------------------------------------
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("GOOD!");
      }, 2000);
    } else {
      const error = new Error("FAIL");
      reject(error);
    }
  });
};
somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//--------------------------------------------------
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("array", response);
  })
  .catch((err) => {
    console.error(err);
  });
