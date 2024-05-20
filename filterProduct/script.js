const filterProduct=document.querySelectorAll(".product_lists li")
const filterCard=document.querySelectorAll(".all_products .product_box")


const filtercard = e=>{

    filterCard.forEach(card=>{
        
        card.classList.add("hide")
        if(card.dataset.name===e.target.dataset.name || e.target.dataset.name==="fruits"){
            card.classList.remove("hide")

        }
    })
}


filterProduct.forEach(btn=>btn.addEventListener("click",filtercard))