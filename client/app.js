function fetchData() {
  fetch("http://localhost:2000")
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = data[i].name;

        document.querySelector(".list").append(div);
      }
    });
}

window.addEventListener("load", () => {
  fetchData();

  document.querySelector(".Form").addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(e.target.children[0]);

    const newData = {
      name: e.target.children[0].value,
    };

    if (e.target.children[0].value.length === 0)
      return alert("put something in niga");

    fetch("http://localhost:2000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });

    console.log(newData);

    document.querySelector(".list").innerHTML = ""
    fetchData();

    e.target.children[0].value = ""
  });
});
