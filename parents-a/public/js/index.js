//Mon objet stockant mes données 
let data = []
    // init du slider (qui peut aussi faire des fondus enchainé)
let mySlidr = slidr.create('slidr', {
    breadcrumbs: true,
    controls: 'none',
    direction: 'horizontal',
    fade: false,
    keyboard: true,
    overflow: true,
    pause: false,
    theme: '#222',
    timing: { 'linear': '1.5s ease-in' },
    touch: true,
    transition: 'linear'
}).start();

function nextSlide(page, data) {
    string = 'page-' + page
    console.log("Trig")
    mySlidr.slide(string);
    choixSlide(page, data);
}

function choixSlide(num, data) {

    if (num == '1_1') { initSlide1_1(data) }

    if (num == '2') { initSlide2(data) }

    if (num == '2_1') { initSlide2_1(data) };

    if (num == '3') { initSlide3(data) };

    if (num == '4') { initSlide4(data) };

    if (num == '5') { initSlide5(data) }

    if (num == '6') { initSlide6(data) }

    if (num == '7') { initSlide7(data) }

    if (num == '8') { initSlide8(data) }

    if (num == '9') { initSlide9(data) }

    if (num == '10') { initSlide10(data) }

    if (num == 'resultats') { initSlideResultat(data) }
}

//Transition quand appuie sur logo page 1
let initSlide1 = function() {

    d3.select('#logo').on('click', function() {
        nextSlide('1_1');
    });
}

//Slide de transi 
let initSlide1_1 = function() {

        //Transi 1.2 vers 2(Camille) 
        d3.select('#t').on('click', function() {
            nextSlide('2')
        });
    }
    /*
    let initSlide2 = function() {
        setTimeout(suiteTraitement, 1000)
        function suiteTraitement()
        {
            mySlidr.slide('page-2.1');
            initSlide2_1();
        }
    }*/


function disappear(id) {
    d3.select(id)
        .transition()
        .duration(700)
        .style("opacity", 0)
}

function appear(id) {
    d3.select(id)
        .transition()
        .delay(600)
        .duration(700)
        .style("opacity", 1)
}

//Camille se présente
let initSlide2 = function() {
    //Transi Camille to Pret a démarrer 

    d3.select('#button-p2-1').on('click', function() {

        //Disparition de la 1 bulle 
        disappear('#disappear')
        disappear('#vector-p2-1')

        appear('#appear')
        appear('#vector-p2-1')

    });

    //transi next slide
    d3.select('#button2-p2-2').on('click', function() {
        nextSlide('2_1')
    });
    //Retour arriere
    d3.select('.button_retour').on('click', function() {
        nextSlide('1')
    });

}

//Age ?
let initSlide2_1 = function() {

    //Age -> Aventurier
    //recupérer l'age

    d3.select('#trois_eleph-p2_1').on('click', async function() {
        console.log(d3.event.target.id);
    });

    d3.select('#six_eleph-p2_1').on('click', async function() {
        console.log(d3.event.target.id);
        nextSlide('3');
    });

    d3.select('#neuf_eleph-p2_1').on('click', async function() {
        console.log(d3.event.target.id);
        nextSlide('3');

    });


    //Retour arriere
    d3.selectAll('.button_retour').on('click', function(e) {
        console.log(d3.event.target.id);
        nextSlide('2')
    });
}

//Premiere question : aventurier ? 
let initSlide3 = function() {
    //Aventurier -> Plein la vue
    d3.select('#bouton_non_aventurier_anime-p3').on('click', async function() {
        data = await fetch("/parents-a/parc/non-aventurier", { mode: 'no-cors' }).then(response => response.json()).then(d => { return d });
        nextSlide('7', data);
        console.log(data);
    });
    d3.select('#bouton_aventurier_anime-p3').on('click', async function() {
        data = await fetch("/parents-a/parc/aventurier", { mode: 'no-cors' }).then(response => response.json()).then(d => { return d });
        nextSlide('4', data);
        console.log(data);

    });
    //Retour arriere
    d3.selectAll('.button_retour').on('click', function() {
        nextSlide('2')
    });
}

