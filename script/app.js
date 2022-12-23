const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "CONTROLLER",
    price: 119,
    colors: [
      {
        code: "blue",
        img: "./img/2.png",
      },
      {
        code: "black",
        img: "./img/1.png",
      },

      {
        code: "grey",
        img: "./img/3.png",
      },
      {
        code: "white",
        img: "./img/4.png",
      },
      {
        code: "red  ",
        img: "./img/5.png",
      },
      {
        code: "lightblue",
        img: "./img/6.png",
      },
      {
        code: "pink",
        img: "./img/7.png",
      },
      {
        code: "darkblue",
        img: "./img/8.png",
      },
    ],
  },
  {
    id: 2,
    title: "PS5",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/1A.png",
      },
      {
        code: "green",
        img: "./img/2A.png",
      },
      {
        code: "lightgray",
        img: "./img/3A.png",
      },
      {
        code: "green",
        img: "./img/4A.png",
      },
      {
        code: "lightgray",
        img: "./img/5A.png",
      },
      {
        code: "green",
        img: "./img/6A.png",
      },
      {
        code: "lightgray",
        img: "./img/7A.png",
      },
      {
        code: "green",
        img: "./img/2A.png",
      },
    ],
  },
  {
    id: 3,
    title: "GAME",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/game1 (1).png",
      },
      {
        code: "lightgray",
        img: "./img/game1 (2).png",
      },{
        code: "lightgray",
        img: "./img/game1 (3).png",
      },{
        code: "lightgray",
        img: "./img/game1 (4).png",
      },{
        code: "lightgray",
        img: "./img/game1 (5).png",
      },{
        code: "lightgray",
        img: "./img/game1 (6).png",
      },{
        code: "lightgray",
        img: "./img/game1 (2).png",
      },{
        code: "lightgray",
        img: "./img/game1 (1).png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/7.png",
      },
      {
        code: "lightgray",
        img: "./img/8.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
