window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.display = "none";
        }

    }, 2500);

});

const passwordSection =
    document.getElementById("passwordSection");

const mainContent =
    document.getElementById("mainContent");

const unlockBtn =
    document.getElementById("unlockBtn");

const passwordInput =
    document.getElementById("passwordInput");

const errorMsg =
    document.getElementById("errorMsg");

unlockBtn.addEventListener("click", () => {

    const password =
        passwordInput.value.trim().toUpperCase();

    if (password === "BETU") {

        passwordSection.style.display = "none";

        mainContent.classList.remove("hidden");
        document
        .getElementById("cakeSection")
        .classList
        .remove("hidden");

    } else {

        errorMsg.innerText =
            "Oops! Wrong Password ❤️";

    }

});

const blowBtn = document.getElementById("blowCandleBtn");

if(blowBtn){

    blowBtn.addEventListener("click", () => {

        const flame = document.querySelector(".flame");

        if(flame){
            flame.style.display = "none";
        }

        if(typeof confetti !== "undefined"){

            confetti({
                particleCount:300,
                spread:360,
                startVelocity:45,
                origin:{y:0.6}
            });

        }

        const msg = document.createElement("div");

        msg.innerHTML = `
        <div style="
        background:white;
        padding:25px;
        border-radius:20px;
        text-align:center;
        max-width:320px;
        box-shadow:0 10px 30px rgba(0,0,0,.2);
        ">
            <h2 style="color:#ff4d6d;">
                🎂 Wish Granted ❤️
            </h2>

            <p style="margin-top:10px;">
                May your smile always shine brighter than these candles ✨
                <br><br>
                Happy Birthday My Beautiful Betu ❤️
            </p>
        </div>
        `;

        msg.style.position = "fixed";
        msg.style.top = "0";
        msg.style.left = "0";
        msg.style.width = "100%";
        msg.style.height = "100%";
        msg.style.background = "rgba(0,0,0,.5)";
        msg.style.display = "flex";
        msg.style.justifyContent = "center";
        msg.style.alignItems = "center";
        msg.style.zIndex = "9999";

        document.body.appendChild(msg);

        setTimeout(() => {
            msg.remove();
        }, 3000);

    });

}

const wishBtn = document.getElementById("wishBtn");
if (wishBtn) {
    wishBtn.addEventListener("click", () => {
        document
            .getElementById("cakeSection")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}

const yesBtn = document.getElementById("yesBtn");
const yesBtn2 = document.getElementById("yesBtn2");

const popup = document.getElementById("lovePopup");
const closePopup = document.getElementById("closePopup");

const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

if(yesBtn){
    yesBtn.addEventListener("click", () => {
        confetti({
            particleCount:500,
            spread:360
        });
    });
}
if(yesBtn2){
    yesBtn2.addEventListener("click", () => {
        confetti({
            particleCount:700,
            spread:360
        });
    });
}

const finalMessage = document.getElementById("finalMessage");

if(yesBtn){
    yesBtn.addEventListener("click", () => {

        popupTitle.innerHTML = "❤️ Yayyy Betu ❤️";
        popupText.innerHTML = "I knew you would say YES 😘";
        popup.classList.remove("hidden");
        finalMessage.classList.remove("hidden");
    });
}

if(yesBtn2){
    yesBtn2.addEventListener("click", () => {

        popupTitle.innerHTML = "💍 Forever & Ever ❤️";
        popupText.innerHTML = "You just made my day, Betu 🥰";
        popup.classList.remove("hidden");
        if(typeof confetti !== "undefined"){
            confetti({
                particleCount:300,
                spread:180
            });
        }
        finalMessage.classList.remove("hidden");
    });
}

if(closePopup){
    closePopup.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
}

const bgMusic = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    if(bgMusic){
        bgMusic.volume = 0.1;

        bgMusic.play()
            .then(() => console.log("Music Started"))
            .catch(err => console.log(err));
    }
}, { once: true });