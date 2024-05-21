const headeriten = document.querySelector("#boxlist");

fetch("https://autoapi.dezinfeksiyatashkent.uz/api/models")
  .then(response => response.json())
  .then(data => {
    data.data.forEach((element, i) => {
      const listitem = document.createElement("li");
      const paragraf = document.createElement("p");
      const petr = document.createElement("p");
      listitem.style.display = "flex";
      listitem.style.width = "890px";
      listitem.style.justifyContent = "space-between";
      const pet = document.createElement("p");
      pet.textContent = i + 1;
      listitem.appendChild(pet);
      paragraf.textContent = element.name;
      petr.textContent = element.slug;
      listitem.appendChild(paragraf);
      listitem.appendChild(petr);
      headeriten.appendChild(listitem);
    });
  });

const Form = document.querySelector("#main-form");
const btnjon = document.querySelector("#header-btn");
btnjon.addEventListener("click", e => {
  e.preventDefault();
  Form.style.display = "block";
  Form.style.textAlign = "center";
  Form.style.border = "3px solid black";
  Form.style.width = "300px";
  Form.style.padding = "80px";
  Form.style.position = "fixed";
  Form.style.height = "auto"; // Corrected typo
  Form.style.marginTop = "-1300px"; // This is a large negative margin, check if this is intentional
  Form.style.marginLeft = "500px";
  Form.style.backgroundColor = "aliceblue";
});

const test = document.querySelector("#main-select");

fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
  .then(response => response.json())
  .then(data => {
    data.data.forEach(element => {
      const option = document.createElement("option");
      option.textContent = element.title;
      option.value = element.id;
      test.appendChild(option);
    });
  });

const mainbtn = document.querySelector("#mainbtn");
const mainbtnjon = document.querySelector("#mainbtnjon");
const inputes = document.querySelector("#main-inputcha");
mainbtnjon .addEventListener("click", (e)=>{
    e.preventDefault()
    Form.style.display = "none";
})

mainbtn.addEventListener("click", e => {
  e.preventDefault();

  fetch("https://autoapi.dezinfeksiyatashkent.uz/api/models", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputes.value,
      brand_id: test.value,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    window.location.reload();
  })
  .catch(err => {
    console.error(err);
  });
});

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTczNzkzNTUtZDNjYi00NzY1LTgwMGEtNDZhOTU1NWJiOWQyIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxNDEyNzUwMiwiZXhwIjoxNzQ1NjYzNTAyfQ.vvgAX4qmbf63w6k5JYgDXKTCwuxyJ8Z8ApPcQTCsbOU";