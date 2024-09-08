<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Hero Section (Left Column) -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h1 class="display-4">Natville Grade 12 Tutor</h1>
        <p class="lead">I’m here to help grade 12 students with my Physics course, and more subjects are coming soon!<br> If you’re preparing for campus or need support, stay tuned for additional courses in other grade 12 subjects. Access my current tutorials by downloading the app below. Thank you!</p>
        <a class="d-none" href="https://play.google.com/store/apps/details?id=com.emicasolutions.natvillefreshmantutor_inamharic" target="_blank">
          <img src="/play.png" alt="Download on Play Store" class="img-fluid mt-3" style="max-width: 50%;"/>
        </a>
        <a href="/natville_grade_12_tutor.apk" target="_blank" download onclick="showFallback('viewer')">
          <img src="/download_apk.png" alt="Download APK" class="img-fluid mt-3" style="max-width: 50%;" />
        </a>
        <p id="fallback-viewer" class="fallback-message" style="display: none;">
          If the download doesn't start, <a href="/natville_grade_12_tutor.apk" target="_blank">click here</a> to download Natville Grade 12 Tutor.
        </p>
      </div>

      <!-- Screenshots Section (Right Column) -->
      <div class="col-md-6">
      <div class="row">
          <div class="col-12 mb-4 justify-content-between screenshots">
            <img src="/physics_list_mockup.png" alt="Screenshot 1" class="img-fluid screenshot screenshot-t"/>
            <img src="/electronics_mockup.png" alt="Screenshot 2" class="img-fluid screenshot screenshot-b" />
            <img src="/electromagnetism_mockup.png" alt="Screenshot 3" class="img-fluid screenshot screenshot-t"/>
          </div>
        </div>
        <div class="row">
        <div class="col-12 mb-4 justify-content-between screenshots">
            <img src="/applications_mockup.png" alt="Screenshot 3" class="img-fluid screenshot-w screenshot-t"/>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add custom styles here */
.hero-section {
  text-align: left;
}

.screenshot {
  max-width: 100%;
  height: auto;

}

.screenshot-t {
    margin-top: 50px;
}
.screenshot-b {
    margin-top: -50px;
}
.phone-mockup {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 400px; /* Adjust based on the phone mockup size */
}

.phone-image {
  width: 100%;
  height: auto;
}

.screenshots {
  position: relative;
}

.screenshot {
  height: auto;
  width: 20%;
  margin-left: 20px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
}

@media (max-width: 767px) {
  .screenshot {
  height: auto;
  width: 200px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
  }
  .screenshot-t {
    margin-top: 20px;
}
.screenshot-b {
    margin-top: 20px;
}
}
</style>
