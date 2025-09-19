<template>
  <div class="hero-section" ref="heroSection">
    <div class="background-image">
      <img src="/background.png" alt="Background" class="bg-img" />
    </div>

    <div class="content-container">
      <div class="text-section">
        <h1 class="main-title">
          <span class="title-line">Make</span>
          <span class="title-line">Your Life</span>
          <span class="title-line">Simpler</span>
        </h1>
        <p class="subtitle">eNID is your trusted digital identity in your daily life</p>
        <div class="download-buttons">
          <a href="#" class="download-btn btn-apple">
            <img src="/appleMinio.svg" alt="Download on the App Store" class="apple-store-img" />
          </a>
          <a href="#" class="download-btn btn-google">
            <img src="/previewMinio.svg" alt="Get it on Google Play" class="google-play-img" />
          </a>
        </div>
      </div>

      <div class="character-section">
        <img ref="characterImg" src="/topBanner-CCKqIOay.png" alt="Character" class="character-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  mounted() {
    this.updateSectionHeight();
    window.addEventListener('resize', this.updateSectionHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSectionHeight);
  },
  methods: {
    updateSectionHeight() {
      const isSmall = window.matchMedia('(max-width: 1024px)').matches;
      const section = this.$refs.heroSection;
      const img = this.$refs.characterImg;
      if (!section) return;
      if (isSmall) {
        section.style.height = 'auto';
        return;
      }
      if (!img) return;
      const setHeight = () => {
        const height = img.clientHeight || img.naturalHeight || 0;
        if (height > 0) {
          section.style.height = height + 'px';
        }
      };
      if (img.complete && img.naturalHeight) {
        setHeight();
      } else {
        img.addEventListener('load', setHeight, { once: true });
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  margin: 0 auto;
}

.content-container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 60px 40px 0;
  gap: 60px;
  transform: translate(80px, -60px);
}

.text-section {
  text-align: left;
  color: #000;
  max-width: 600px;
  flex: 1;
  padding: 40px 0 0;
  margin-left: 20px;
}

.main-title {
  font-size: 4.5rem;
  font-weight: 650;
  line-height: 1.0;
  margin-bottom: 15px;
  color: #000;
  letter-spacing: 0.01em;
}

.title-line {
  display: block;
}

.subtitle {
  font-size: 1.4rem;
  margin-bottom: 70px;
  color: #000;
  line-height: 1.5;
  font-weight: 380;
  max-width: 500px;
}

.download-buttons {
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: flex-start;
  align-items: center;
  margin-top: -30px;
}

.download-btn {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: white;
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 200px;
}

.btn-apple {
  padding: 0;
  background: transparent;
  box-shadow: none;
  max-width: none;
  border: none;
  border-radius: 0;
}

.btn-apple:hover {
  background: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-google {
  padding: 0;
  background: transparent;
  box-shadow: none;
  max-width: none;
  border: none;
  border-radius: 0;
}

.btn-google:hover {
  background: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.google-play-img {
  height: 55px;
  width: auto;
  display: block;
}

.apple-store-img {
  height: 55px;
  width: auto;
  display: block;
}

.character-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 40px;
  transform: translateX(-50px);
}

.character-img {
  max-width: 100%;
  width: 750px;
  height: auto;
  object-fit: contain;
  object-position: center;
}

@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
    gap: 40px;
    transform: none;
  }
  .text-section {
    padding: 20px;
    max-width: 100%;
    margin-left: 0;
  }
  .character-section {
    padding: 20px;
    margin-right: 0;
    margin-top: 20px;
    transform: none;
  }
  .character-img {
    width: 750px;
    height: auto;
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .download-buttons {
    flex-direction: column;
    align-items: center;
  }
  .download-btn {
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2.5rem;
  }
  .text-section {
    padding: 30px 15px;
  }
  .character-img {
    width: 600px;
    height: auto;
  }
}
</style>

