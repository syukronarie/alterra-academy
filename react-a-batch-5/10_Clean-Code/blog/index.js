const CONST = {
  BASE_URL_API: 'https://dummyjson.com/',
};

class ProductServices {
  constructor() {
    this.products = null;
  }

  async getAllProducts() {
    try {
      const result = await fetch(`${CONST.BASE_URL_API}products`).then((v) => v.json());
      this.products = result;
      return this.products;
    } catch (error) {
      console.error(error);
      throw new Error('API Error');
    }
  }
}

const productServices = new ProductServices();

const [productsElement] = document.getElementsByClassName('products');

productServices.getAllProducts().then((result) => {
  const { products } = result;

  products.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.className = 'products_item';

    const productTitle = document.createElement('h3');
    const productCategory = document.createElement('p');
    const productImage = document.createElement('img');
    const productPrice = document.createElement('p');

    productTitle.textContent = product.title;
    productCategory.textContent = product.category;
    productImage.src = product.images[product.images.length - 1];
    productImage.alt = product.title;
    productPrice.textContent = `Price $${product.price}`;

    productItem.appendChild(productTitle);
    productItem.appendChild(productCategory);
    productItem.appendChild(productImage);
    productItem.appendChild(productPrice);

    productsElement.appendChild(productItem);
  });
});
