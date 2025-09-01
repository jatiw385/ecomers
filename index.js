let limit = 10;
let skip = 0;

function getData(limit, skip){
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,images`)
    .then(res => res.json())
    .then(data => {console.log(data);
        let htmlList = data.products.map((product)=>{
            return templatecard(product.images[0], product.title, product.description, product.price, product.id)
        })
        let htmlReady = htmlList.join('')
        document.getElementById('cardParent').innerHTML = htmlReady;
    });
}

function templatecard(image, title, description, price, id){
    return `<div class="col" style="margin-top:30px ;">
                <div class="card" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                         <p class="card-text">${description}</p>
                        <a href="/show/index.html?id=${id}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>`
}

getData(limit, skip);

document.getElementById('previous').addEventListener('click', function(){
    if (skip >= 10){
        skip -= 10;
        getData(limit, skip);
        changeNumpage();
    }
});

document.getElementById('next').addEventListener('click', function(){
    if (skip < 100){
        skip += 10;
        getData(limit, skip);
        changeNumpage();
    }
})

let page = document.querySelectorAll('.numpage');

function changeNumpage(){
    page.forEach((e)=>{
        e.classList.remove('active');
    });
    if (skip === 0){
        page[0].classList.add('active');
    }else if (skip ===10){
        page[1].classList.add('active');
    }else{
        page[2].classList.add('active');
    }
}

changeNumpage();

document.getElementById('onSearch').addEventListener('click',(e)=>{
    const search = document.getElementById('search');
    e.preventDefault();
    fetch(`https://dummyjson.com/products/search?q=${search.value}`)
    .then(res => res.json())
    .then(data => {console.log(data);
        let htmlList = data.products.map((product)=>{
            return templatecard(product.images[0], product.title, product.description, product.price, product.id)
        })
        let htmlReady = htmlList.join('')
        document.getElementById('cardParent').innerHTML = htmlReady;
    });
})