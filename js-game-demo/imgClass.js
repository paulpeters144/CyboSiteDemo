class ImgInfo {
  Load(path, imgScale) {
    this.path = path;
    this.imgScale = imgScale;
    this.name = path.split('/')[path.split('/').length - 1].split('.')[0];
    showImage(this.path, this);
  }
}

function findHHandWW() {
  console.log(this.width, this.height);
}

function showImage(imgPath, self) {
  const myImage = new Image();
  myImage.name = imgPath;
  myImage.onload = findHHandWW;
  myImage.src = imgPath;
}

export default ImgInfo;
