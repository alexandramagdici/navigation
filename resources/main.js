document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    console.log('menuItems', menuItems)

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        
        menuItem.addEventListener('click', function() {
            for(let j = 0; j < menuItems.length; j++) {
                if(menuItems[j].classList.contains('selected')){
                    menuItems[j].classList.remove("selected");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("selected");

            const dataBadge = menuItem.dataset.badge;
            const badgeImage = document.getElementsByClassName("badge");
            for(let z = 0; z < badgeImage.length; z++) {
                if(badgeImage[z].classList.contains('hidden')){
                    continue;
                } else {
                    badgeImage[z].classList.add('hidden');
                }
            }
            document.getElementsByClassName(dataBadge)[0].classList.remove('hidden');
            console.log('dataBadge', dataBadge);


            const dataContent = menuItem.dataset.content;
            console.log('dataContent', dataContent)
            const contentElements = document.getElementsByClassName("content");
            for(let k = 0; k < contentElements.length; k++) {
                if(contentElements[k].classList.contains('hidden')) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
        });
    }

    const yourOrder = document.getElementById('yourOrder');
    const orderDetails = document.getElementById('orderDetails');
    const openOrderDetails = document.getElementById('openOrderDetails');
    const closeOrderDetails = document.getElementById('closeOrderDetails');

    openOrderDetails.addEventListener('click', function(){
        orderDetails.classList.remove('hidden');
        yourOrder.classList.add('hidden');
    });

    closeOrderDetails.addEventListener('click', function() {
        orderDetails.classList.add('hidden');
        yourOrder.classList.remove('hidden');
    });
});