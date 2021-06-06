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


let tabUrlsLocation = ["https://rickandmortyapi.com/api/location?", "https://rickandmortyapi.com/api/location?page=2", "https://rickandmortyapi.com/api/location?page=3", "https://rickandmortyapi.com/api/location?page=4", "https://rickandmortyapi.com/api/location?page=5", "https://rickandmortyapi.com/api/location?page=6"];

for (let iurl = 0; iurl < tabUrlsLocation.length; iurl++) {
    const urlLocation = tabUrlsLocation[iurl];
}

Promise.all(tabUrlsLocation.map(urlLocation => fetch(urlLocation)))
    .then(resp => Promise.all(resp.map(r => r.json())))

    .then(function (data) {



        let placeType = document.getElementsByClassName('type');

        for (let i = 0; i < placeType.length; i++) {

            placeType[i].addEventListener('click', function () {

                // let tabLieux = data.results
                let tabLieux = data[0].results.concat(data[1].results, data[2].results, data[3].results, data[4].results, data[5].results);

                let imgHomePlace= document.querySelector('.containerImage');
                imgHomePlace.style.display = "none";
                
                const location = document.querySelector('.cardPlace');
                location.innerHTML = " ";

                for (let index of tabLieux) {

                    let listUriResidents = index.residents
                    if (i == 0 && index.type == 'Planet') {
                        card(index);
                        // console.log(index);


                        getResidentsDetails(listUriResidents, index)
                        // console.log("liste:",listUriResidents)

                    } else if (i == 1 && index.type == 'Space station') {
                        card(index);
                        // console.log(index);


                        getResidentsDetails(listUriResidents, index)
                        // console.log("liste2 :", listUriResidents)

                    } else if (i == 2 && index.type != 'Planet' && index.type != 'Space station') {
                        card(index);
                        // console.log(index);


                        getResidentsDetails(listUriResidents, index)
                        //console.log("liste3 :", listUriResidents)

                    }

                }


                let bt = document.getElementsByClassName('buttonName');
                // let divResidents = document.getElementsByClassName('hide');
                console.log(bt)
                let cpt = 0

                for (let j = 0; j < bt.length; j++) {
                    console.log(bt[j]);

                    bt[j].addEventListener('click', function (event) {

                        let cible = event.target.nextElementSibling;
                        cible.classList.remove('hide');
                        let currentElement = document.querySelector('.show');

                         cpt++;
                         //console.log(cpt, currentElement)

                        if (cpt > 1) {

                            cible.classList.remove('hide');
                            cible.classList.add('show');

                            currentElement.classList.remove('show');
                            currentElement.classList.add('hide');
                        } else if (cpt = 1) {

                            cible.classList.remove('hide');
                            cible.classList.add('show');
                        }
                    })
                }

                //console.log('click', event.target.nextElementSibling)
            })

        }

    })


        
    

    .catch ((error) => {
    console.error(error)
})


function card(results) {
    // const imgPlace = document.getElementsByClassName('containerImgLieux');
    // imgPlace.innerHTML+=
    // ` <img src="${infoLocation.url}">`



    const location = document.querySelector('.cardPlace');
    location.innerHTML +=

        `<div class="containerInfoLieux" id="idplace-${results.id}">
     <div class="id">${results.id}</div>
     <div class="name">${results.name}</div>
     <div class="type">${results.type}</div>
     <div class="dimension">${results.dimension}</div>
     <div class="created">${results.created}</div>
     </div>
     <button class="buttonName">Residents</button><div class="divp hide" id="persoName-${results.id}"></div>`


}




function getResidentsDetails(listUriResidents, results) {

    for (const uri of listUriResidents) {
        fetch(uri)

            .then((response) => {

                return response.json()
            })

            .then((resp2) => {
                // console.log(resp2)


                let divResidents = document.querySelector(`#persoName-${results.id}`)
                divResidents.innerHTML += `<p class="p" > ${resp2.name} </p>`

            })
    }
}



   







