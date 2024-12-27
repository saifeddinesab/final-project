function upDate(previewPic) {
  var image = previewPic.src;
  document.getElementById("image").style.backgroundImage = "url('" + image + "')";
  var text = previewPic.alt;
  document.getElementById("image").innerHTML = text;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function initializeGallery() {
  console.log("Gallery loaded!");

  // Loop through each image to add focus and blur event listeners
  var previews = document.querySelectorAll('.preview');
  previews.forEach(function(preview) {
      preview.addEventListener('focus', function() {
          upDate(this);
          console.log("Image focused:", this.alt);
      });
      preview.addEventListener('blur', function() {
          unDo();
          console.log("Image blurred:", this.alt);
      });
  });
}
