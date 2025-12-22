// DATA PRODUK UNTUK SLIDER
const products = [
    {
        img: "assets/img1.jpg",
        name: "Blouse Lavender",
        desc: "Blouse pastel lembut dengan bahan adem dan jatuh cantik.",
        price: "Rp 150.000"
    },
    {
        img: "assets/img2.jpg",
        name: "Blouse Motif Sakura",
        desc: "Motif floral lembut yang manis dan feminin.",
        price: "Rp 165.000"
    },
    {
        img: "assets/img3.jpg",
        name: "Blouse Ruffle Pink",
        desc: "Manis tapi tetap elegan. Blouse Ruffle Pink hadir dengan detail ruffle yang lembut dan potongan flowy yang jatuh cantik di tubuh. Motif floral bernuansa pink memberi kesan fresh dan feminin, pas untuk kamu yang ingin tampil effortless tapi tetap standout.",
        price: "Rp 175.000"
    }
];

let index = 0;

const img = document.getElementById("productImg");
const nameEl = document.getElementById("productName");
const descEl = document.getElementById("productDesc");
const priceEl = document.getElementById("productPrice");

// TOMBOL SLIDER
document.querySelector(".left").onclick = () => slide(-1);
document.querySelector(".right").onclick = () => slide(1);

function slide(direction) {
    index = (index + direction + products.length) % products.length;
    updateProduct();
}

// UPDATE PRODUK + ANIMASI FADE
function updateProduct() {
    img.classList.add("fade");
    nameEl.classList.add("fade");
    descEl.classList.add("fade");
    priceEl.classList.add("fade");

    setTimeout(() => {
        img.src = products[index].img;
        nameEl.textContent = products[index].name;
        descEl.textContent = products[index].desc;
        priceEl.textContent = products[index].price;

        img.classList.remove("fade");
        nameEl.classList.remove("fade");
        descEl.classList.remove("fade");
        priceEl.classList.remove("fade");
    }, 300);
}

// SIDEBAR KATEGORI INTERAKTIF
const categories = document.querySelectorAll("#categoryList li");

categories.forEach(li => {
    li.onclick = () => {
        categories.forEach(c => c.classList.remove("active"));
        li.classList.add("active");
    };

});
