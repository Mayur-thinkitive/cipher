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



educt
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