// 로그인 버튼을 선택해서 클릭 이벤트를 추가해줌
document.getElementById("loginBtn").addEventListener("click", function () {
  const id = prompt("ID를 입력하세요:");
  const pw = prompt("PW를 입력하세요:");

  // 확인용 alert (원하면 생략 가능)
  alert(`입력된 ID: ${id}\n입력된 PW: ${pw}`);
});
