const images = ["0.jpg", "1.jpg", "2.jpg"]; // 이미지 파일들을 images 폴더에 넣어주세요

function paintImage() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url('images/${chosenImage}')`;
}

paintImage();
