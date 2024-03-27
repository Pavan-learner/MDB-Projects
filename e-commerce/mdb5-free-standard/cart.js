var cartItems = JSON.parse(localStorage.getItem('cart'));


function display(){
    let clutter = '';

    var sum;
    cartItems.forEach(function(item,index) {
         sum = item.rate;
        clutter +=`<div class="row gy-3 mb-4">
        <div class="col-lg-5">
          <div class="me-lg-5">
            <div class="d-flex">
              <img src="${item.img}" class="border rounded me-3" style="width: 96px; height: 96px;" />
              <div class="">
                <a href="#" class="nav-link">${item.pname}</a>
                <p class="text-muted">Items Description</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
          <div class="qty">
            <select style="width: 100px;" class="form-select me-4 qty-value" data-index = "${index}">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="sumAmount">
            <text class="h6">The sum = ${sum}</text> <br />
            <small class="text-muted text-nowrap"> ${item.rate} / per item </small>
          </div>
        </div>


        <div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
          <div class="float-md-end">
            <a href="#!" class="btn btn-light border px-2 icon-hover-primary"><i class="fas fa-heart fa-lg px-1 text-secondary"></i></a>
            <a href="#" class="btn btn-light border text-danger icon-hover-danger"> Remove</a>
          </div>
        </div>
      </div> `

    });
    document.querySelector(".cart-products").innerHTML = clutter;

    // console.log(sum);
}

// These function makes sum value updated if use changes the quantity.
// function updateSum(){
//     let option_value = document.querySelector(".cart-products");

//     option_value.addEventListener("click",(opt)=>{
//         if(opt.target.classList.contains("qty-value")){
//            opt.target.addEventListener("change",function(){

//             // console.log(Number(opt.target.dataset.index))
//             let item = cartItems[Number(opt.target.dataset.index)];

//             // Item price
//             let num1 = Number(item.rate.slice(1,(item.rate.length)));

//             let num2 = Number(opt.target.value);
//             document.querySelector(".sumAmount .h6").innerHTML = `$ ${num1*num2}`
 
//            })
//         }
//     })
// }

function updateSum() {
    let cartProducts = document.querySelector(".cart-products");

    cartProducts.addEventListener("change", function(event) {
        if (event.target.classList.contains("qty-value")) {
            let index = parseInt(event.target.dataset.index);
            let item = cartItems[index];
            let num1 = Number(item.rate.slice(1));
            let num2 = Number(event.target.value);
            let sum = num1 * num2;
            event.target.closest('.row').querySelector('.sumAmount .h6').textContent = `The sum = $ ${sum}`;
        }
    });
}



display()
updateSum()
