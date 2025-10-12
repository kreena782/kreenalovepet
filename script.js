// ---------------------------
// PET DATA WITH IMAGES
// ---------------------------
const pets = [
  { name: "Snookey", type: "Dog", breed: "Labrador", image: "https://i.pinimg.com/736x/70/78/6e/70786e80f3eb04dc3f42f6504797be3c.jpg" },
  { name: "Milo", type: "Cat", breed: "Persian", image: "https://media.istockphoto.com/id/633114008/photo/white-persian-cats.jpg?s=612x612&w=0&k=20&c=CwjTbqPF7_4aO9TUhX3XpaPJ7ozxVpY4-tKpKliK-rg=" },
  { name: "Rover", type: "Dog", breed: "Rottweiler", image: "https://patmypets.com/wp-content/uploads/2021/11/rottweiler_Dog-breed-age-characteristics.jpg" },
  { name: "Luna", type: "Rabbit", breed: "Holland Lop", image: "https://cdn.creatures.com/de5/bcb/018/bd39d.jpeg" },
  { name: "Stark", type: "Dog", breed: "Husky", image: "https://www.timeforpaws.co.uk/cdn/shop/articles/dog-3139757_1280.jpg?v=1626247350&width=1100" },
  { name: "Snow", type: "Cat", breed: "Persian", image: "https://cdn.prod.website-files.com/659c0b0024c127bdbe890959/673a2eb3c1d361675009f9b7_31.jpg" },
  { name: "Buffy", type: "Dog", breed: "German Shepherd", image: "https://images.squarespace-cdn.com/content/v1/5baffc59fb182025fee90fef/92442d27-b354-4240-b998-bcbe0f1cd91c/German-shepherd-training-main.jpg" },
  { name: "Bugs", type: "Rabbit", breed: "Polish", image: "https://ccspca.com/wp-content/uploads/2017/11/Polish-Rabbit-1024x768.png" },
  { name: "Jerry", type: "Dog", breed: "Pomeranian", image: "https://patmypets.com/wp-content/uploads/elementor/thumbs/Pomeranian-Pom-Dog-Breed-Information-Characteristics-Price-qk85w1ro5me8ayocfcc157ftvxdzvrjj0gqxp6igze.png" },
  { name: "Lara", type: "Cat", breed: "British Shorthair", image: "https://cdn.shopify.com/s/files/1/2668/1922/files/british-shorthair-1.jpg?v=1689089942" },
  { name: "Jack", type: "Dog", breed: "Doberman", image: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181048/202104doberman-pinscher-puppy.jpg" },
  { name: "Bella", type: "Cat", breed: "Burmese", image: "https://www.thesprucepets.com/thmb/0d1uo3Xff47rqz0MQEop4LuJoZ0=/2613x0/filters:no_upscale():strip_icc()/burmese-cat-breed-profile-4584510-05-36dee54aff2848a49f048444e2ea46ac.jpg" },
  { name: "Simba", type: "Dog", breed: "Golden Retriever", image: "https://www.davpetlovers.com/wp-content/uploads/2025/03/golden-retriver.jpg" },
  { name: "Cloud", type: "Rabbit", breed: "Dutch", image: "https://i.pinimg.com/736x/b1/f5/70/b1f570f19254939284d09835938d9574.jpg" },
  { name: "Buddy", type: "Dog", breed: "Corgi", image: "https://cdn.britannica.com/80/232780-050-404D6708/Pembroke-welsh-corgi-dog.jpg" },
  { name: "Oliver", type: "Cat", breed: "Siberian", image: "https://cdn.shopify.com/s/files/1/0765/3946/1913/files/Portrait_of_Siberian_Cat.jpg?v=1738750508" },
  { name: "Rio", type: "Dog", breed: "German Shepherd", image: "https://media1.popsugar-assets.com/files/thumbor/GpElLlg32ANnnEc95GkeROMKw88=/0x159:2003x2162/fit-in/792x990/filters:format_auto():upscale()/2019/08/07/875/n/24155406/9ffb00255d4b2e079b0b23.01360060_.jpg" },
  { name: "Sugar", type: "Rabbit", breed: "Mini Lop", image: "https://articles.hepper.com/wp-content/uploads/2023/05/mini-lop-rabbit_FiledIMAGE_Shutterstock.jpg" },
  { name: "Genie", type: "Dog", breed: "Beagle", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZrTtw4zIH3M36-sd7h2d6dqESSdnEhBuUg&s" },
  { name: "Kitty", type: "Cat", breed: "Burmese", image: "https://www.shutterstock.com/image-photo/adorable-burmese-kitten-on-sofa-600nw-2532246547.jpg" },
  { name: "Blue", type: "Dog", breed: "Husky", image: "https://i.pinimg.com/736x/77/79/1d/77791d2f204951053164df8bf3acdbf3.jpg" },
  { name: "Peter", type: "Rabbit", breed: "Dutch", image: "https://media.istockphoto.com/id/182679913/photo/dutch-rabbit.jpg?s=612x612&w=0&k=20&c=rzhjjKowm-YIhmURSfSXwG9J4PY1-OFtcYJ5qacl5Vc=" },
  { name: "Sara", type: "Dog", breed: "Chow Chow", image: "https://w0.peakpx.com/wallpaper/740/213/HD-wallpaper-chow-chow-white-fluffy-puppy-funny-dog-little-cute-dog-pets-puppies-dogs.jpg" },
  { name: "Max", type: "Dog", breed: "Golden Retriever", image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg" }
];

// ---------------------------
// RENDER PETS
// ---------------------------
if (document.getElementById("petList")) renderPets(pets);

function renderPets(list) {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";

  list.forEach(pet => {
    const card = document.createElement("div");
    card.className = "pet-card";
    card.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}" />
      <h3>${pet.name}</h3>
      <p>${pet.type} - ${pet.breed}</p>
      <button onclick="addToFavorites('${pet.name}')">❤️ Favorite</button>
    `;
    petList.appendChild(card);
  });
}

// ---------------------------
// SESSION FAVORITES (Multi-Page)
// ---------------------------
let sessionFavorites = JSON.parse(sessionStorage.getItem("favorites")) || [];

function addToFavorites(name) {
  if (!sessionFavorites.includes(name)) {
    sessionFavorites.push(name);
    sessionStorage.setItem("favorites", JSON.stringify(sessionFavorites));
    updateFavoritesUI();
    alert(name + " added to favorites!");
  } else {
    alert(name + " is already in favorites.");
  }
}

function updateFavoritesUI() {
  const favContainer = document.getElementById("favoritesList");
  if (!favContainer) return;

  if (sessionFavorites.length === 0) {
    favContainer.innerHTML = "<p>No favorites yet.</p>";
  } else {
    favContainer.innerHTML = sessionFavorites
      .map(f => `<div class="pet-card"><h3>${f}</h3></div>`)
      .join('');
  }
}

// Initialize favorites UI on page load
window.addEventListener("DOMContentLoaded", updateFavoritesUI);

// ---------------------------
// ADOPTION FORM VALIDATION
// ---------------------------
const form = document.getElementById("adoptForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneInput.value.trim())) {
      phoneError.textContent = "❌ Please enter a valid 10-digit phone number.";
      phoneError.style.color = "red";
      phoneInput.focus();
      return;
    } else {
      phoneError.textContent = "";
    }

    alert("✅ Thank you for your adoption request! We'll contact you soon.");
    form.submit();
    form.reset();
    
  });
}

// ---------------------------
// SEARCH AND FILTER PETS
// ---------------------------
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

if (searchInput && filterSelect) {
  searchInput.addEventListener("input", filterPets);
  filterSelect.addEventListener("change", filterPets);
}

function filterPets() {
  const search = searchInput.value.toLowerCase();
  const type = filterSelect.value;

  const filtered = pets.filter(p =>
    (p.name.toLowerCase().includes(search) || p.breed.toLowerCase().includes(search)) &&
    (type === "All" || p.type === type)
  );

  renderPets(filtered);
}

// 🧾 Donation via UPI
function donateUPI() {
  const info = document.getElementById("upiInfo");
  if (info) {
    info.style.display = info.style.display === "none" ? "block" : "none";
  }
}

// 📬 Newsletter Subscription
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;
    document.getElementById("newsletterMsg").innerText = `🎉 Thank you, ${email}! You are subscribed!`;
    newsletterForm.reset();
  });
}

// ---------------------------
// LOGOUT + LOGIN PROTECTION
// ---------------------------
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  if (sessionStorage.getItem("loggedIn") === "true") {
    logoutBtn.style.display = "inline-block";
  } else {
    logoutBtn.style.display = "none";
  }

  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("loggedUser");
    window.location.href = "login.html";
  });
}

(function protectPages() {
  const publicPages = ["login.html", "index.html"];
  const pathname = window.location.pathname.split("/").pop();

  if (!publicPages.includes(pathname) && sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
})();

const welcomeUser = document.getElementById("welcomeUser");
const loggedUser = sessionStorage.getItem("loggedUser");
if (welcomeUser) {
  welcomeUser.textContent = loggedUser ? `Welcome, ${loggedUser}` : "";
}

// ---------------------------
// 💬 Chatbot Functionality
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById("chatbot");
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const closeChatbot = document.getElementById("close-chatbot");
  const messages = document.getElementById("chatbot-messages");
  const input = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("send-btn");

  if (!chatbot || !chatbotToggle || !messages || !input || !sendBtn) return;

  chatbotToggle.addEventListener("click", () => {
    chatbot.style.display = "flex";
    chatbotToggle.style.display = "none";
  });

  closeChatbot.addEventListener("click", () => {
    chatbot.style.display = "none";
    chatbotToggle.style.display = "block";
  });

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;
    appendMessage("user", userText);
    input.value = "";

    setTimeout(() => {
      appendMessage("bot", getBotResponse(userText));
    }, 600);
  }

  function appendMessage(sender, text) {
    const message = document.createElement("div");
    message.classList.add(sender === "bot" ? "bot-message" : "user-message");
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  // Basic auto-replies
  function getBotResponse(input) {
    const text = input.toLowerCase();
    if (text.includes("adopt")) return "You can view adoptable pets under the ‘Find Pets’ section! 🐶🐱";
    if (text.includes("donate")) return "Thank you! ❤️ Visit our ‘Donate’ page to support rescued animals.";
    if (text.includes("help")) return "I’m here to help! You can adopt, donate, or contact us via email.";
    if (text.includes("contact")) return "Reach us at adoptions@gmail.com or +91 98765 43210.";
    return "Sorry, I didn’t understand that. Try asking about adoption, donation, or contact info. 🐾";
  }
});
