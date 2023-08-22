fetch("data.json").then(res => res.json()).then(data => {
    let List = document.getElementById('list');
    for(let a of data.game1){
        let newli = document.createElement('li');
        newli.classList.add("item");
        newli.innerHTML=`
        <div class="box"> 
            <img src = "${a.src}">
            <div class="text">
            <h1>${a.name}</h1>
            <h2><i class="fa-solid fa-gamepad"></i>${a.count}</h2>
            <p>
                <i class="fa-${a.star1} fa-star"></i>
                <i class="fa-${a.star2} fa-star"></i>
                <i class="fa-${a.star3} fa-star"></i>
                <i class="fa-${a.star4} fa-star"></i>
                <i class="fa-${a.star5} fa-star"></i>
            </p>
            </div>
        </div>
        `
        List.appendChild(newli);
    }
    List = document.getElementById('list1');
    for(let a of data.game2){
        let newli = document.createElement('li');
        newli.classList.add("item");
        newli.innerHTML=`
        <div class="box"> 
            <img src = "${a.src}">
            <div class="text">
            <h1>${a.name}</h1>
            <h2><i class="fa-solid fa-gamepad"></i>${a.count}</h2>
            <p>
            <i class="fa-${a.star1} fa-star"></i>
            <i class="fa-${a.star2} fa-star"></i>
            <i class="fa-${a.star3} fa-star"></i>
            <i class="fa-${a.star4} fa-star"></i>
            <i class="fa-${a.star5} fa-star"></i>
            </p>
            </div>
        </div>
        `
        List.appendChild(newli);
    }
    
    List = document.getElementById('list3');
    for(let a of data.game3){
        let newli = document.createElement('li');
        newli.classList.add("item");
        newli.innerHTML=`
        <div class="box"> 
            <img src = "${a.src}">
            <div class="text">
            <h1>${a.name}</h1>
            <h2><i class="fa-solid fa-gamepad"></i>${a.count}</h2>
            <p>
            <i class="fa-${a.star1} fa-star"></i>
            <i class="fa-${a.star2} fa-star"></i>
            <i class="fa-${a.star3} fa-star"></i>
            <i class="fa-${a.star4} fa-star"></i>
            <i class="fa-${a.star5} fa-star"></i>
            </p>
            </div>
        </div>
        `
        List.appendChild(newli);
    }
})