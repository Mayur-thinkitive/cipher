document.addEventListener('DOMContentLoaded', function()
 {
    const contents = document.querySelectorAll('.loaddata .content');
    const imageElement = document.getElementById('image');

    contents.forEach(content =>
         {
        content.addEventListener('mouseover', function()
         {
            const newImage = content.getAttribute('data-image');
            imageElement.src = newImage;
        }
       );
    });
});




function showFeature(featureNumber)
 {
  var allFeatures = document.querySelectorAll('.feature');
  allFeatures.forEach(function(feature) 
  {
feature.style.display='none';
  });
  var selectedFeature =document.getElementById('feature'+featureNumber);
  if (selectedFeature) 
  {
    selectedFeature.style.display='block';
  }
}


// text-animation 

const texts = ['Patient Care', 'Specialties', 'Billing', 'Practice'];
let currentIndex = 0;

function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.style.animation = 'none';
    void textElement.offsetWidth; 
    textElement.innerHTML = texts[currentIndex];
    textElement.style.animation = 'slideIn 3s forwards';
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 2500);
changeText(); 


//text animation 



function showFeature(featureNumber, element, containerId) {
  var container = document.getElementById(containerId);
  var features = container.querySelectorAll('.feature');
  features.forEach(function(feature) {
    feature.style.display = 'none';
  });
  container.querySelector('#feature' + featureNumber).style.display = 'block';
  var links = container.querySelectorAll('.feature-links a');
  links.forEach(function(link) {
    link.classList.remove('active-link');
  });
  element.classList.add('active-link');
}