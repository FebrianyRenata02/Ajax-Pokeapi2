function getPoke() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=36")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        const results = data.results;
        for (let i = 0; i < results.length; i++) {
          const address = results[i].url;
          fetch(address)
            .then((response) => response.json())
            .then((data) => {
              const name = data.name;
              const image = data.sprites.front_default;
              const type = data.types[0].type.name;
  
              const wrapper = document.getElementById("wrapper");
              const wrap = document.createElement("div");
              wrap.id = "wrap";
              wrap.className = type;
  
              const title = document.createElement("h2");
              title.innerText = `Name: ${name}`;
  
              const img = document.createElement("img");
              img.src = `${image}`;
  
              const gen = document.createElement("h3");
              gen.innerText = `Type: ${type}`;
  
              wrapper.appendChild(wrap);
              wrap.appendChild(title);
              wrap.appendChild(img);
              wrap.appendChild(gen);
            });
        }
      });
  }