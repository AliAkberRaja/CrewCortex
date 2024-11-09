function FAQ() {
  const FAQ = document.getElementById("FAQ");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body">
        <h2 class='title fw-bold'>Our Services at a Glance</h2>
        <p>This is the complete step by step guide of how we deliver our projects.</p>
      </div>
  <div class="accordion mt-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Step 1: Scope Preparation
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              We start our trip into your product by concentrating on your vision. At this point, we thoroughly understand your concept and draft a thorough project brief. It enables us to compile all of the required research, including market data, competitor benchmarks, and any other information that may be required. This will keep our immersive session together from being impeded by a lack of information.
                <strong>
<br><br>
Phase deliverables:</strong> <br>
•	Comprehensive Brief <br>
•	List of Research Topics  

              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               Step 2: Immersive Session
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                
              
          We meet with you to develop a compelling value proposition and establish the key presumptions to be proven, bringing with us all the findings from our investigation. After that, we draft the initial version of the path your users would walk while using your product. These first user stories will be used to assess the features in the Product Rationale process that follows.
          <br>
          <strong>Phase Deliverables:</strong><br>
          •	Revised Value Propositions <br>
•	List of main assumptions to prove <br>
•	Initial user stories 


          
          </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
              Step 3: Product Rationale
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              At this stage, we will have all the data required to produce the final set of User Stories and features required to validate the key hypotheses in a Proof of Concept (POC) or Minimum Viable Product (MVP). Our product, UX/UI, and tech architecture specialists will concentrate on addressing all of the queries brought up during our joint journey.
               <br> <strong>Phase deliverables:</strong><br>
•	Complete User Stories<br>
•	Key BPMN (Business Process Model Notation)<br>
•	Tech Scope <br>
•	Tech Spike <br>
•	Business Model <br>
 
              </div>
            </div>
          </div>
      
        </div>
  `;
  FAQ.appendChild(Container);
}
FAQ();
