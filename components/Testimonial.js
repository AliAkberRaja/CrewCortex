function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
  <div
          class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
        >
          <div class="text-body position-absolute">
            <div class="quote-mark position-absolute">
              <img src="./Images/Quote mark.png" alt="" srcset="" />
            </div>
            <h2 class="title fw-bold">Why Us?</h1>
            <p>Our method is straightforward but efficient. We work directly with you to comprehend your particular demands, create solutions that are tailored to your needs, and execute them with ease. We guarantee that we improve and adapt our solutions to your changing business needs through our iterative process.</p>
          </div>
          <div class="col">
            <div class="testimonial-item bg-white rounded item-1">
              <div class="client-logo">
                <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
              </div>
              <span class="per-name fw-bold">Top Talent</span>
              
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                   To guarantee that you receive top-notch IT architecture, we collaborate with the most talented individuals in the industry. For every developer we hire, we screen at least 100 applicants. Our personnel stay with us for a long time once they are on boarded, so they are well-versed in the business and its procedures.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="testimonial-item bg-white rounded">
              <div class="client-logo">
                <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
              </div>
              <span class="per-name fw-bold">Proven Track Record</span>
                   
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                   Our software, UX/UI, and product development teams have completed more than 20 successful projects, continuously transforming concepts into powerful digital solutions. Our knowledge and experience guarantee that your project will not only be finished but will surpass expectations, generating tangible benefits for your company.
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-white rounded mt-4">
              <div class="client-logo">
                <img src="./Images/Base-feature-icon-6.svg" alt="" srcset="" />
              </div>
              <span class="per-name fw-bold">Business Mindset</span>
                   
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    We have a corporate background and were also startup founders, so we have seen many of the challenges on both sides. We will constantly consider your product from a business perspective since we understand that great products are about more than just technology.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();