//Plein la vue 
let initSlide4 = function() {
    //Plein la vue -> avec quoi 
    d3.select("#oh_oui_anime-p4").on('click', async function() {
        data = await fetch("/parents-a/parc/aventurier/plein-la-vue", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
        nextSlide('5', data);
        console.log(data);
    });
    d3.select("#mais_non_anime-p4").on('click', async function() {
        nextSlide('9', data);
        console.log(data);
    });
    //Retour arriere
    d3.selectAll('.button_retour').on('click', function() {
        nextSlide('3')
    });
}

//Okey mais Avec quoi
let initSlide5 = function() {

        //Plein la vue -> avec quoi 
        d3.select("#button_oui-p5").on('click', async function() {
            data = await fetch("/parents-a/parc/aventurier/plein-la-vue/beau-decor", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            nextSlide('10', data);
            console.log(data);
        });
        d3.select("#button_non-p5").on('click', async function() {
            data = await fetch("/parents-a/parc/aventurier/plein-la-vue/beau-paysage", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            nextSlide('9', data);
            console.log(data);
        });
        //Retour arriere
        d3.selectAll('.button_retour').on('click', function() {
            nextSlide('4')
        });
    }
    //Sentir de nouveaux parfums
let initSlide6 = function(db) {
        d3.select("#bouton_oh_oui_anime-p6").on('click', async function() {
            data = await fetch("/parents-a/parc/non-aventurier/nature/parfums", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            checkData(data, db, 10);
            nextSlide('10', data); //FINAL SLIDE
            console.log(data);
        });
        d3.select("#texte_mais_non-p6").on('click', async function() {
            data = await fetch("/parents-a/parc/non-aventurier/nature", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            checkData(data, db, 10)
            nextSlide('10', data); //FINAL SLIDE
            console.log(data);
        });
        d3.selectAll('.button_retour').on('click', function() {
            nextSlide('5')
        });
    }
    //Preference entre animaux et bruits nature 
let initSlide7 = function() {

        d3.select("#bouton_oui_p7").on('click', async function() {
            data = await fetch("/parents-a/parc/non-aventurier/animaux/decouvrir-arbres", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            nextSlide('8', data);
            console.log(data);
        });
        d3.select("#bouton_non_p7").on('click', async function() {
            data = await fetch("/parents-a/parc/non-aventurier/nature", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            nextSlide('6', data);
            console.log(data);
        });
        d3.selectAll('.button_retour').on('click', function() {
            nextSlide('5')
        });
    }
    // /Decouverte d'arbres différents 

let initSlide8 = function() {

    d3.select("#BOUTON_ARBRES_v2-p8").on('click', async function() {
        data = await fetch("/parents-a/parc/non-aventurier/animaux", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
        nextSlide('6', data);
        console.log(data);
    });
    d3.select("#BOUTON_BOUDE-ARBRES_v2-p8").on('click', async function() {
        data = await fetch("/parents-a/parc/non-aventurier/nature", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
        nextSlide('10', data); //final slide
        console.log(data);
    });
    d3.selectAll('.button_retour').on('click', function() {
        nextSlide('5')
    });
}

let initSlide9 = function(db) {

    d3.select("#animaux-heureux-p9").on('click', async function() {
        data = await fetch("/parents-a/parc/aventurier/plein-la-vue/beau-paysage/avec-animaux", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
        checkData(data, db, 10);
        nextSlide('10', data);
        console.log(data);
    });
    d3.select("#BOUTON_NON_ANIMAUX-sourcils-p9").on('click', async function() {
        checkData(data, db, 10);
        nextSlide('10', data);
        console.log(data);
    });
    d3.selectAll('.button_retour').on('click', function() {
        nextSlide('10')
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomParc(target, source) {
    let index = 0;

    while (index < source.length && target.find(p => p.id === source[index].id)) {
        index++;
    }
    if (index < source.length)
        target.push(source[index]);
    else console.log('not found');
}

function checkData(d, db, max) {
    if (d.length < max && db.length >= max) {
        console.log('Resultats inferieurs à ' + max);
        for (var i = d.length; i < max; i++) {
            getRandomParc(d, db);
        }
    }
}

let initSlide10 = function(db) {

        d3.select("#sud-p10").on('click', async function() {
            data = await fetch("/parents-a/parc/Sud", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            checkData(data, db, 3);
            nextSlide('resultats', data);
            console.log(data);
        });
        d3.select("#ouest-p10").on('click', async function() {
            data = await fetch("/parents-a/parc/Ouest", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            checkData(data, db, 3);
            nextSlide('resultats', data);
            console.log(data);
        });
        d3.select("#nord-est-p10").on('click', async function() {
            data = await fetch("/parents-a/parc/Nord", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            checkData(data, db, 3);
            nextSlide('resultats', data);
            console.log(data);
        });
        d3.select("#centre-p10").on('click', async function() {
            data = await fetch("/parents-a/parc/Centre", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
            checkData(data, db, 3);
            nextSlide('resultats', data);
            console.log(data);
        });
        d3.selectAll('.button_retour').on('click', function() {
            nextSlide('5')
        });
    }
    //
let initSlideResultat = function(db) {

    d3.select("#animaux-heureux-p9").on('click', async function() {
        data = await fetch("/parents-a/parc/aventurier/plein-la-vue/beau-paysage/avec-animaux", { method: "POST", body: JSON.stringify({ "data": data }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then(response => response.json()).then(d => { return d });
        nextSlide('10', data);
        console.log(data);
    });
    d3.select("#BOUTON_NON_ANIMAUX-sourcils-p9").on('click', async function() {
        nextSlide('10', data);
        console.log(data);
    });
    d3.select('#parc1-titre').text(function(d) { return data[2]['Nom formel'] });
    d3.select('#parc2-titre').text(function(d) { return data[1]['Nom formel'] });
    d3.select('#parc3-titre').text(function(d) { return data[0]['Nom formel'] });
    d3.select('#parc1-titre').text(function(d) { return data[2]['Nom formel'] });
    d3.select('#parc2-titre').text(function(d) { return data[1]['Nom formel'] });
    d3.select('#parc3-titre').text(function(d) { return data[0]['Nom formel'] });


    d3.selectAll('.button_retour').on('click', function() {
        nextSlide('10')

    });

    d3.select('#random2').on('click', () => {
        console.log('random 2');
        const index = parseInt(d3.event.target.id.split('random')[1]);
        console.log(db);
        getRandomParc(podium, db);
        d3.select('#parc2-titre').text(function(d) { return podium[podium.length - 1]['Nom formel'] });
        podium[1] = podium[podium.length - 1];
        chooseimage(podium, div2);
        new radar(podium[0], podium[1], podium[2]);
    });
    d3.select('#random1').on('click', () => {
        console.log('random 2');
        const index = parseInt(d3.event.target.id.split('random')[1]);
        console.log(db);
        getRandomParc(podium, db);
        d3.select('#parc1-titre').text(function(d) { return podium[podium.length - 1]['Nom formel'] });
        podium[2] = podium[podium.length - 1];
        chooseimage(podium, div1);
        new radar(podium[0], podium[1], podium[2]);
    });
    d3.select('#random3').on('click', () => {
        console.log('random 3');
        const index = parseInt(d3.event.target.id.split('random')[1]);
        console.log(db);
        getRandomParc(podium, db);
        d3.select('#parc3-titre').text(function(d) { return podium[podium.length - 1]['Nom formel'] });
        podium[0] = podium[podium.length - 1];
        chooseimage(podium, div3);
        new radar(podium[0], podium[1], podium[2]);
    });
    let podium = [data[0], data[1], data[2]]
    new radar(podium[0], podium[1], podium[2]);
    const div1 = document.getElementById("parc1-pr")
    console.log(div1.id);
    const img1 = document.createElement("img")
    const div2 = document.getElementById("parc2-pr")
    const img2 = document.createElement("img")
    const div3 = document.getElementById("parc3-pr")
    const img3 = document.createElement("img")
    div1.appendChild(img1)
    console.log(div1.firstChild);
    chooseimage(data, div1);
    div2.appendChild(img2);
    chooseimage(data, div2);
    div3.appendChild(img3);
    chooseimage(data, div3);

}

let im_sources = {
        "ILE DE VERSAILLES": "img/images_parcs_jardins/ile-de-versailles.jpg",
        "PLANTES": "img/images_parcs_jardins/jardin-des-plantes.jpg",
        "BEAULIEU": "img/images_parcs_jardins/parc-de-beaulieu.jpg",
        "BEAUJOIRE": "img/images_parcs_jardins/parc-de-la-beaujoire.jpg",
        "CHANTRERIE": "img/images_parcs_jardins/Parc-de-la-Chantrerie.jpg",
        "PROCE": "img/images_parcs_jardins/Parc-de-proce-Nantes.jpg",
        "LE OBLATES": "img/images_parcs_jardins/Parc-des-oblates-Nantes.jpg",
        "BLOTTEREAU": "img/images_parcs_jardins/parc-du-grand-bloterreau.jpg"
    }
    // parc 1 data[2]  // parc 2 data[1] // parc 3  data[0]


function chooseimage(data, div) {
    var num = div.id.match(/\d+/g);
    console.log(num[0]);
    Object.keys(im_sources).forEach(d => {
        if (num[0] === "1") {
            if (data[2]['Nom'] === d) {
                div.firstChild.src = im_sources[d]
            }

        }
        if (num[0] === "2") {
            if (data[1]['Nom'] === d) {
                div.firstChild.src = im_sources[d]
            }

        }
        if (num[0] === "3") {
            if (data[0]['Nom'] === d) {
                div.firstChild.src = im_sources[d]
            }
        }

    });
    if (num[0] === "1" && div.firstChild.src === "" || div.firstChild.src === undefined) {
        div.firstChild.src = "img/images_parcs_jardins/lambda-1.jpg"
    }
    if (num[0] === "2" && div.firstChild.src === "" || div.firstChild.src === undefined) {
        div.firstChild.src = "img/images_parcs_jardins/lambda-2.jpg"
    }
    if (num[0] === "3" && div.firstChild.src === "" || div.firstChild.src === undefined) {
        div.firstChild.src = "img/images_parcs_jardins/lambda-1.jpg"
    }
}



function radar(parc1, parc2, parc3) {
    /*
    this.random_1 = parc1;
    this.random_2 = parc2;
    this.random_3 = parc3;
    */

    var fleurs = document.getElementById('myChart').getContext('2d');
    this.Fleurs = new Chart(fleurs, {
        type: 'bar',
        data: {
            labels: ["Nombre d'espèces de fleurs"],
            datasets: [{
                    label: parc1['Nom formel'],
                    backgroundColor: 'rgba(226,226,83, 0.5)',
                    data: [parc1['Nb Espece plantes']]
                },
                {
                    label: parc2['Nom formel'],
                    backgroundColor: 'rgba(227,155,84, 0.5)',
                    data: [parc2['Nb Espece plantes']],
                },
                {
                    label: parc3['Nom formel'],
                    backgroundColor: 'rgba(215,17,23, 0.5)',
                    data: [parc3['Nb Espece plantes']]
                }
            ]
        },
        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                fontSize: 14,
                fontColor: '#fff',
                position: 'bottom'
            }

        }
    });
    var nbarbre = document.getElementById('myChart1').getContext('2d');
    this.NbArbre = new Chart(nbarbre, {
        type: 'bar',
        data: {
            labels: ["Nombre d'arbres "],
            datasets: [{
                    label: parc1['Nom formel'],
                    backgroundColor: 'rgba(226,226,83, 0.5)',
                    data: [parc1['Nb arbre']]
                },
                {
                    label: parc2['Nom formel'],
                    backgroundColor: 'rgba(227,155,84, 0.5)',
                    data: [parc2['Nb arbre']],
                },
                {
                    label: parc3['Nom formel'],
                    backgroundColor: 'rgba(215,17,23, 0.5)',
                    data: [parc3['Nb arbre']]
                }
            ]
        },


        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                fontSize: 14,
                fontColor: '#fff',
                position: 'bottom'
            }

        }
    });
    var arbreFor = document.getElementById('myChart2').getContext('2d');
    this.ArbreFor = new Chart(arbreFor, {
        type: 'bar',
        data: {
            labels: ["Nombre d'arbres formidables"],
            datasets: [{
                    label: parc1['Nom formel'],
                    backgroundColor: 'rgba(226,226,83, 0.5)',
                    data: [parc1['Nb arbre formidable']]
                },
                {
                    label: parc2['Nom formel'],
                    backgroundColor: 'rgba(227,155,84, 0.5)',
                    data: [parc2['Nb arbre formidable']],
                },
                {
                    label: parc3['Nom formel'],
                    backgroundColor: 'rgba(215,17,23, 0.5)',
                    data: [parc3['Nb arbre formidable']]
                }
            ]
        },
        options: {

            legend: {
                display: false,
            },
            title: {
                display: true,
                fontSize: 14,
                fontColor: '#fff',
                position: 'bottom'
            }

        }
    });
    var divArbre = document.getElementById('myChart3').getContext('2d');
    this.DivArbre = new Chart(divArbre, {
        type: 'bar',
        data: {
            labels: ["Nombre d'écpèce d'arbres"],
            datasets: [{
                    label: parc1['Nom formel'],
                    backgroundColor: 'rgba(226,226,83, 0.5)',
                    data: [parc1['Nb espece arbre']]
                },
                {
                    label: parc2['Nom formel'],
                    backgroundColor: 'rgba(227,155,84, 0.5)',
                    data: [parc2['Nb espece arbre']],
                },
                {
                    label: parc3['Nom formel'],
                    backgroundColor: 'rgba(215,17,23, 0.5)',
                    data: [parc3['Nb espece arbre']]
                }
            ]
        },

        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                fontSize: 14,
                fontColor: '#fff',
                position: 'bottom'
            }

        }
    });
}

initSlide1();