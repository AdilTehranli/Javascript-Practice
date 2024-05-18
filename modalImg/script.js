let previewCon = document.querySelector(".product_preview");
let previewBox = document.querySelectorAll(".preview");

document.querySelectorAll(".portfolio_cards .portfolio_card").forEach(product=>{
    product.onclick = ()=>{
        previewCon.style.display='flex'
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview=>{
        let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('active')
        }
        })
    }
})

previewBox.forEach(close =>{
    close.querySelector('.btn').onclick=() =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
    };
});