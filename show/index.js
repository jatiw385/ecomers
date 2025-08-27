fetch('https://dummyjson.com/products/2')
.then(res => res.json())
.then(data =>{
    const products = document.getElementById('productimg');
    products.src = data.images;

    const deskripsi = document.getElementById('deskp');
    deskripsi.innerHTML=data.description;

    const harga = document.getElementById('price');
    harga.innerHTML='$'+data.price;
});
