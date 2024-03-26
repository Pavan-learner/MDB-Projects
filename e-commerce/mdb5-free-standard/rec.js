var recitems = [
    {pname:"Blue jeans shorts for ment",rate:"$17.3",img:"https://imgs.search.brave.com/8LKZrsqPGE4JRPnXX9-t0rkOOV_a_gsShwh0y__u6ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sc2Nv/ZWNvbW0uc2NlbmU3/LmNvbS9pcy9pbWFn/ZS9sc2NvZWNvbW0v/Qk9PVENVVCUyMEpF/QU5TLTE_Zm10PWpw/ZWcmcWx0PTcwJnJl/c01vZGU9YmlzaGFy/cCZmaXQ9Y3JvcCwx/Jm9wX3VzbT0wLjYs/MC42LDgmd2lkPTEy/MDAmaGVpPTE1MDA.jpeg",size:"X M L"},
    {pname:"Blue jeans shorts for ment",rate:"$17.3",img:"https://imgs.search.brave.com/8LKZrsqPGE4JRPnXX9-t0rkOOV_a_gsShwh0y__u6ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sc2Nv/ZWNvbW0uc2NlbmU3/LmNvbS9pcy9pbWFn/ZS9sc2NvZWNvbW0v/Qk9PVENVVCUyMEpF/QU5TLTE_Zm10PWpw/ZWcmcWx0PTcwJnJl/c01vZGU9YmlzaGFy/cCZmaXQ9Y3JvcCwx/Jm9wX3VzbT0wLjYs/MC42LDgmd2lkPTEy/MDAmaGVpPTE1MDA.jpeg",size:"X M L"},
     {pname:"Blue jeans shorts for ment",rate:"$17.3",img:"https://imgs.search.brave.com/8LKZrsqPGE4JRPnXX9-t0rkOOV_a_gsShwh0y__u6ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sc2Nv/ZWNvbW0uc2NlbmU3/LmNvbS9pcy9pbWFn/ZS9sc2NvZWNvbW0v/Qk9PVENVVCUyMEpF/QU5TLTE_Zm10PWpw/ZWcmcWx0PTcwJnJl/c01vZGU9YmlzaGFy/cCZmaXQ9Y3JvcCwx/Jm9wX3VzbT0wLjYs/MC42LDgmd2lkPTEy/MDAmaGVpPTE1MDA.jpeg",size:"X M L"},
     {pname:"Blue jeans shorts for ment",rate:"$17.3",img:"https://imgs.search.brave.com/8LKZrsqPGE4JRPnXX9-t0rkOOV_a_gsShwh0y__u6ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sc2Nv/ZWNvbW0uc2NlbmU3/LmNvbS9pcy9pbWFn/ZS9sc2NvZWNvbW0v/Qk9PVENVVCUyMEpF/QU5TLTE_Zm10PWpw/ZWcmcWx0PTcwJnJl/c01vZGU9YmlzaGFy/cCZmaXQ9Y3JvcCwx/Jm9wX3VzbT0wLjYs/MC42LDgmd2lkPTEy/MDAmaGVpPTE1MDA.jpeg",size:"X M L"}
]

function recomendedProducts(){
  let clutter = '';
recitems.forEach(function(item){
    clutter += ` 
    <div class="col-lg-3 col-md-6 col-sm-6">
      <div class="card my-2 shadow-0 product-img card-action">
        <a href="#" class="">
          <img src="${item.img}" class="card-img-top rounded-2" style="aspect-ratio: 1 / 1" />
        </a>
        <div class="card-body p-0 pt-2">
          <a href="#!" class="btn btn-light border px-2 pt-2 float-end icon-hover"><i
              class="fas fa-heart fa-lg px-1 text-secondary"></i></a>
          <h5 class="card-title">${item.rate}</h5>
          <p class="card-text mb-0">${item.pname}</p>
          <p class="text-muted">
            Sizes: ${item.size}
          </p>
        </div>
      </div>
    </div>`;

})
document.querySelector(".rec-products").innerHTML = clutter;
}

// Adding recomended products
recomendedProducts()
