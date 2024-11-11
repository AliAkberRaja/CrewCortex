


function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
                We Build Automations for <span class="auto-type" style="color: #18a2ff;"></span>
              </h1>
              <p class="mt-3">
                With our customized automation solutions, you can improve customer service. Our specialty is developing solutions that increase customer satisfaction and responsiveness. This frees up your support staff to concentrate on deeper conversations with clients while guaranteeing they get help when they need it.
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-default" href="#">Get Started</a>
              <a class="button btn-theme-2" href="#"
                ><i class="bi bi-play-circle me-2"></i> Watch Video</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5  d-flex justify-content-center"
          >
            <img class="" src="./Images/main.png" alt="" id="" />
          </div>
        </div>
        
  `;
  BG.innerHTML = `
       
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}


Herosection();

var typed = new Typed(".auto-type",{

  strings : ["Customer Support", "Saas Company","Startups"],
typeSpeed: 40,
backSpeed: 30,
loop: true,

})