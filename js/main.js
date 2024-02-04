$('.toggle').click(function () {
    $('.nav-list').slideToggle()
})

$('.nav-item').click(function () {
    $('.nav-list').removeClass('active')
})

// banner輪播
// $(function () {
//     let curNum = 1
//     setInterval(() => {
//         console.log(curNum)
//         if (curNum < 2) {
//             curNum++
//         } else {
//             curNum = 1
//         }
//         $('#banner, .fadeToggle').fadeToggle(800)
//     }, 3000)
// })

// loading
window.onload = function () {
    $('#loading').fadeOut(1000)
    new WOW().init()
    wowMob.init()
    console.log('load')
}

// 點擊a連結
function demo() {
    alert('此網站僅供展示使用，若有任何問題歡迎來信：\nviolett1100@gmail.com')
}

// wow
wowMob = new WOW({
    boxClass: 'wow__mob', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: false, // default
    live: false, // default
})
