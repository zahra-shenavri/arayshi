const products = {
  makup: [
    {
      name:"رژ لب کیکو",
      image:"/رژلبwebp.webp",
      desc:"ناموجود رژ لب مایع کیکو میلانو مدل Metal شماره 03",
      price:"150,000 تومان"
    },
    {
      name:"رژلب مایع گلدن رز",
      image:"images/رژلب رزb.jpg",
      desc:"بافت سبک و نرم",
      price:"80,000 تومان"
    },
    {
      name:"ریمل اسنس حجم دهنده صورتی",
      image:"images/ریمل اسنس.jpeg",
      desc:"حجم کننده و جلوگیری از شکنندگی",
      price:"60,000 تومان"
    },
    {
      name:"ریمل حجم دهنده کالیستا",
      image:"images/ریمل کالیستا.jfif",
      desc:"حجم دهنده و بلندکننده",
      price:"370,000 تومان"
    },
    {
      name:"پالت سایه برنز",
      image:"images/سایه چشم پالت.jpg",
      desc:"تنوع رنگی بالا و ماندگاری بالا",
      price:"70,000 تومان"
    },
    {
      name:"پالت سایه چشم کالیستا",
      image:"images/سایه چشم پالیستا.webp",
      desc:"حاوی روغن ماکادمیا",
      price:"640,000 تومان"
    },
    {
      name:"کرم پودر لورال",
      image:"images/کرم پودر لورال.jfif",
      desc:"بافت نرم و پوشش یکنواخت",
      price:"1,600,000 تومان"
    },
    {
      name:"کرم پودر گابرینی",
      image:"images/کرم پودر گابریل.jpg",
      desc:"پوشش بسیار بالا و بافت نرم",
      price:"2,440,000 تومان"
    },
    {
      name:"کرم پودر استودیو فیکس مک SPF 15",
      image:"images/کرم پودر مک.webp",
      desc:"ضد جوش و پوشیدگی مات",
      price:"5,500,000 تومان"
    },
    {
      name:"لاک ژل ترکیبی ناخن اس.استار مدل W2020 مجموعه 10 عددی",
      image:"images/لاک ژل.webp",
      desc:"کیفیت و تنوع بالا",
      price:"620,000 تومان"
    }
  ],
  skin: [
    {
      name:"کرم مرطوب کننده ۲۴ ساعته پرایم",
      image:"images/کرم مرطوب کننده پرایم.webp",
      desc:"جلوگیری از پیری زودرس",
      price:"561,000 تومان"
    },
    {
      name:"کرم مرطوب کننده سراوی",
      image:"images/کرم مرطوب کننده سراوی.jfif",
      desc:"آبرسانی و ماندگاری بالا",
      price:"2,800,000 تومان"
    },
    {
      name:"سرم ویتامین سی بیواکوا",
      image:"images/سرم ویتامین سی.jpg",
      desc:"تقویت کننده و کاهش لک های پوستی",
      price:"185,000 تومان"
    },
    {
      name:"سرم ویتالیر",
      image:"images/سرم وی8.webp",
      desc:"سفت کننده پوست",
      price:"497,000 تومان"
    },
    {
      name:"سرم والبنور",
      image:"images/سرم روشن کننده.webp",
      desc:"روشن کننده و مناسب برای انواع پوست",
      price:"404,000 تومان"
    },
    {
      name:"سرم دور چشم راکتون",
      image:"images/سرم دور چشم.webp",
      desc:"روشن کننده و دارای ویتامین سی",
      price:"382,000 تومان"
    },
    {
      name:"ماسک صورت سادور 10 عددی",
      image:"images/ماسک صورت سادور.jpg",
      desc:"مغذی و مرطوب کننده",
      price:"160,000 تومان"
    },
    {
      name:"کرم ضدآفتاب لافارر",
      image:"images/کرم ضدافتاب.webp",
      desc:"فاقد چربی و ضد لک",
      price:"730,000 تومان"
    },
    {
      name:"کرم ضد آفتاب بردون",
      image:"images/ضدافتاب بردون.webp",
      desc:"ضد آب و محافظت کننده",
      price:"322,000 تومان"
    },
    {
      name:"کرم ضد آفتاب بی‌رنگ تیلسیم",
      image:"images/ضدافتاب بی رنگ.webp",
      desc:"محافظت کننده در برابر اشعه",
      price:"312,000 تومان"
    }
  ],
  hair: [
    {
      name:"شامپو حاوی کافئین سریتا",
      image:"images/شامپو.jpg",
      desc:"کنترل ریزش مو و خون رسانی به پوست سر",
      price:"328,000 تومان"
    },
    {
      name:"شامپو رزماری بیوآکوا",
      image:"images/شامپو رزماری.webp",
      desc:"ضد ریزش و گیاهی",
      price:"137,000 تومان"
    },
    {
      name:"ماسک مو لایتنس",
      image:"images/ماسک مو لا3.webp",
      desc:"مغذی و تقویت کننده",
      price:"389,000 تومان"
    },
    {
      name:"ماسک مو ساین اسکالپ",
      image:"images/ماسک مو لورال.webp",
      desc:"تقویت کننده و دارای ویتامین",
      price:"499,000 تومان"
    },
    {
      name:"روغن مو پنتن",
      image:"images/روغن مو آرگان.webp",
      desc:"نرم کننده و درخشان کننده",
      price:"492,000 تومان"
    },
    {
      name:"نرم کننده مو اکتیو",
      image:"images/نرم کننده.webp",
      desc:"مراقبت و احیای مو",
      price:"69,000 تومان"
    }
  ],
  shakhsi: [
    {
      name:"مایع شوینده غیر صابونی بدن آردن سبوما",
      image:"images/شوینده بدن.webp",
      desc:"بهبود پوست و کاهش جوش",
      price:"323,000 تومان"
    },
    {
      name:"ژل شست‌وشوی صورت لافارر",
      image:"images/ژل شست و شو.webp",
      desc:"تنظیم ترشح چربی و ضد لک",
      price:"391,000 تومان"
    },
    {
      name:"پن لایه بردار پرودرما",
      image:"images/پن لایه بردار.webp",
      desc:"دارای ویتامین",
      price:"134,000 تومان"
    }
  ],
  ater: [
    {
      name:"ادو پرفیوم مردانه ابسنت",
      image:"images/عطر مردانه.webp",
      desc:"رایحه تلخ",
      price:"348,000 تومان"
    },
    {
      name:"ادوپرفیوم باکستر",
      image:"images/عطر ادوپرفیوم.webp",
      desc:"مناسب برای پاییز و زمستان",
      price:"218,000 تومان"
    },
    {
      name:"پرفیوم زنانه آتلیه کلون",
      image:"images/عطر زنانه اتیله.webp",
      desc:"ساختار رایحه خوراکی و تندی",
      price:"13,880,000 تومان"
    },
    {
      name:"ادو پرفیوم زنانه بولگاری",
      image:"images/عطر زنانه ادو.webp",
      desc:"ساختار نت ها گل",
      price:"2,780,000 تومان"
    },
    {
      name:"پرفیوم آتلیه کلون",
      image:"images/عطر پرفیوم7.webp",
      desc:"ساختار نت ها گل و مرکبات",
      price:"12,800,000 تومان"
    },
    {
      name:"ادو پرفیوم مردانه لوئیز آلاویا",
      image:"images/عطر ادو مردانه.webp",
      desc:"ساختار رایحه خنک و تلخ",
      price:"3,188,000 تومان"
    },
    {
      name:"بادی اسپلش زنانه پینک مدل کیتی",
      image:"images/بادی اسپلش زنانه.webp",
      desc:"ماندگاری بالا",
      price:"48,000 تومان"
    },
    {
      name:"بادی اسپلش 212 لابورن",
      image:"images/بادی لابو.webp",
      desc:"بوی ملایم و با ماندگاری بالا",
      price:"148,000 تومان"
    },
      ater: [
    {
      name:"ادو پرفیوم مردانه ابسنت",
      image:"images/عطر مردانه.webp",
      desc:"رایحه تلخ",
      price:"348,000 تومان"
    },
    {
      name:"ادوپرفیوم باکستر",
      image:"images/عطر ادوپرفیوم.webp",
      desc:"مناسب برای پاییز و زمستان",
      price:"218,000 تومان"
    },
    {
      name:"پرفیوم زنانه آتلیه کلون",
      image:"images/عطر زنانه اتیله.webp",
      desc:"ساختار رایحه خوراکی و تندی",
      price:"13,880,000 تومان"
    },
    {
      name:"ادو پرفیوم زنانه بولگاری",
      image:"images/عطر زنانه ادو.webp",
      desc:"ساختار نت ها گل",
      price:"2,780,000 تومان"
    },
    {
      name:"پرفیوم آتلیه کلون",
      image:"images/عطر پرفیوم7.webp",
      desc:"ساختار نت ها گل و مرکبات",
      price:"12,800,000 تومان"
    },
    {
      name:"ادو پرفیوم مردانه لوئیز آلاویا",
      image:"images/عطر ادو مردانه.webp",
      desc:"ساختار رایحه خنک و تلخ",
      price:"3,188,000 تومان"
    },
    {
      name:"بادی اسپلش زنانه پینک مدل کیتی",
      image:"images/بادی اسپلش زنانه.webp",
      desc:"ماندگاری بالا",
      price:"48,000 تومان"
    },
    {
      name:"بادی اسپلش 212 لابورن",
      image:"images/بادی لابو.webp",
      desc:"بوی ملایم و با ماندگاری بالا",
      price:"148,000 تومان"
    }
  ]
};

let cart = [];

// بازیابی سبد ذخیره‌شده
const savedCart = localStorage.getItem("cart");
if (savedCart) {
  cart = JSON.parse(savedCart);
  renderCart();
}

// نمایش محصولات یک دسته با Skeleton
function showCategory(category) {
  const grid = document.getElementById("product-grid");

  // نمایش Skeleton
  grid.innerHTML = `
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
  `;

  // شبیه‌سازی تأخیر بارگذاری (۱.۵ ثانیه)
  setTimeout(() => {
    grid.innerHTML = "";
    (products[category] || []).forEach((p, i) => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}" class="product-image">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <span class="price">${p.price}</span>
          <div class="actions">
            <button onclick="addToCart('${category}', ${i})">➕ افزودن</button>
            <button onclick="removeFromCart('${category}', ${i})">❌ حذف</button>
          </div>
        </div>
      `;
    });
  ),3000;
}

// افزودن محصول
function addToCart(category, index) {
  const product = products[category][index];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// حذف یک محصول
function removeFromCart(category, index) {
  const product = products[category][index];
  const cartIndex = cart.findIndex(item => item.name === product.name);
  if (cartIndex !== -1) {
    cart.splice(cartIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// پاک کردن کل سبد
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// رندر سبد خرید
function renderCart() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const countHeader = document.getElementById("cart-count-header");
  const countCart = document.getElementById("cart-count-cart");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} - ${item.price}</li>`;
    total += parsePrice(item.price);
  });

  totalEl.textContent = cart.length
    ? `جمع کل: ${formatPrice(total)} تومان`
    : "سبد خرید خالی است";

  countHeader.textContent = cart.length;
  countCart.textContent = cart.length;
}

// تبدیل قیمت به عدد
function parsePrice(str) {
  return Number(str.replace("تومان", "").replace(/,/g, "").trim());
}

// فرمت عدد با ویرگول
function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// -------------------- Checkout --------------------
function showCheckout() {
  const checkoutSection = document.getElementById("checkout");
  const checkoutList = document.getElementById("checkout-items");
  const checkoutTotal = document.getElementById("checkout-total");

  checkoutList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    checkoutList.innerHTML += `<li>${item.name} - ${item.price}</li>`;
    total += parsePrice(item.price);
  });

  checkoutTotal.textContent = cart.length
    ? `جمع کل سفارش: ${formatPrice(total)} تومان`
    : "سفارشی وجود ندارد";

  checkoutSection.style.display = "block";
}

