function Aboutus() {
  const Aboutus = document.getElementById("Aboutus");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `<div class="text-body d-flex flex-column align-items-center">
  <h2 class="text-center fw-bold">About Us</h2>
  <p class="text-center">
    CrewCortex is an AI based firm that leverages advanced AI technologies to provide innovative, efficient, and scalable solutions tailored to your needs.
  </p>
</div>
<div class="row mt-5">

  <!-- About Section 1 -->
  <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
    <div class="inner-box overflow-hidden position-relative">
          <h5 style="font-weight: bold; text-align: center;">Our Expertise</h5>
    <img src="Images/img03.png" alt="Image description" style="width: 70px; height: 70px; display: block; margin: 0 auto;" />


      <div class="table-content">
        <ul>
          <li><span><i class="bi bi-check2"></i>LLM-based Workflows</span></li>
          <li><span><i class="bi bi-check2"></i>Retrieval Augmented Generation</span></li>
          <li><span><i class="bi bi-check2"></i>Synthetic Media</span></li>
          <li><span><i class="bi bi-check2"></i>AI-Powered Chatbots</span></li>
        </ul>
      </div>
      <div class="table-footer">
        <a href="#Careers" class="button btn-theme-1">Learn More</a>
      </div>
    </div>
  </div>

  <!-- About Section 2 -->
  <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
    <div class="inner-box overflow-hidden position-relative">
          <h5 style="font-weight: bold; text-align: center;">Our Services</h5>
    <img src="Images/img02.png" alt="Image description" style="width: 70px; height: 70px; display: block; margin: 0 auto;" />


      <div class="table-content">
        <ul>
          <li><span><i class="bi bi-check2"></i>AI Agents & Multi-Agent Systems</span></li>
          <li><span><i class="bi bi-check2"></i>ML & Predictive Analytics</span></li>
          <li><span><i class="bi bi-check2"></i>Computer Vision</span></li>
          <li><span><i class="bi bi-check2"></i>Traditional NLP Tasks</span></li>
        </ul>
      </div>
      <div class="table-footer">
        <a href="#Careers" class="button btn-theme-1">Learn More</a>
      </div>
    </div>
  </div>

  <!-- About Section 3 -->
  <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
    <div class="inner-box overflow-hidden position-relative">
    <h5 style="font-weight: bold; text-align: center;">Our Commitment</h5>
<img src="Images/img01.png" alt="Image description" style="width: 70px; height: 70px; display: block; margin: 0 auto;" />




      <div class="table-content">
        <ul>
          <li><span><i class="bi bi-check2"></i>Reliable and Scalable Solutions</span></li>
          <li><span><i class="bi bi-check2"></i>Comprehensive MLOps & LLMOps</span></li>
          <li><span><i class="bi bi-check2"></i>Continuous Support and Innovation</span></li>
        </ul>
      </div>
      <div class="table-footer">
        <a href="#Careers" class="button btn-theme-1">Learn More</a>
      </div>
    </div>
  </div>


`
;
Aboutus.appendChild(Container);
}
Aboutus();
