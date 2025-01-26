let photoList;
let photoImageDiv;


// get an image from photography api
function fetchImage() {
	
	let width = window.innerWidth - 250; 
	let height = window.innerHeight - 200; 
	
  fetch ('https://picsum.photos/' + width + '/'+ height) 
    //.then(response => response.json())
    .then(data => updateImage(data) 
    );
} // window.onload 

// initialize variables after page loads
window.onload = function() {
  photoImageDiv = document.getElementById ("photoimage");
  photoList = document.getElementById("photo"); 
  fetchImage(); 
} // window.onload


//updates the photography image 
function updateImage(data) {
	console.log(data);
	console.log(data.url);
	if (data.url != undefined) photoImageDiv.src = data.url;
	
}

//fetches an author for the according image 
function fetchAuthor(type) {
	let url = "https://picsum.photos/id/0/info"
	
  fetch(url)
    .then(response => response.json())
    .then(data => updateImage(data) 
    );
}

//fetches an image in greyscale phototype 
function fetchGrayscale(type) {
	let url = "https://picsum.photos/650?grayscale"
	
  fetch(url)
    //.then(response => response.json())
    .then(data => updateImage(data) 
    );
}

//fetches an image in blur phototype  
function fetchBlur(type) {
	let url = "https://picsum.photos/650?blur=2"
	
  fetch(url)
    //.then(response => response.json())
    .then(data => updateImage(data) 
    );
}

//fetches the images in both phototypes  
function fetchBoth(type) {
	let url = "https://picsum.photos/id/870/650?grayscale&blur=2"
	
  fetch(url)
    //.then(response => response.json())
    .then(data => updateImage(data) 
    );
}

//fetches the images in Web Format   
function fetchWebformat(type) {
	let url = "https://picsum.photos/650.webp"
	
  fetch(url)
    //.then(response => response.json())
    .then(data => updateImage(data) 
    );
}

//fetches a photo list with 30 photos 
function fetchList(type) {
	let url = "https://picsum.photos/v2/list?page=2&limit=100"
	
  fetch(url)
    .then(response => response.json())
    .then(data => updateImage(data) 
    );
}

 function refreshPage(){
    window.location.reload();
}
