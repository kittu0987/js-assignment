// Sample data for cards with placeholder image URLs
const cardData = [
    { title: "Card 1", description: "Description for card 1", image: "https://picsum.photos/200/150?random=1" },
    { title: "Card 2", description: "Description for card 2", image: "https://picsum.photos/200/150?random=2" },
    { title: "Card 3", description: "Description for card 3", image: "https://picsum.photos/200/150?random=3" },
    { title: "Card 4", description: "Description for card 4", image: "https://picsum.photos/200/150?random=4" },
    { title: "Card 5", description: "Description for card 5", image: "https://picsum.photos/200/150?random=5" },
  ];
  
  // Get the container for cards
  const cardContainer = document.getElementById("cardContainer");
  
  // Generate card HTML using a for loop
  for (let i = 0; i < cardData.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${cardData[i].image}" alt="${cardData[i].title}">
      <h3>${cardData[i].title}</h3>
      <p>${cardData[i].description}</p>
    `;
  
    cardContainer.appendChild(card);
  }
  