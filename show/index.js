const url = new URL (window.location.href);

const id = url.searchParams.get('id'); 

fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data =>{
    const products = document.getElementById('productimg');
    products.src = data.images[0];

    const deskripsi = document.getElementById('deskp');
    deskripsi.innerHTML=data.description;

    const harga = document.getElementById('price');
    harga.innerHTML='$'+data.price;
});
