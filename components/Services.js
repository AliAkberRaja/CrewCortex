function Services() {
  const Services = document.getElementById("Services");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  

  <div
  class="text-body text-center d-flex flex-column align-items-center" style="margin-bottom: 10px; margin-top: 50px;"
>
  <h2 class="title fw-bold">Discover, Develop, and Deploy</h2>
  
  <p class="">
    We design & build innovative products focused on user’s needs. Together, we can transform your vision into a thriving business, be it through a Minimum Viable Product, UX/UI services, or scaling support for your company.
  </p>
  
  <div style="margin-top: 20px; margin-bottom: 30px;">
  <h3 class="fw-bold">How we work?</h3>
</div>
  
 
</div>
<div class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-3 mb-5">
  <!-- First Column -->
  <div class="col d-flex flex-column justify-content-center pt-1 bg-primary-300 rounded mb-3" style="height: 300px;">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" style="width: 50px; height: 50px; margin-bottom:10px" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center" style="margin-bottom: 10px;">Flexibility</div>
      <div class="description text-center">
       <h7> We believe there are no excuses to build anything
       less than great technology products. The core of our 
        operations lies in helping you craft and launch
        tailored, innovative solutions esigned to  
         delight your users.
         
      </h7></div>
    </div>
  </div>

  <!-- Second Column -->
  <div class="col d-flex flex-column justify-content-center pt-1 bg-white-300 rounded mb-3" style="height: 300px;">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-7.svg" alt="" style="width: 50px; height: 50px; margin-bottom:10px;" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center" style="margin-bottom: 10px;">Strategic Expertise</div>
      <div class="description text-center">
        <h7>We mix a lean strategy with tried-and-tested 
        frameworks and our significant experience in  building 
        products that successfully enter the market.
          This blend of agility, knowledge, sets the stage for our relationship.
     </h7> </div>
    </div>
  </div>

  <!-- Third Column -->
  <div class="col d-flex flex-column justify-content-center pt-1 bg-primary-300 rounded mb-3" style="height: 300px; ">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" style="width: 50px; height: 50px ;margin-bottom:10px;" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center" style="margin-bottom: 10px;">Collaborative Success</div>
      <div class="description text-center">
        <h7>Working hand in hand with our dedicated, highly effective team of in-house specialists, we can turn your vision into a successful business.
      Our core values ensure that we accomplish this on schedule and within budget. </h7></div>
    </div>
  </div>
</div>

<div class="mb-6"></div>

  
</div>`
;
  Services.appendChild(Container);
}
Services();
