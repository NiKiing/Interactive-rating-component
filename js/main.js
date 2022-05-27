// Rating

let rating;

function rate(item){
    console.log(item);
    rating = item.id[0];
    let name = item.id.substring(1); 

    for(let i=0; i<5; i++){

        if(i<rating){
            let finalRate = document.getElementById((i+1)+name);
            finalRate.style.backgroundColor= "hsl(25, 97%, 53%)";
            finalRate.style.color = "#ffffff";
            finalRate.style.transition = "0.5s";
            document.getElementById("final-rate").innerHTML = `You selected ${rating} out of 5`;

        }else{
            document.getElementById((i+1)+name).style.backgroundColor= "hsl(213, 19%, 18%)";
        }
    }
}



// Flip card 

const card = document.querySelector(".card-container");
const btn = document.getElementById("btn--card");

btn.addEventListener('click', () => {
    card.classList.toggle("flipCard");
});