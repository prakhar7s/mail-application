export const createNewUser = (user) => {
  console.log("sd");

  fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...user,
    }),
  }).then((res) => console.log(res));
};
