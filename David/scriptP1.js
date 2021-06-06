
/*
fetch("https://rickandmortyapi.com/api/episode")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {        
        console.log(data);
        */

        /*
        let select = document.querySelector("#season");
        let tabResult = data.results;
        const mainContainer = document.querySelector(".main");
            //console.log(select);
            select.addEventListener("change", (e) =>{
                let season = e.target.value;
                console.log(season);
                console.log(tabResult);
                mainContainer.innerHTML = "";
                for (let i = 0; i < tabResult.length; i++) {
                    //console.log(tabResult[i].episode);
                    let splitSeason = tabResult[i].episode.split("");
                    console.log(splitSeason[2]);
                    if (season == "s1" && splitSeason[2] == 1) {
                        addNewCard(tabResult[i]);
                    }
                    else if (season == "s2" && splitSeason[2] == 2) {
                        addNewCard(tabResult[i]);
                    }
                }
                    //console.log(splitSeason);

            })

            */
     /*})
    
    .catch(function (error) {
        console.error(error);
    })  */

/*
fetch("https://rickandmortyapi.com/api/episode?page=2")
    .then(function (resp) {
        return resp.json();
    })
    .then(function(data2){
        console.log(data2);
    })
    */

    /*
let tabFetch = [fetch("https://rickandmortyapi.com/api/episode"), fetch("https://rickandmortyapi.com/api/episode?page=2"), fetch("https://rickandmortyapi.com/api/episode?page=3")]
for (let j = 0; j < tabFetch.length; j++) {
    tabFetch[j].then(function (res) {
        return res.json();
    })
    .then(function (data) {        
        let tabData = [data.results];
        //console.log(tabData[0]);
        for (let i = 0; i < tabData.length; i++) {
            //console.log(tabData[0]);
            for (let j = 0; j < tabData[i].length; j++) {
                //console.log(tabData[i][j]);
                let select = document.querySelector("#season");
                const mainContainer = document.querySelector(".main");
                let allDataResults = (tabData[i])[j];
                //console.log(allDataResults.episode);
                select.addEventListener("change", (e) =>{
                    let season = e.target.value;
                    let splitSeason = allDataResults.episode.split("");
                    //console.log(splitSeason[2]);
                    //mainContainer.innerHTML = "";
                    //console.log(splitSeason);
                    if (season == "s1" && splitSeason[2] == 1) {
                        //console.log(allDataResults);
                        addNewCard(allDataResults);
                    } else if (season == "s2" && splitSeason[2] == 2) {
                        addNewCard(allDataResults);
                    } else if (season == "s3" && splitSeason[2] == 3) {
                        addNewCard(allDataResults);
                    } else if (season == "s4" && splitSeason[2] == 4) {
                        addNewCard(allDataResults);
                    } 
                })
            }
        }
        
     })
    .catch(function (error) {
        console.error(error);
    })
    
}
*/
let menuBtn = document.querySelector("#menu-mobile");
let firstBar = document.querySelector("#menu-mobile span:first-child");
let secondBar = document.querySelector("#menu-mobile span:nth-child(2)");
let thirdBar = document.querySelector("#menu-mobile span:last-child");
let navMobile = document.querySelector(".nav__mobile");

menuBtn.addEventListener("click", () => {
    if (firstBar.classList.contains("transition")) {
        firstBar.classList.remove("transition");
        secondBar.classList.remove("transition2");
        thirdBar.classList.remove("transition3");
        navMobile.classList.remove("appear");
    } else {
        firstBar.classList.add("transition");
        secondBar.classList.add("transition2");
        thirdBar.classList.add("transition3");
        navMobile.classList.add("appear");
    }
})


