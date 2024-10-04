function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">Our Process</h2>
      <p class="mt-2">
Our method is straightforward but efficient. We work directly with you to comprehend your particular demands, create solutions that are tailored to your needs, and execute them with ease. We guarantee that we improve and adapt our solutions to your changing business needs through our iterative process.
      </p>
      <a class="button btn-theme-default mt-3" href="#"> Join Now </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./Images/career-illustration.png"
        alt=""
      />
    </div>
  </div>
    `;
  Career.appendChild(Container);
}
Career();
