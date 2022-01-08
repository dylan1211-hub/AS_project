window.onload = () => {
    let places = [
        {
            name: '餐廳',
            lat: 22.99823264,
            lon: 120.2184491,
            building:"計中大樓"
        },
        {
         name: '澡堂',
         lat: 22.99835242,
         lon: 120.2197066,
         building:"化學系館"
        },
        {
         name: '公園',
         lat:22.99861667,
         lon:120.2205475,
         building:"材料系館"
        },
        {
         name: '廁所',
         lat:22.99967413348661, 
         lon:120.21979499894803,
         building:"總圖"
        },
        {
            name: '萬紅刀切麵',
            lat:23.010148836235047,  
            lon:120.22477253110293,
            building:"總圖"
        },
 
    ];
    renderPlaces(places);
};


function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   for(let i=0;i<1;i++) {
    const latitude = places[i].lat;  //修改後
    const longitude = places[i].lon; //修改後

    // add place icon 
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    //icon.setAttribute('name', place.name);         修改前
    icon.setAttribute('name', places[i].name);      //修改後
    icon.setAttribute('building', places[i].building);
    icon.setAttribute('src','https://dylan1211-hub.github.io/AS_project/assets/r1.png');

    icon.setAttribute('scale','10, 10');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));


    const title = document.createElement('a-text');
    title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    title.setAttribute('value', places[i].name);
    title.setAttribute('scale', '20 20 20');
    title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))

    scene.appendChild(icon);
    scene.appendChild(title);
   };

   for(let i=1;i<2;i++) {
    const latitude = places[i].lat;  //修改後
    const longitude = places[i].lon; //修改後

    // add place icon 
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    //icon.setAttribute('name', place.name);         修改前
    icon.setAttribute('name', places[i].name);      //修改後
    icon.setAttribute('building', places[i].building);
    icon.setAttribute('src','https://dylan1211-hub.github.io/AS_project/assets/r2.png');

    icon.setAttribute('scale','10, 10');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));


    const title = document.createElement('a-text');
    title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    title.setAttribute('value', places[i].name);
    title.setAttribute('scale', '20 20 20');
    title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))

    scene.appendChild(icon);
    scene.appendChild(title);
   };

   for(let i=2;i<3;i++) {
    const latitude = places[i].lat;  //修改後
    const longitude = places[i].lon; //修改後

    // add place icon 
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    //icon.setAttribute('name', place.name);         修改前
    icon.setAttribute('name', places[i].name);      //修改後
    icon.setAttribute('building', places[i].building);
    icon.setAttribute('src','https://dylan1211-hub.github.io/AS_project/assets/r3.png');

    icon.setAttribute('scale','10, 10');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));


    const title = document.createElement('a-text');
    title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    title.setAttribute('value', places[i].name);
    title.setAttribute('scale', '20 20 20');
    title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))

    scene.appendChild(icon);
    scene.appendChild(title);
   };

   for(let i=3;i<4;i++) {
    const latitude = places[i].lat;  //修改後
    const longitude = places[i].lon; //修改後

    // add place icon 
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    //icon.setAttribute('name', place.name);         修改前
    icon.setAttribute('name', places[i].name);      //修改後
    icon.setAttribute('building', places[i].building);
    icon.setAttribute('src','https://dylan1211-hub.github.io/AS_project/assets/r4.png');

    icon.setAttribute('scale','10, 10');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));


    const title = document.createElement('a-text');
    title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    title.setAttribute('value', places[i].name);
    title.setAttribute('scale', '20 20 20');
    title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))

    scene.appendChild(icon);
    scene.appendChild(title);
   };

   for(let i=4;i<5;i++) {
    const latitude = places[i].lat;  //修改後
    const longitude = places[i].lon; //修改後

    // add place icon 
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    //icon.setAttribute('name', place.name);         修改前
    icon.setAttribute('name', places[i].name);      //修改後
    icon.setAttribute('building', places[i].building);
    icon.setAttribute('src','https://dylan1211-hub.github.io/AS_project/assets/s.png');

    icon.setAttribute('scale','10, 10');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));


    const title = document.createElement('a-text');
    title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    title.setAttribute('value', places[i].name);
    title.setAttribute('scale', '20 20 20');
    title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))

    scene.appendChild(icon);
    scene.appendChild(title);
   };
}