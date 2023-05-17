// export let cardsInfo=[
//     {
//       "linkContainer": "#",
//       "img": "/../assets/img/projects1.png",
//       "title": "Project 1",
//       "paragraph": "Lorem ips"
//     },
//     {
//       "linkContainer": "#",
//       "img": "/../assets/img/projects2.png",
//       "title": "Project 2",
//       "paragraph": "Lorem ips"
//     },
//     {
//       "linkContainer": "#",
//       "img": "/../assets/img/projects3.png",
//       "title": "Project 3",
//       "paragraph": "Lorem ips"
//     },
//     {
//       "linkContainer": "#",
//       "img": "/../assets/img/projects4.png",
//       "title": "Project 4",
//       "paragraph": "Lorem ips"
//     }
//   ]




const proj=document.querySelector(".portfolio_list");

export default function cards (element){

    for(let card of element){

        let itemContainer= document.createElement("li");
        itemContainer.classList.add("portfolio_items");
        proj.appendChild(itemContainer);

        let linkContainer = document.createElement("a");
        linkContainer.classList.add("portfolio_cards");
        linkContainer.setAttribute("href",card.linkContainer);
        itemContainer.appendChild(linkContainer);

        let img = document.createElement("img");
        img.classList.add("portfolio_img");
        img.setAttribute("src",card.img);
        linkContainer.appendChild(img);

        let infoContainer = document.createElement("aside");
        infoContainer.classList.add("portfolio_card_info");
        linkContainer.appendChild(infoContainer);

        let divContainer = document.createElement("div");
        infoContainer.appendChild(divContainer);

        let title = document.createElement("h4");
        title.innerHTML=card.title;
        divContainer.appendChild(title);

        let paragraph = document.createElement("p");
        paragraph.innerHTML=card.paragraph;
        divContainer.appendChild(paragraph);

    }
    return element;
}