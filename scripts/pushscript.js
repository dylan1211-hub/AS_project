window.onload = () => {


    var https = require("https");

    var url1 = "https://e9f8-2001-b400-e701-4c2c-ddea-5e90-9792-bb6.ngrok.io/pdata";

    var data1 = "";
   https.get(url1, function (response1) 
   {
    
    console.log("start");
    response1.on("data", chunk => {
    console.log("on data");
    data1 += chunk;
   });

    response1.on("end", () => 
    {
     data1 = JSON.parse(data1);
     let places1 = data1;
     renderPlaces1(places1)
     
    });
 
   });
    
};

function renderPlaces1(places1) {
    let scene = document.querySelector('a-scene');

    for(let i = 0 ; i<=5;i++){
        const latitude = places1[i].lat;  //修改後
        const longitude = places1[i].lon; //修改後

        // add place icon 
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        //icon.setAttribute('name', place.name);         修改前
        icon.setAttribute('name', places1[i].building);      //修改後
        icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/r.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale','10, 10');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        //const touchListener = ;

        icon.addEventListener('click', function () {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {

                const label = document.createElement('span');
                const container = document.createElement('div');
                container.setAttribute('id', 'place-label');
                label.innerText = name;
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 1500);
            }
        });
    
        scene.appendChild(icon);
    }
}