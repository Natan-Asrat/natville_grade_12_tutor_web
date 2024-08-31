<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Hero Section (Left Column) -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h1 class="display-4">Natville Tutor</h1>
        <p class="lead">This is my gift to you all who mainly are joining campus as Freshman. I have covered Logic and Critical Thinking, Psychology, and Applied Mathematics One in my tutorials. Access the videos by downloading my app on play store below! Thank you!</p>
        <a href="https://play.google.com/store/apps/details?id=com.emicasolutions.natvillegrade12tutor" target="_blank">
          <img src="/play.png" alt="Download on Play Store" class="img-fluid mt-3" style="max-width: 50%;"/>
        </a>
      </div>

      <!-- Screenshots Section (Right Column) -->
      <div class="col-md-6">
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
