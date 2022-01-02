const root = document.querySelector("body");

async function getData() {
  try {
    const data = await fetch("http://localhost:5000/");
    const results = await data.json();

    results.map((result) => {
      let likes = 0;
      let stored = localStorage.getItem(result.title);
      const container = document.createElement("div");
      container.classList.add("container");
      const card = document.createElement("div");
      card.classList.add("card");
      const favThing = document.createElement("h1");
      favThing.textContent = result.title;
      const counter = document.createElement("p");
      counter.classList.add("counter");
      if (stored) {
        counter.textContent = stored;
      } else {
        counter.textContent = likes;
      }
      const icon = document.createElement("i");
      icon.classList.add("fas");
      icon.classList.add("fa-sort-up");

      container.appendChild(card);
      counter.appendChild(icon);
      card.appendChild(favThing);
      card.appendChild(counter);

      root.appendChild(container);

      likes = stored;

      counter.addEventListener("click", () => {
        likes++;
        counter.textContent = likes;
        counter.appendChild(icon);
        localStorage.setItem(result.title, likes);
      });
      return;
    });
  } catch (error) {
    console.log(error);
  }
}
getData();
