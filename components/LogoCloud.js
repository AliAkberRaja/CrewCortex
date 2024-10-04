function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");
  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");
  Container1.classList.add("container", "border-top", "border-bottom", "py-4");
  Container2.classList.add("container");
  Container1.innerHTML = `
  <div
          class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gy-5 justify-content-center"
        >
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/wordpress.png" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/airtable.png" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/xano.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/bubble.io.png" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Google-flutter-logo.svg.png" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-06.svg" alt="ClientLogo" srcset="" />
          </div>
        </div>
  `;
  Container2.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 gy-5 gx-5">
          <div class="text-body col">
            <h2 class="title fw-bold">Delivering End-to-End Automation Solutions</h2>
            <p class="Description mt-2">
              We provide a wide range of automation services, such as tiny SaaS solutions, intelligent dashboards, no-code web development (using tools like Bubble, Airtable, and Xano), process optimization, AI agents, and content automation. Our mission is to equip your company with the instruments and frameworks required for smooth operations and data-driven decision-making.
            </p>
          </div>
          <div class="content col">
            <img class='img-fluid' src="./Images/cctech.svg" alt="" srcset="" />
          </div>
        </div>
  `;
  LogoCloud1.appendChild(Container1);
  LogoCloud2.appendChild(Container2);
}
LogoCloud();
