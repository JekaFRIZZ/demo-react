const data = [
  {
    "image": "../image/shopping_cart_black_24dp.svg",
    "title": "First",
    "description": "This is comp",
    "expired": "7",
    "price": 123,
    "tag" : "Automobiles"
  },
  {
    "image": "../image/shopping_cart_black_24dp.svg",
    "title": "Second",
    "description": "Description",
    "expired": "7",
    "price": 123,
    "tag" : "Film Animation"
  },
  {
    "image": "../image/shopping_cart_black_24dp.svg",
    "title": "Third",
    "description": "Description",
    "expired": "7",
    "price": 123,
    "tag" : "Automobiles"
  },
  {
    "image": "../image/shopping_cart_black_24dp.svg",
    "title": "Fourth",
    "description": "Description",
    "expired": "7",
    "price": 123,
    "tag" : "Film Animation"
  },
  {
    "image": "../image/shopping_cart_black_24dp.svg",
    "title": "Fifth",
    "description": "Description",
    "expired": "7",
    "price": 123,
    "tag" : "Automobiles"
  },
  {
    "image": "../image/shopping_cart_black_24dp.svg",
    "title": "Sixth",
    "description": "Description",
    "expired": "7",
    "price": 123,
    "tag" : "Film Animation"
  },
  {
    "image": "../image/shopping_cart_black_24dp.svg",
    "title": "Seventh",
    "description": "Description",
    "expired": "7",
    "price": 123,
    "tag" : "Automobiles"
  }
]

function searchByTag(string, arr) {
  return arr.filter(item => item.tag.includes(string));
}

function searchByTitle(string, arr) {
  return arr.filter(item => item.title.includes(string));
}

const array = searchByTag('Automobiles', data);

console.log(searchByTitle('Th', array))