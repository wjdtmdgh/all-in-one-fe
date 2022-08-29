import {Button} from "antd";

export default function Camera(){
  const constraints = window.constraints = {
    audio: false,
    video: true
  };

  function handleSuccess(stream) {
    const video = document.querySelector('video');
    const videoTracks = stream.getVideoTracks();
    console.log('Got stream with constraints:', constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    window.stream = stream;
    video.srcObject = stream;
  }

  function handleError(error) {
    if (error.name === 'OverconstrainedError') {
      const v = constraints.video;
      errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
    } else if (error.name === 'NotAllowedError') {
      errorMsg('카메라와 마이크를 사용할 수 있는 권한이 없습니다.');
    }
    errorMsg(`getUserMedia error: ${error.name}`, error);
  }

  function errorMsg(msg, error) {
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }

  async function init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
      e.target.disabled = true;
    } catch (e) {
      handleError(e);
    }
  }

  return <div>
    <video autoPlay playsInline></video>
    <Button onClick={init}>Open camera</Button>
  </div>
}