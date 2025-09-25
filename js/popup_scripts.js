// Information Box Popup Scripts

// Variables for open and close tags
var openHeadingTag = "<h3>";
var closeHeadingTag = "</h3>";
var openTextTag = "<p>";
var closeTextTag = "</p>";
var openLinkTag = "<a href='#'>";
var closeLinkTag = "</a>";

// Variable for the text to close info box
var closeText = "Click This to Close";

// Array for text information (detailed descriptions for each pet)
var detailedInfoTexts = [
    "Max is a 3-year-old Labrador Retriever who absolutely loves playing fetch and going for long walks in the park. He's very friendly with children and other dogs, making him perfect for families. Max has been trained in basic commands and is housebroken. He enjoys swimming and would love a home with a yard where he can run around freely.",
    "Toby is just a spider.",
    "Luna is a beautiful 4-year-old Maine Coon cat who loves to climb and cuddle. She's very affectionate and enjoys being around people. Luna has a gentle personality and gets along well with children. She loves high places and would appreciate a cat tree or shelves to climb on. Luna is also very playful and enjoys interactive toys.",
    "Buddy is a sweet 5-year-old Golden Retriever who loves to be around people and other dogs. He's very social and enjoys being the center of attention. Buddy is great with children and has a calm, patient demeanor. He loves belly rubs and treats, and would be perfect for a family looking for a loyal companion. Buddy is also trained and housebroken.",
    "Zico is a mischievous 1-year-old Persian cat who enjoys sniffing around and going on adventures. Despite his young age, he's very curious and loves exploring every corner of his environment. Zico is playful and energetic, but also enjoys quiet moments of cuddling. He would be perfect for someone who can provide him with plenty of toys and attention.",
    "Maya is a graceful 3-year-old Siamese cat who loves to lounge in the sun and watch the world go by. She's very elegant and has a calm, sophisticated personality. Maya enjoys being pampered and loves soft blankets and comfortable spots to rest. She's perfect for someone who appreciates a more independent but loving feline companion.",
    "Charlie is an adorable 6-month-old kitten who loves to show off his tricks and play fetch. He's full of energy and curiosity, always ready for the next adventure. Charlie is very social and loves to be around people. He's still learning about the world and would benefit from a patient owner who can guide him as he grows up.",
    "Bella is a gentle 4-year-old Rottweiler who is very loyal and protective of her family. Despite her size, she has a sweet and loving nature. Bella is well-trained and responds well to commands. She's great with children and would be perfect for a family looking for a protective but gentle companion. Bella loves walks and enjoys spending time outdoors.",
    "Rocky is a brave 2-year-old mixed breed cat who loves to work and play hard. He's very active and enjoys interactive play sessions. Rocky is adventurous and loves to explore, but he's also very affectionate and enjoys cuddling after playtime. He would be perfect for someone who can provide him with plenty of stimulation and attention.",
    "Lucy is a cute 1-year-old mixed breed kitten who loves to dig and explore her surroundings. She's very playful and curious, always finding new ways to entertain herself. Lucy is social and gets along well with other pets. She loves toys that move and would be perfect for a family with children who can play with her."
];

// variables for DOM
var infoBox;
var infoHeading;
var infoText;
var closeInfoLink;

// Get DOM elements using getElementById
infoBox = document.getElementById("infoBox");
infoHeading = document.getElementById("infoHeading");
infoText = document.getElementById("infoText");
closeInfoLink = document.getElementById("closeInfo");

// Add event listener for close button
closeInfoLink.addEventListener("click", function () {
    closeInfoBox();
});

// Function to show information box
function showInfoBox(petIndex) {
    infoHeading.innerHTML = openHeadingTag + "Pet Information" + closeHeadingTag;
    infoText.innerHTML = openTextTag + detailedInfoTexts[petIndex] + closeTextTag;
    closeInfoLink.innerHTML = openLinkTag + closeText + closeLinkTag;
    infoBox.style.visibility = "visible";
}

// Function to close information box
function closeInfoBox() {
    infoBox.style.visibility = "hidden";
}
