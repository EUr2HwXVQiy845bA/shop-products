const data = [
  {
    id: 0,
    name: 'Apple Macbook Air M2',
    img: './imgs/869870060.jpeg',
    price: 1199,
    cat: 'Laptop',
    selected: 0
  },
  {
    id: 1,
    name: 'Samsung Galaxy Tab S8',
    img: './imgs/546292471.jpeg',
    price: 899,
    cat: 'Tablet',
    selected: 0
  },

  {
    id: 2,
    name: "Timex Men's Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Clock",
    selected: 0
  },
  {
    id: 3,
    name: "Breitling Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Clock",
    selected: 0
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Clock",
    selected: 0
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Clock",
    selected: 0
  },
  {
    id: 6,
    name: 'iPhone 14 Pro Max',
    img: './imgs/1896224739.jpeg',
    price: 1099,
    cat: 'Phone',
    selected: 0
  },
  {
    id: 7,
    name: 'iPhone 13 Pro Max',
    img: './imgs/421252037393367231.jpeg',
    price: 999,
    cat: 'Phone',
    selected: 0
  },
  {
    id: 8,
    name: 'Masstel E140',
    img: './imgs/1300475861.jpeg',
    price: 299,
    cat: 'Laptop',
    selected: 0
  },
  {
    id: 9,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Clock",
    selected: 0
  },
  {
    id: 10,
    name: 'Apple Macbook Pro M2',
    img: './imgs/Macbook-Pro-M2-sil1.jpg',
    price: 1299,
    cat: 'Laptop',
    selected: 0
  },
  {
    id: 11,
    name: 'Macbook Pro 14',
    img: './imgs/342667776.jpeg',
    price: 1899,
    cat: 'Laptop',
    selected: 0
  },
  {
    id: 12,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Clock",
    selected: 0
  },
  {
    id: 13,
    name: 'Genius SP-HF180',
    img: './imgs/752818577.jpeg',
    price: 199,
    cat: 'Speaker',
    selected: 0
  },
  {
    id: 14,
    name: 'Samsung UHD 43',
    img: './imgs/1622812498.jpeg',
    price: 599,
    cat: 'TV',
    selected: 0
  },
];
const lengthData = data.length


const products = document.querySelector('.products')
const searchInput = document.querySelector('.menu input')
const categoriesContainer = document.querySelector('.cats')



let cartTotal = 0

// const cartButton = document.querySelector('.bx .bx-cart')


const cart98 = document.querySelectorAll('.cart-display span')
const cartDisplay = document.querySelectorAll('.cart-display')
cartDisplay.forEach(element => element.addEventListener('click', () => {
  modalWrapper.style.display = 'flex'
  showCart()
}))

const addEventForProductDetail = function () {
  const productDetailClose = document.querySelector('.vxzv')
  productDetailClose.addEventListener('click', () => {
    productDetailWrapper.style.display = 'none'

    productDetailClose.removeEventListener
    productDetailWrapper.removeEventListener
    productDetail.removeEventListener
  })
  productDetailWrapper.addEventListener('click', () => {
    productDetailWrapper.style.display = 'none'
  })
  productDetail.addEventListener('click', (event) => {
    event.stopPropagation()
  })

  const addToCartFromProductDetail = productDetail.querySelector('.add')
  addToCartFromProductDetail.addEventListener('click', () => {
    data[id].selected++
    cart98.textContent = ++cartTotal
    // removeEventListener
  })
}


// productClickEvent
const productDetailWrapper = document.querySelector('.product-detail-wrapper')
const productDetail = document.querySelector('.product-detail')

const clickProduct = function() {
  const product = document.querySelectorAll('.product-click-event')

  product.forEach(element => {
    element.addEventListener('click', (event) => {
      let id = event.target.id
      productDetailWrapper.style.display = 'flex'
      productDetail.innerHTML = `
        <div>
          <i class='vxzv bx bx-x'></i>
        </div>
        <div class="image">
          <img src=${data[id].img} alt="">
          <div class="frame-image"></div>
        </div>
        <div class="info">
          <div class="price">$${data[id].price}</div>
          <div class="name">${data[id].name}</div>
          <div class="desc">fasdfaf</div>
          <div>
            <div class="buy">BUY IT NOW</div>
            <div class='add'>ADD TO CART</div>
          </div>
        </div>
      `

      const productDetailClose = document.querySelector('.vxzv')
      productDetailClose.addEventListener('click', () => {
        productDetailWrapper.style.display = 'none'
    
        productDetailClose.removeEventListener
        productDetailWrapper.removeEventListener
        productDetail.removeEventListener
      })
      productDetailWrapper.addEventListener('click', () => {
        productDetailWrapper.style.display = 'none'
      })
      productDetail.addEventListener('click', (event) => {
        event.stopPropagation()
      })

      function name() {
        data[id].selected++
        cartTotal++
        cart98.forEach(element => element.textContent = cartTotal)
        console.log(9)
        // addToCartFromProductDetail.removeEventListener('click', name)
      }
      const addToCartFromProductDetail = productDetail.querySelector('.add')
      addToCartFromProductDetail.addEventListener('click', name)
    })
  })

}


