const fileInput = document.getElementById('file-input');
const imageContainer = document.getElementById('image-container');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const urls = reader.result.split('\n');
    renderImages(urls);
  };

  reader.readAsText(file);
});

function renderImages(urls) {
  imageContainer.innerHTML = ''; // 清空之前渲染的图片

  urls.forEach((url) => {
    if (url.trim()) {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const ratio = width / height;
        const maxWidth = 150;
        const maxHeight = maxWidth / ratio;

        img.width = maxWidth;
        img.height = maxHeight;
        imageContainer.appendChild(img);
      };
    }
  });
}