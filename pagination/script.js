const perPage=4;
const dataContainer=document.querySelector(".all_item");
const pagination = document.querySelector(".all_pagination");
const pageLink= document.querySelectorAll(".page_link");
const cards= Array.from(dataContainer.getElementsByClassName("card"));

const totalPage= Math.ceil(cards.length/perPage)
let currentPage =1

function displayPage(page) { 
    const startIndex = (page - 1) * perPage; 
    const endIndex = startIndex + perPage; 
    cards.forEach((card, index) => { 
        if (index >= startIndex && index < endIndex) { 
            card.style.display = 'block'; 
        } else { 
            card.style.display = 'none'; 
        } 
    }); 
} 
pageLink.forEach((link) => { 
    link.addEventListener('click', (e) => { 
        e.preventDefault(); 
        const page = parseInt(link.getAttribute('data-page')); 
        if (page !== currentPage) { 
            currentPage = page; 
            displayPage(currentPage); 
        } 
    }); 
}); 

displayPage(currentPage)    