function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">Cross-Industry Experience</h2>
      <p class="mt-2">
Our staff has extensive experience in a variety of industries, including e-commerce, entertainment, healthcare, and finance. Because of our wide range of experience, we can modify and apply industry best practices to your project, guaranteeing creative solutions that are suited to your particular company requirements.
      </p>
      <a class="button btn-theme-default mt-3" href="#"> Contact Now </a>
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
