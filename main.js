const drop = document.querySelector('.dropdown')

const targetitem =document.querySelector('.dropbox-wrapper')
console.log("hello")
let count =0

drop.addEventListener('click',()=>{
 
    if(count%2 === 0){
    targetitem.style.display="block";
    console.log("lo")
}
else{
    targetitem.style.display="none";
}
count++;

    console.log("hey");
})


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const maindiv = document.querySelector('.con5-wrapper')
  const obj1 = document.querySelector("#value");
  const obj2 = document.querySelector("#value1");
  const obj3 = document.querySelector("#value2");
  let count2 =2;
  maindiv.addEventListener('mouseover',()=>{
      

      if(count%2 == 0 && count >=0){
      animateValue(obj1, 0, 1000, 2000);
      animateValue(obj2, 0, 560, 3000);
      animateValue(obj3, 0, 600, 3000);
      }
      count = count-2
  })

  



//   $(".slider").owlCarousel({
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 2000, //2000ms = 2s;
//     autoplayHoverPause: true,
//   });


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

// Set cookie consent
function acceptCookieConsent(){
  deleteCookie('user_cookie_consent');
  setCookie('user_cookie_consent', 1, 30);
  document.getElementById("cookieNotice").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
  document.getElementById("cookieNotice").style.display = "block";
}else{
  document.getElementById("cookieNotice").style.display = "block";
}