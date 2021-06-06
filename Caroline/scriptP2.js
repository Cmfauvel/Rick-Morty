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


const cardPerso = document.querySelector(".perso__cards");
// const containerNames = document.querySelector(".perso__names");
// const epPerso = document.querySelector(".perso__ep")

let urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/character/?page=2", "https://rickandmortyapi.com/api/character/?page=3"];
for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
}
Promise.all(urls.map(url => fetch(url)))
    .then(resp => Promise.all(resp.map(r => r.json())))

    .then(function (data) {
        let tabSpecies = document.getElementsByClassName('species');
        for (let i = 0; i < tabSpecies.length; i++) {
            // console.log(tabSpecies);
            tabSpecies[i].addEventListener('click', () => {
                let imgHomePersoMob = document.querySelector('.imgMob')
                let imgHomePersoDes = document.querySelector('.imgDes')
                imgHomePersoMob.classList.add('hide');
                imgHomePersoDes.style.display = 'none';

                let tabData = data[0].results.concat(data[1].results, data[2].results);
                cardPerso.innerHTML = "";
                for (let perso of tabData) {

                    if (perso.species == "Human" && i == 0) {
                        createCard(perso);
                        getCharacterDetails(perso);
                        let listUriCharacter = perso.episode;
                        // console.log(perso.episode)    
                        getCharacterEpisodes(listUriCharacter, perso);


                    } else if (perso.species === "Alien" && i == 1) {
                        createCard(perso);
                        getCharacterDetails(perso);

                        let listUriCharacter = perso.episode;
                        // console.log(perso.episode)    


                        getCharacterEpisodes(listUriCharacter, perso);
                    } else if (perso.species != "Human" && perso.species != "Alien" && i == 2) {
                        createCard(perso);
                        getCharacterDetails(perso);

                        let listUriCharacter = perso.episode;
                        // console.log(perso.episode)    
                        getCharacterEpisodes(listUriCharacter, perso);
                    }
                }

                let allCards = document.querySelectorAll(".perso__cards");

                for (let card = 0; card < allCards.length; card++) {
                    
                    let btnsPerso = document.querySelectorAll('.button__perso');
                    let cpt = 0;

                    console.log(btnsPerso)
                    for (let btn = 0; btn < btnsPerso.length; btn++) {
                        btnsPerso[btn].addEventListener('click', event => {
                            //console.log(event.target.parentNode.parentNode.nextElementSibling)
                            let cibleClick = event.target.parentNode.parentNode.nextElementSibling;
                            let currentElement = document.querySelector('.show');
                            cpt++;
                            console.log(cpt, currentElement)
                            if (cpt > 1) {
                                cibleClick.classList.remove('hide');
                                cibleClick.classList.add('show');
                                currentElement.classList.remove('show');
                                currentElement.classList.add('hide');
                            } else if (cpt = 1) {
                                cibleClick.classList.remove('hide');
                                cibleClick.classList.add('show');
                            }
                        })
                    }
                }
            })
        }
    })
    .catch((error) => {
        console.error(error);
    })


function createCard(character) {
    cardPerso.innerHTML += `<div class="perso__card id="perso-${character.id}">
                                <div class="container__img--perso">
                                        <img class="avatar" src="${character.image}">
                                </div>
                                <div class="container__button">
                                    <button class="button__perso" id="btnPerso-${character.id}">${character.name}</button>
                                </div>
                            </div>`
}

function getCharacterDetails(results) {

    cardPerso.innerHTML += `<div class="perso__details hide" id="details-char-${results.id}"><div>Status : ${results.status}</div>
    <div>Espèce : ${results.species}</div>
    <div>Type : ${results.type}</div>
    <div>Genre : ${results.gender}</div>
    <div>Origine : ${results.origin.name}</div>
    <div>Dernier lieu : ${results.location.name}</div>
    <div id="ep-char-${results.id}" class="ep__number">Présent dans ${results.episode.length} épisode(s).</div><ul id="list-ep-${results.id}" class="listEp"></ul></div>`
}

function getCharacterEpisodes(listUriEpisode, results) {
    let reponse = [];

    for (const uri of listUriEpisode) {
        fetch(uri)
            .then((response) => {
                // console.log(response.json())           
                return response.json()
            }).then((ep) => {
                // console.log(ep)
                // reponse.push(ep);
                let ulEp = document.getElementById(`list-ep-${results.id}`)
                ulEp.innerHTML += `<li class="elemList__ep">${ep.name}</li>`
            })
    }
}