// addToCartEvent
const addToCart = function () {
  const add = document.querySelectorAll('.add')


  add.forEach(element => {
    element.addEventListener('click', (event) => {
      let id = event.target.id
      // for (let i = 0; i < lengthData; i++) {
      //   if (id == data[i].id) {
      //     console.log(++data[i].selected)
      //   }
      // }
      data.forEach(item => {
        if (item.id == id) item.selected++
      })
      cartTotal++
      cart98.forEach(element => element.textContent = cartTotal)
    })
  })
}


const displayProducts = (filteredProducts) => {
  products.innerHTML = filteredProducts.map((product) => `
  <div class="product">
  <div>
  <div class='product-click-event' id=${product.id}></div>
  <div style="position: relative">
  <img src=${product.img} alt="">
  <div class="frame-image"></div>
  </div>
  <div class="name">${product.name}</div>
  <span class="price">$${product.price}</span>
  <i class='add bx bx-cart-add' id=${product.id}></i>
  </div>
  </div>
  `).join('')
  addToCart()
  clickProduct()
// const add = document.querySelectorAll('.add')
// console.log(add)

// add.forEach(element => {
//   element.addEventListener('click', (event) => {
//     let id = event.target.id
//     console.log(id)
//     // for (let i = 0; i < lengthData; i++) {
//     //   if (id == data[i].id) {
//     //     console.log(++data[i].selected)
//     //   }
//     // }
//     data.forEach(item => {
//       if (item.id == id) item.selected++
//     })
//     cartTotal++
//     cart.textContent = cartTotal
//   })
// })

}

displayProducts(data)

searchInput.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase()
  
  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      )
    } else {
      displayProducts(data)
    }
})

const setCategories = () => {
  const allCats = data.map((item) => item.cat)
  const cats = [
    'All',
    ...allCats.filter((item, i) => allCats.indexOf(item) === i)
  ]
  
  categoriesContainer.innerHTML = cats.map((cat) => `
  <div class='cat'>${cat}</div>
  `).join('')
  categoriesContainer.addEventListener('click', (e) => {
    const selectedCat = e.target.textContent
    selectedCat === 'All' ? displayProducts(data) : displayProducts(data.filter(item => item.cat === selectedCat))
  })
}



setCategories()
const modalWrapper = document.querySelector('.modal-wrapper')
const modalClose = document.querySelector('.modal .bx-x')
const modal = document.querySelector('.modal')

modal.addEventListener('click', (event) => {
  event.stopPropagation()
})

modalWrapper.addEventListener('click', () => {
  modalWrapper.style.display = 'none'
})
modalClose.addEventListener('click', () => {
  modalWrapper.style.display = 'none'
})

const menuButton = document.querySelector('.bx-menu')
const menu = document.querySelector('.menu')
var x = true
menuButton.addEventListener('click', () => {
  menu.style.display = x ? 'block' : 'none'
  menu.style.position = 'fixed'
  menu.style.zIndex = 10
  menu.style.top = '40px'
  x = !x
  // menu.classList.toggle('open')
})

let priceTotal = 0
const total98 = document.querySelector('.pay span')
const carts = document.querySelector('.carts')
const showCart = function () {
  carts.innerHTML = data.filter(e => e.selected !== 0).map(e => `
    <div class="cart">
      <div class="image">
        <img src=${e.img} alt="">
        <div class="frame-image"></div>
      </div>
      <div class="info">
        <div class="name">${e.name}</div>
        <div class="desc">fasdfaf</div>
        <div class="remove" id=${e.id}>Remove</div>
      </div>
      <div>
        <div class="quantity">
          <span class="price">$${e.price} x</span>
          <input type="number" id=${e.id} value=${e.selected}>
        </div>
        <div style="color: #666">Total</div>
        <div class="total">${e.price * e.selected}</div>
      </div>
    </div>
    <div class="hr"></div>
  `)

  cartTotal = 0
  priceTotal = 0
  data.forEach(e => {
    cartTotal += e.selected
    priceTotal += e.price * e.selected
  })
  total98.textContent = `Total $${priceTotal}`
  cart98.forEach(element => element.textContent = cartTotal)


  carts.querySelectorAll('.remove').forEach(e => e.addEventListener('click', e => {
    console.log(e.target.id)
    data[e.target.id].selected = 0
    showCart()
  }))
  carts.querySelectorAll('input').forEach(e => e.addEventListener('change', e => {
    var value = Number(e.target.value)
  if (value < 0) value = 0
    data[e.target.id].selected = value
    showCart()
  }))
}