function confirmOrder() {
  goToStep(2); // مرحله تأیید سفارش
  alert("سفارش شما ثبت شد ✅");
  clearCart();
  document.getElementById("checkout").style.display = "none";
}

// -------------------- Progress Bar --------------------
function goToStep(stepIndex) {
  const steps = document.querySelectorAll("#progress-bar .step");
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === stepIndex);
  });
}

// حرکت بین مراحل Checkout
document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  goToStep(1); // مرحله پرداخت
  alert("مرحله پرداخت ✨");
});

// نمایش Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";

  // مخفی شدن بعد از 3 ثانیه
  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

// -------------------- جستجو محصولات --------------------
function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const grid = document.getElementById("product-grid");

  grid.innerHTML = "";

  // ترکیب همه محصولات از دسته‌ها
  let allProducts = [];
  Object.keys(products).forEach(category => {
    allProducts = allProducts.concat(products[category]);
  });

  // فیلتر بر اساس نام محصول
  const filtered = allProducts.filter(p => p.name.toLowerCase().includes(query));

  // نمایش نتایج
  if (filtered.length === 0) {
    grid.innerHTML = "<p>❌ محصولی یافت نشد</p>";
  } else {
    filtered.forEach((p, i) => {
      grid.innerHTML += `
        <div class="product-card">
          <img class="lazy" data-src="${p.image}" alt="${p.name}" class="product-image">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <span class="price">${p.price}</span>
          <div class="actions">
            <button onclick="addToCart('all', ${i})">➕ افزودن</button>
          </div>
        </div>
      `;
    });
    // فعال‌سازی Lazy Loading دوباره
    initLazyLoading();
  }
}
// تغییر در افزودن محصول
function addToCart(category, index) {
  const product = products[category][index];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  showToast(`${product.name} به سبد اضافه شد ✅`);
}

// تغییر در حذف محصول
function removeFromCart(category, index) {
  const product = products[category][index];
  const cartIndex = cart.findIndex(item => item.name === product.name);
  if (cartIndex !== -1) {
    cart.splice(cartIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    showToast(`${product.name} از سبد حذف شد ❌`);
  }
}

// تغییر در پاک کردن کل سبد
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  showToast("سبد خرید پاک شد 🗑️");
}

// -------------------- Scroll-to-top --------------------
const scrollTopBtn = document.getElementById("scrollTopBtn");

// نمایش دکمه وقتی اسکرول کنیم
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// حرکت نرم به بالای صفحه
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});