<template>
  <section class="nid-page">
    <div class="base-page-banner">
      <div class="banner-inner">
        <div class="left-copy">
          <h2 class="title">FAQ</h2>
        </div>
        <div class="right-visual">
          <img src="/wenhao.png" alt="FAQ page banner" />
        </div>
      </div>
    </div>

    <!-- 帮助搜索区域 -->
    <div class="faq-hero">
      <h3 class="hero-heading">Hello, How can we help you?</h3>
      <div class="search-wrap">
        <span class="search-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.65 16.65M18 10.5C18 14.09 15.09 17 11.5 17C7.91 17 5 14.09 5 10.5C5 6.91 7.91 4 11.5 4C15.09 4 18 6.91 18 10.5Z" stroke="#ea601b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <input class="search-input" type="text" placeholder="Search for answers" />
      </div>
    </div>

    <!-- 快速链接 -->
    <div class="quick-links">
      <h4 class="ql-title">Quick links</h4>
      <div class="ql-grid">
        <div class="ql-card" @click="goToQuestion1">
          <img class="ql-icon" src="/+.png" alt="How to register eNID" />
          <div class="ql-text">How to register eNID</div>
        </div>
        <div class="ql-card">
          <img class="ql-icon" src="/face.png" alt="Facial Recognition" />
          <div class="ql-text">Facial Recognition</div>
        </div>
        <div class="ql-card">
          <img class="ql-icon" src="/key.png" alt="Forgot Password" />
          <div class="ql-text">Forgot Password</div>
        </div>
        <div class="ql-card">
          <img class="ql-icon" src="/shouji2.png" alt="Modify Mobile Number" />
          <div class="ql-text">Modify Mobile Number</div>
        </div>
      </div>
    </div>

    <!-- All questions 列表区域 -->
    <div class="faq-list-wrap">
      <div class="faq-grid">
        <!-- 左侧筛选 -->
        <aside class="faq-filter">
          <h5 class="filter-title">Filter</h5>
          <ul class="filter-list">
            <li class="filter-item is-active">All</li>
            <li class="filter-item">eNID Application</li>
            <li class="filter-item">Facial Recognition</li>
            <li class="filter-item">eNID App</li>
            <li class="filter-item">Birth Certificate</li>
            <li class="filter-item">General</li>
            <li class="filter-item">Account</li>
          </ul>
        </aside>

        <!-- 右侧问题列表 -->
        <section class="questions-panel">
          <h4 class="questions-title">All questions</h4>

          <div class="qa-card">
            <div class="qa-row">
              <h5 class="qa-title">Why does the facial recognition system keep detecting multiple faces?</h5>
              <span class="qa-arrow">›</span>
            </div>
            <div class="qa-meta">
              <img class="qa-icon" src="/clock.svg" alt="time" />
              <span>08-06-2025 15:08</span>
              <img class="qa-icon" src="/dianzan.svg" alt="likes" />
              <span>3</span>
            </div>
          </div>

          <div class="qa-card">
            <div class="qa-row">
              <h5 class="qa-title">How to change my password?</h5>
              <span class="qa-arrow">›</span>
            </div>
            <div class="qa-meta">
              <img class="qa-icon" src="/clock.svg" alt="time" />
              <span>08-01-2025 13:58</span>
              <img class="qa-icon" src="/dianzan.svg" alt="likes" />
              <span>1</span>
            </div>
          </div>

          <div class="qa-card">
            <div class="qa-row">
              <h5 class="qa-title">Facial recognition prompt message keeps saying that the lighting is too bright (too low)?</h5>
              <span class="qa-arrow">›</span>
            </div>
            <div class="qa-meta">
              <img class="qa-icon" src="/clock.svg" alt="time" />
              <span>08-01-2025 16:01</span>
              <img class="qa-icon" src="/dianzan.svg" alt="likes" />
              <span>3</span>
            </div>
          </div>

          <div class="qa-card">
            <div class="qa-row">
              <h5 class="qa-title">I have trouble to access eNID website on my PC</h5>
              <span class="qa-arrow">›</span>
            </div>
            <div class="qa-meta">
              <img class="qa-icon" src="/clock.svg" alt="time" />
              <span>08-01-2025 16:01</span>
              <img class="qa-icon" src="/dianzan.svg" alt="likes" />
              <span>1</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq',
  methods: {
    goToQuestion1() {
      this.$router.push('/question1');
    }
  }
}
</script>

