function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-1 row-cols-lg-2 gx-5">
  <div class="text-body col py-5">
    <h2 class="title fw-bold">
          Got Questions?
    </h2>
    <p>
We are available to assist you! Please contact us if you have any questions concerning our procedures, services, or how we may help your company. Our experienced staff is prepared to give you the information you require in order to make wise choices.
    </p>
    <div class="badges mt-5">
      <p>Our Contact</p>
      <div class="badges-items me-3 d-none d-sm-block">
        <a class="badge-item text-decoration-none" href="#1">
          <img
            class="item"
            src="./Images/Store badge.svg"
            alt=""
            srcset=""
          />
        </a>
        <a class="badge-item text-decoration-none" href="#2">
          <img
            class="item"
            src="./Images/Store badge-1.svg"
            alt=""
            srcset=""
          />
        </a>
      </div>
    </div>
  </div>
  <div class="col container-body overflow-hidden">
    <img class="img-fluid" src="./Images/mockup-mobiles.png" alt="" />
  </div>
</div>
  `;
  CTA.appendChild(Container);
}
CTA();
