const divListEpisode = document.querySelector('#list-episodes');
let tabFetch = ["https://rickandmortyapi.com/api/episode", "https://rickandmortyapi.com/api/episode?page=2", "https://rickandmortyapi.com/api/episode?page=3"]
/*
let select = document.getElementById("season");
select.addEventListener("change", (e) =>{
    let saison = (e.target.value);
    switch (saison) {
        case "s1": fetch(tabFetch[0])   
            break;
        case "s2" : fetch(tabFetch[1])
            break;
        case "s3" : fetch(tabFetch[2])
            break;
        default:
            break;
    }
})
*/

fetch(tabFetch[0])
.then((response)=> {
  return response.json();
})
.then((responJson) => {
  let listEpisode = responJson.results;
  console.log(listEpisode);

  for (const episode of listEpisode) {
    let select = document.getElementById("season");
    let splitSeason = episode.episode.split("");
    console.log(splitSeason);
    select.addEventListener("change", (e) =>{
        let saison = (e.target.value);
        if (saison == "s1" && splitSeason[2] == 1) {
            divListEpisode.innerHTML +=
        `<div class="episode-name" id="episode-${episode.id}">${episode.name}</div>`;
        }
        else if (saison == "s2" && splitSeason[2] == 2) {
            divListEpisode.innerHTML +=
        `<div class="episode-name" id="episode-${episode.id}">${episode.name}</div>`;
        } else if (saison == "s3" && splitSeason[2] == 3) {
            divListEpisode.innerHTML +=
        `<div class="episode-name" id="episode-${episode.id}">${episode.name}</div>`;
        } else if (saison == "s4" && splitSeason[2] == 4) {
            divListEpisode.innerHTML +=
        `<div class="episode-name" id="episode-${episode.id}">${episode.name}</div>`;
        }
    })
    // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
  }
  
  // toute les div avec la class episode-name
  let divEpisode = document.querySelectorAll('.episode-name'); 

  //console.log('données en index 0 : ', listEpisode[0]);
  //console.log('element HTML en index 0 : ', divEpisode[0]);

  for (let index = 0; index < divEpisode.length; index++) {
    divEpisode[index].addEventListener('click', () => {
      let listUriCharacter = listEpisode[index].characters;
      console.log(listUriCharacter);
      getEpisodeDetails(listUriCharacter, divEpisode[index]);
    });
  }
})
.catch((error) => {
  console.error(error);
})


function getEpisodeDetails(listUriCharacter, divEp) {
    let reponse = [];

    for (const uri of listUriCharacter) {
        fetch(uri).then((resp) => {
            return resp.json()
        }).then((resp2) => {
            //console.log(resp2.id)
            reponse.push(resp2);
            divEp.innerHTML += `<span> ${resp2.name} </span>`
        })
    }
}