<style scoped>
.nid-page {
  background: #ffffff;
}

.base-page-banner {
  background: #f4f2f0;
}

.banner-inner {
  width: 100%;
  max-width: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: end;
  gap: 20px;
}

.left-copy {
  padding: 80px 20px 60px 20px;
}

.title {
  font-size: 56px;
  line-height: 1.05;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: 1px;
  display: inline;
  background-image: linear-gradient(#ea601b, #ea601b);
  background-repeat: no-repeat;
  background-size: 100% 0.28em;
  background-position: 0 78%;
}

.right-visual {
  justify-self: stretch;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-bottom-left-radius: 160px;
}

.right-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* 搜索区域样式 */
.faq-hero {
  padding: 48px 16px 72px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.hero-heading {
  font-size: 40px;
  font-weight: 200;
  color: #1a1a1a;
  text-align: center;
}

.search-wrap {
  width: 100%;
  max-width: 880px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: calc(50% - 40% + 18px);
  top: 50%;
  transform: translateY(-50%);
}

.search-input {
  width: 80%;
  height: 58px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  padding: 0 18px 0 48px;
  font-size: 18px;
  outline: none;
  display: block;
  margin: 0 auto;
}

.search-input::placeholder { color: #a8a8a8; }

/* Quick links */
.quick-links {
  padding: 10px 16px 40px 16px;
  max-width: 1100px;
  margin: 0 auto;
}

.ql-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}

.ql-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.ql-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #f7f6f5;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 30px 20px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow .2s ease, border-color .2s ease;
}

.ql-card:hover { background: #ffffff; border-color: #eee; box-shadow: 0 6px 18px rgba(234,96,27,.12); }

.ql-icon { width: 40px; height: 40px; }

.ql-text { font-size: 22px; font-weight: 700; text-align: center; }

/* 列表区域 */
.faq-list-wrap { padding: 10px 16px 80px 16px; }
.faq-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 320px 1fr; gap: 24px; }

.filter-title { font-size: 28px; font-weight: 700; margin: 0 0 12px 0; }
.filter-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 16px; }
.filter-item { background: #f4f2f0; border-radius: 16px; padding: 18px 20px; font-size: 18px; color: #1a1a1a; }
.filter-item.is-active { background: #f1efed; box-shadow: 0 2px 10px rgba(0,0,0,.06) inset; }

.questions-panel { }
.questions-title { font-size: 28px; font-weight: 700; margin: 0 0 16px 0; }

.qa-card { background: #fff; border: 1px solid #eee; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 2px 8px rgba(0,0,0,.06); transition: box-shadow .2s ease, border-color .2s ease, transform .1s ease; }
.qa-row { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 12px; }
.qa-title { font-size: 22px; font-weight: 600; color: #1a1a1a; margin: 0; }
.qa-arrow { color: #ff6b35; font-size: 22px; line-height: 1; }
.qa-meta { display: flex; align-items: center; gap: 10px; color: #666; }
.qa-icon { width: 18px; height: 18px; }

.qa-card:hover { border-color: #ffdac9; box-shadow: 0 8px 22px rgba(234,96,27,.18); transform: translateY(-2px); }
.qa-card:hover .qa-title { color: #ff6b35; }
.qa-card:hover .qa-icon { filter: invert(55%) sepia(64%) saturate(1648%) hue-rotate(342deg) brightness(101%) contrast(101%); }

@media (max-width: 1024px) {
  .ql-grid { grid-template-columns: repeat(2, 1fr); }
  .faq-grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .ql-grid { grid-template-columns: 1fr; }
}

@media (max-width: 1024px) {
  .banner-inner {
    grid-template-columns: 1fr;
    align-items: center;
  }
  .left-copy {
    padding: 60px 20px 10px 20px;
  }
  .right-visual {
    height: 280px;
    border-bottom-left-radius: 120px;
  }
  .title {
    font-size: 42px;
  }
}

@media (max-width: 640px) {
  .left-copy {
    padding: 40px 16px 8px 16px;
  }
  .title {
    font-size: 32px;
  }
  .right-visual {
    height: 220px;
    border-bottom-left-radius: 90px;
  }
}
</style>
