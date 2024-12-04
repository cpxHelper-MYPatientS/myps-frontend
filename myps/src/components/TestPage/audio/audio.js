export let isRecording = false;
let onFrameId = null;
let audioStream;

export const startRecording = () => {
  console.log("start 활성화");

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      isRecording = true;
      audioStream = stream;

      const context = new AudioContext();
      const analyser = context.createAnalyser();
      const mediaStreamAudioSourceNode =
        context.createMediaStreamSource(stream);
      mediaStreamAudioSourceNode.connect(analyser, 0);
      const pcmData = new Float32Array(analyser.fftSize);

      const onFrame = () => {
        analyser.getFloatTimeDomainData(pcmData);
        let sum = 0.0;
        for (const amplitude of pcmData) {
          sum += amplitude * amplitude;
        }
        const rms = Math.sqrt(sum / pcmData.length);
        const normalizedVolume = Math.min(1, rms / 0.5);
        colorVolumeMeter(normalizedVolume * 2);
        onFrameId = window.requestAnimationFrame(onFrame);
      };

      onFrameId = window.requestAnimationFrame(onFrame);
    })
    .catch((error) => {
      console.error("마이크 권한 획득 실패", error);
    });
};

export const stopRecording = () => {
  console.log("stop 활성화");

  // 녹음 상태를 false로 설정
  isRecording = false;
  // 애니메이션 프레임 취소
  if (onFrameId) {
    window.cancelAnimationFrame(onFrameId);
    onFrameId = null; // 프레임 ID 초기화
  }
  // 오디오 스트림 트랙들을 중지
  if (audioStream) {
    audioStream.getTracks().forEach((track) => {
      track.stop();
    });
    audioStream = null; // 스트림 객체 초기화
  }

  // 볼륨 미터 초기화
  const childrens = document.querySelectorAll(".volumeBar");
  childrens.forEach((child) => {
    child.style.backgroundColor = "#F6F7F8";
  });

  console.log("오디오 스트림 중지 완료");
};

const normalizeToInteger = (volume, min, max) => {
  const scaledValue = Math.min(max, Math.max(min, volume * (max - min) + min));
  return Math.round(scaledValue);
};

const colorVolumeMeter = (vol) => {
  const VOL_METER_MAX = 45;
  const childrens = document.querySelectorAll(".volumeBar");

  childrens.forEach((child) => {
    child.style.backgroundColor = "#F6F7F8";
  });

  const numberOfChildToColor = normalizeToInteger(vol, 0, VOL_METER_MAX);
  const coloredChild = Array.from(childrens).slice(0, numberOfChildToColor);

  coloredChild.forEach((child) => {
    child.style.backgroundColor = "#E9E6FF";
  });
};

// document.querySelector("#start").addEventListener("click", startRecording);
// document.querySelector("#stop").addEventListener("click", stopRecording);
