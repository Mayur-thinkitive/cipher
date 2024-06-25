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