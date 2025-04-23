const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090,
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    }
];

// Function to display product data
function displayProduct(product) {
    const productContainer = document.getElementById('product');

    const productHTML = `
        <img src="${product.image}" alt="${product.name}" width="200">
        <h3>${product.name}</h3>
        <p>Price: $${(product.priceCents / 100).toFixed(2)}</p>
        <p>Rating: ${product.rating.stars}/5 (${product.rating.count} reviews)</p>
    `;

    productContainer.innerHTML = productHTML;
}

// Call the function to display the first product
displayProduct(products[0]);
