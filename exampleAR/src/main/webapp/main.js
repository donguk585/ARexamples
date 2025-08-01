document.addEventListener('DOMContentLoaded', () => {
    const sceneEl = document.querySelector('a-scene');

    sceneEl.addEventListener('loaded', () => {
        console.log("MindAR Scene and A-Frame loaded.");
    });

    sceneEl.addEventListener('arReady', () => {
        console.log("AR system is ready. Point your camera at your face!"); // 메시지 변경
    });

    // --- 이 부분을 아래와 같이 수정하세요 ---
    // 기존: (이미지 타겟용)
    // sceneEl.addEventListener('targetFound', (event) => {
    //     console.log('Target found:', event.detail.targetIndex);
    // });
    // sceneEl.addEventListener('targetLost', (event) => {
    //     console.log('Target lost:', event.detail.targetIndex);
    // });

    // 변경: (얼굴 AR용)
    sceneEl.addEventListener('faceFound', (event) => {
        console.log('Face found!');
    });
    sceneEl.addEventListener('faceLost', (event) => {
        console.log('Face lost!');
    });
    // --- 수정 끝 ---

    // MindAR에 Three.js나 A-Frame 객체를 동적으로 추가하거나 제어할 필요가 있다면
    // 이 스크립트에서 해당 로직을 구현할 수 있습니다.
});