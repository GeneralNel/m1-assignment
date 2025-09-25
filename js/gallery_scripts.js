// Javascript code to add images
function addPetGallery() {
    var photos = []; //Declare an empty array to store image element
    var captions = []; //Declare an empty array to store caption element
    var descriptions = []; //Declare an empty array to store description element
    var fileNames = []; //Declare an empty element to store image file names
    var imageList = []; //Declare an empty array to store html list that contain an image
    var image; //Declare an empty variable to store the assembled image list codes
    var openList = "<li id='photo"; //Declare a variable to contain open list tag
    var closeList = '</li>'; //Declare a variable to contain close list tag
    var openCaptionTag = "<div class='caption'>"; //Declare a variable to contain open caption tag
    var closeCaptionTag = "</div>"; //Declare a variable to contain close caption tag
    var openDescTag = "<div class='description'>"; //Declare a variable to contain open description tag
    var closeDescTag = "</div>"; //Declare a variable to contain close description tag
    var captionTexts = ["Max", "Toby", "Luna", "Buddy", "Zico", "Maya", "Charlie", "Bella", "Rocky", "Lucy"]; //Declare an array to store caption text for each image
    var descTexts = [
        "Friendly Labrador who loves to play fetch and go for long walks.",
        "Curious spidy who enjoys exploring new places and chasing toys.",
        "Playful Maine Coon cat who loves to climb and cuddle.",
        "Sweet Golden Retriever who loves to be around people and other dogs.",
        "Mischievous Persian cat who enjoys sniffing around and going on adventures.",
        "Beautiful Siamese cat who loves to lounge in the sun and watch the world go by.",
        "Playful kitten who loves to show off his tricks and play fetch.",
        "Gentle Rottweiler who is very loyal and protective of her family.",
        "Brave cat who loves to work and play hard.",
        "Cute kitty who loves to dig and explore her surroundings."
    ];

    //Create a loop to create 10 images starting with index of 0
    for (var i = 0; i < 10; i++) {
        fileNames.push("pet (" + (i + 1) + ")"); //create image file name
        photos.push("<img src='images/pets/" + fileNames[i] + ".jpg'>"); //assemble image code
        captions.push(openCaptionTag + captionTexts[i] + closeCaptionTag); //assemble caption
        descriptions.push(openDescTag + descTexts[i] + closeDescTag); //assemble description
        galleryItem = openList + (i + 1) + "'>" + photos[i] + descriptions[i] + captions[i] + closeList; //assemble image list code
        imageList.push(galleryItem); //Store(push) the assembled list code
    }

    //Display all ten image codes stored in the array
    document.getElementById("gallery").innerHTML = imageList.join("");
}

addPetGallery(); //Call the function to add images