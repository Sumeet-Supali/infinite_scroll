

const container = document.querySelector(".container");

window.addEventListener("scroll",function(){
    let almost_bottom_reached = container.scrollTop + container.clientHeight >= container.scrollHeight-100;
    
    if(almost_bottom_reached){
        create_new_elements();
    }
})

function create_new_elements(){

    fetch('https://pixabay.com/api/?key=41530548-951a19786c5c49c45c0508ced&q=food&image_type=photo')
    .then(Response => Response.json())
    .then(data => {
        // console.log(data);
        const image_urls = data.hits.map(hit => hit.largeImageURL);
        // alert(image_urls)
        for (let i=0;i<=5;i++){
            //creating card
            let card = document.createElement('div');
            card.classList.add('card');
            card.textContent = "This is infinte card";

            //creating image
            let img = document.createElement('img');
            img.src = image_urls[i];
            // img.style.width = "250px";
            // img.style.height = "400px";
            // img.style.objectFit = "cover";
            card.appendChild(img);

            container.appendChild(card);
        }
    })

    
}