let urls = ["https://rickandmortyapi.com/api/episode", "https://rickandmortyapi.com/api/episode?page=2", "https://rickandmortyapi.com/api/episode?page=3"];
for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
}
Promise.all(urls.map(url => fetch(url)))
    .then(resp => Promise.all( resp.map(r => r.json())))
    .then(function (data){
        //console.log(data);
        for (let j = 0; j < data.length; j++) {
            //console.log(data[j].results);
        }
        let tab = data[0].results.concat(data[1].results, data[2].results);
        //console.log(tab);
        let select = document.querySelector("#season");
        const mainContainer = document.querySelector(".main");
        
            //console.log(select);
            for (let i = 0; i < tab.length; i++) {
                //console.log(tabResult[i].episode);
                let splitSeason = tab[i].episode.split("");
                //console.log(splitSeason[2]);
                if (splitSeason[2] == 1) {
                    addNewCard(tab[i]);
                }
            }
            let ep = document.querySelectorAll(".card--name");
                
                for (let i = 0; i < ep.length; i++) { 
                  ep[i].addEventListener('click', (e)=> {
                    //console.log(tab.filter(x => x.id == ep[i].id));
                    let objetEpisodeClicked = tab.filter(x => x.id == ep[i].id)[0];
                    let chara = document.querySelector(".characters");
                    const mainContainer = document.querySelector(".main");
                    mainContainer.classList.toggle("slide-right");
                    let footer = document.querySelector(".footer");
                      footer.classList.toggle("slide-right");
                    chara.innerHTML = "";
                    chara.classList.toggle("popup");
                    for (const character of objetEpisodeClicked.characters) {
                        fetch(character).then((resp)=> {
                            return resp.json()
                        }).then((respJson) => {
                            console.log(respJson);
                            chara.innerHTML += `<li class="description"><img src="${respJson.image}"/>${respJson.name}</li>`
                      })
                    }
                  })
                }
            select.addEventListener("change", (e) =>{
                let season = e.target.value;
                //console.log(season);
                let chara = document.querySelector(".characters");
                    chara.innerHTML = "";
                    chara.classList.add("popup");
                    chara.classList.toggle("popup");
                    mainContainer.classList.remove("slide-right");
                    let footer = document.querySelector(".footer");
                      footer.classList.remove("slide-right");
                mainContainer.innerHTML = "";
                for (let i = 0; i < tab.length; i++) {
                    //console.log(tabResult[i].episode);
                    let splitSeason = tab[i].episode.split("");
                    //console.log(splitSeason[2]);
                    if (season == "s1" && splitSeason[2] == 1) {
                        addNewCard(tab[i]);
                    }
                    else if (season == "s2" && splitSeason[2] == 2) {
                        addNewCard(tab[i]);
                    }
                    else if (season == "s3" && splitSeason[2] == 3) {
                        addNewCard(tab[i]);
                    } else if (season == "s4" && splitSeason[2] == 4) {
                        addNewCard(tab[i]);
                    }
                }

                let ep = document.querySelectorAll(".card--name");
                
                for (let i = 0; i < ep.length; i++) { 
                  ep[i].addEventListener('click', (e)=> {
                      console.log(tab.filter(x => x.id == ep[i].id));
                      let objetEpisodeClicked = tab.filter(x => x.id == ep[i].id)[0];
                      const mainContainer = document.querySelector(".main");
                      mainContainer.classList.toggle("slide-right");
                      let footer = document.querySelector(".footer");
                      footer.classList.toggle("slide-right");
                      let chara = document.querySelector(".characters");
                      chara.innerHTML = "";
                      chara.classList.toggle("popup");
                      /*chara.classList.remove("close");*/
                      for (const character of objetEpisodeClicked.characters) {
                          fetch(character).then((resp)=> {
                              return resp.json()
                            }).then((respJson) => {
                                //console.log(respJson);
                                chara.innerHTML += `<li class="description"><img src="${respJson.image}"/>${respJson.name}</li>`
                      })
                    }
                  })
                }
                
            })

    })
/*let chara = document.querySelector(".characters");
let cross = document.getElementById("close-popup");
cross.addEventListener("click", function(event) {
    if (event.target == chara) {
        chara.style.display="none";
    }
})*/



function addNewCard(episodes) {
    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML +=
        `<div class="card">
          <span class="card--name" id="${episodes.id}">${episodes.name}</span>
          <button class="button">${episodes.episode}</button>

        </div>`;
}
/*
let describ = document.querySelectorAll(".description");
for (let index = 0; index < describ.length; index++) {
    console.log(describ[0]);
    //for (const div of describ) {
      //  div.innerHTML += respJson.name;
    //}
}*/
//describ.innerHTML += respJson.name
/*
function getEpisodeDetails(listUri, divEp) {
    let reponse = [];
  
    for (const uri of listUri) {
      fetch(uri).then((resp)=> {
        return resp.json()
      }).then((resp2)=> {
        console.log(resp2.id)
        reponse.push(resp2);
        divEp.innerHTML += `<span> ${resp2.name} </span>`
      })
    }
}
*/

/*
function cardDescription(episodes) {
    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML +=
    `<div class="card--description">
    <div claas="card--perso">
    <img src="${episodes.characters}" alt="characters from rick and morty">
    </div>
    </div>`   
}
*/
