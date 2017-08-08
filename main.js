

// on enter or on click fa search the term
// onclick box go to link of recipe
// onhover box reveal list of ingredients
// on load display title of recipe
// on load display img of recipe as background of box

// if results[i].thumbnail === "" then {background img of box = }



let recipeSearch = document.querySelector("input");

// document.querySelector('i').addEventListener("click", function (e) {
//     // if (e.keycode === 13) {
//     alert("Your search results await");
//     // }
// });


recipeSearch.addEventListener("keydown", function (event) {
    let url;
    document.querySelector(".row").innerHTML = '';
    if (event.keyCode === 13) {
        url = "http://recipepuppyproxy.herokuapp.com/api/?q=" + recipeSearch.value;
    }
    axios.get(url)
        .then(function (response) {
            // console.log(response);

            let data;
            for (let i = 0; i < response.data.results.length; i++) {

                data = response.data.results[i];

                if (data.thumbnail === "") {
                    data.thumbnail = "./recipe_default.jpeg";
                }

                let box = `
        <a href="${data.href}">
        <div class="box" style="background-image: url(${data.thumbnail}); height:100;width:100;">
        <p>${data.title}</p>
        </div>
        </a>
        `
                if (recipeSearch.value === "avocado") {
                    document.body.style.backgroundImage = "url('./avocado.gif')";
                    // document.body.style.backgroundSize = "cover";
                } else if (recipeSearch.value === "chicken") {
                    document.body.style.backgroundImage = "url('./chicken.gif')";
                    // document.body.style.backgroundSize = "";
                } else if (recipeSearch.value === "beef") {
                    document.body.style.backgroundImage = "url('./cow.gif')";
                    // document.body.style.backgroundSize = "cover";
                } else {
                    document.body.style.backgroundImage = "";
                }


                document.querySelector(".row").innerHTML += box;
            }
        });
});

