// 시간 변화
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// 값을 바꿀 element 가져오기
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

// 두자리수 맞추기
function fillZero(num) {
  return String(num).padStart(2, '0')
}

// 종강까지 남은 시간 계산
function getCountDown() {
  const now = new Date()
  const nowTime = now.getTime()
  //   console.log(nowTime)

  const endDay = '08/22/2023'
  const endDayTime = new Date(endDay).getTime()
  //   console.log(endDayTime)

  const distance = endDayTime - nowTime
  console.log(distance)

  daysEl.innerText = fillZero(Math.floor(distance / day))
  hoursEl.innerText = fillZero(Math.floor((distance % day) / hour))
  minutesEl.innerText = fillZero(Math.floor((distance % hour) / minute))
  secondsEl.innerText = fillZero(Math.floor((distance % minute) / second))
}

// getCountDown()
setInterval(getCountDown, 1)
