// Heart on/off
let voteHeart = document.querySelectorAll('.product-main-unit-content-vote__heart');
voteHeart.forEach(function(item, index){
    item.addEventListener('click', function(e){
        item.classList.toggle('heart--enable');
        e.preventDefault();
    })
})

