const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt user to select media stream, pass to video element, then display
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    // Catch Error
    console.log(error);
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disable = true;
  // Start picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disable = true;
});

// On Load
selectMediaStream()
