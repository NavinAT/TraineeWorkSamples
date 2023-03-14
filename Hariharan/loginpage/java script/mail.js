

function countdown() {
    var seconds = 65;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        document.getElementById("verifiBtn").innerHTML = `
            <div class="Btn" id="ResendBtn">
                <button type="submit">Resend</button>
            </div>
        `;
        document.getElementById("counter").innerHTML = "";
      }
    }
    tick();
  }
  countdown();

function genarateOTP() {
    var num = '0123456789';
    let OTP = '';
    for(let i=0 ; i<6 ; i++){
        OTP +=num[Math.floor(Math.random() *10)];
    }
    console.log(OTP);
}

genarateOTP();


function mailsend() {
    
}