const d = document,
  btnSubmit = d.getElementById("search"),
  inputSearch = d.getElementById("input-search"),
  imgPokemon = d.getElementById("img-pokemon-id"),
  namePokemon = d.getElementById("name-pokemon");

const getData = async (search = "") => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`),
      json = await res.json();

    let img = json.sprites.other.home.front_default,
      name = json.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    imgPokemon.src = img;
    namePokemon.innerText = name;
    inputSearch.value = "";
  } catch (err) {
    alert(`Lo lamentamos, no podemos mostrar la información de ${search}`);
    inputSearch.value = "";
    imgPokemon.src = "./pokeball.png";
    namePokemon.innerText = "";
    console.log(err);
    return;
  }
};

d.addEventListener("click", (e) => {
  if (e.target === btnSubmit) {
    e.preventDefault();
    let valueInput = inputSearch.value;

    if (valueInput.trim() === "") {
      return alert("Ingrese el nombre de algún pokemon");
    }

    getData(valueInput.toLowerCase());
  }
});
