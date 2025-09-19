<template>
  <div class="main-page">
    <!-- 上半部分：提取为组件 -->
    <HeroSection />

    <!-- 下半部分：白色内容层 -->
    <div class="white-content-layer" ref="whiteLayer">
      <div class="content-wrapper">
        <!-- 三张覆盖式卡片 -->
        <div class="cards flex-row layered" ref="cardsRef">
          <div class="card-item flex-column">
            <div class="card-media">
              <img src="/previewMinio3.png" alt="Apply" />
            </div>
            <h3 class="card-heading">Apply for new NID cards<br/>and Birth certificates</h3>
          </div>

          <div class="card-item flex-column is-primary">
            <div class="card-media">
              <img src="/previewMinio2.png" alt="Update" />
            </div>
            <h3 class="card-heading">Update personal information<br/>such as name, address, or<br/>contact details</h3>
          </div>

          <div class="card-item flex-column">
            <div class="card-media">
              <img src="/previewMinio1.png" alt="Status" />
            </div>
            <h3 class="card-heading">Check the status of NID<br/>application</h3>
          </div>
        </div>
        <!-- 描述文本 -->
        <div class="description-section" ref="descRef">
          <p class="description-text">
            The <strong>Papua New Guinea Digital NID</strong> serves as a digital platform to facilitate easy access to National Identity (NID) services. It allows citizens to:
          </p>
        </div>
      </div>
    </div>

    <!-- 统计数据区域 -->
    <section class="statistics-section" ref="statsSection">
      <div class="statistics-container">
        <div class="stat-item">
          <div class="stat-number">4,200,000+</div>
          <div class="stat-label">User on Citizen NID portal</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2,700+</div>
          <div class="stat-label">Services integrated with<br/>Citizen NID portal</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">41,000,000+</div>
          <div class="stat-label">Transactions made per month</div>
        </div>
      </div>
    </section>
    
    <!-- 图片播放器区 -->
    <section class="promo-slider-section">
      <div class="promo-slider">
        <div class="promo-left">
          <div class="title-slider">
            <div class="title-track" :class="{ 'no-transition': isDragging }" :style="titleTrackStyle">
              <div class="title-item" v-for="(t, i) in titles" :key="'title-'+i">
                <h2 class="promo-title">{{ t }}</h2>
                <a href="#" class="promo-link">Find out more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="promo-right" ref="promoRight"
             @mousedown="startDrag"
             @mousemove="onDrag"
             @mouseup="endDrag"
             @mouseleave="endDrag"
             @touchstart.passive="startDrag"
             @touchmove.passive="onDrag"
             @touchend="endDrag">
          <div class="slides">
            <div class="slides-track" :class="{ 'no-transition': isDragging }" :style="trackStyle">
              <div class="slide-item" v-for="(img, i) in images" :key="'slide-'+i">
                <img src="/people.png" alt="slide" class="slide-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="promo-dots">
        <span v-for="(t, i) in titles" :key="'dot-' + i" :class="['dot', { active: i === currentIndex }]" @click="goTo(i)" @mouseenter="goTo(i)" @touchstart.prevent="goTo(i)"></span>
      </div>
    </section>

    <!-- 新的背景2横幅区（放在轮播区下方，并留空白） -->
    <div class="after-slider">
      <HeroBackground2 />
    </div>
  </div>
</template>

<script>
import HeroSection from './HeroSection.vue'
import HeroBackground2 from './HeroBackground2.vue'
export default {
  name: 'MainPage',
  components: { HeroSection, HeroBackground2 },
  data() {
    return {
      titles: ['FAQ', 'NID Branch', 'Contact us', 'Login without password', 'Forgot Password'],
      images: [0,1,2,3,4],
      currentIndex: 0,
      _sliderTimer: null,
      // 滑动相关
      isDragging: false,
      dragStartX: 0,
      dragDeltaX: 0,
      containerWidth: 0
    }
  },
  mounted() {
    this.observeWhiteLayer();
    this.observeStats();
    this.startSlider();
    this.setContainerWidth();
    window.addEventListener('resize', this.setContainerWidth);
  },
  beforeUnmount() {
    if (this._observer) {
      this._observer.disconnect();
    }
    if (this._statsObserver) {
      this._statsObserver.disconnect();
    }
    if (this._sliderTimer) {
      clearInterval(this._sliderTimer);
    }
    window.removeEventListener('resize', this.setContainerWidth);
  },
  methods: {
    observeWhiteLayer() {
      const whiteLayer = this.$refs.whiteLayer;
      const cardsRef = this.$refs.cardsRef;
      const descRef = this.$refs.descRef;
      if (!whiteLayer || !cardsRef) return;
      const onIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardsRef.classList.add('is-visible');
            if (descRef) descRef.classList.add('is-visible');
          } else {
            cardsRef.classList.remove('is-visible');
            if (descRef) descRef.classList.remove('is-visible');
          }
        });
      };
      this._observer = new IntersectionObserver(onIntersect, {
        root: null,
        threshold: 0.15
      });
      this._observer.observe(whiteLayer);
    },
    observeStats() {
      const stats = this.$refs.statsSection;
      if (!stats) return;
      const onStats = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.classList.add('is-visible');
            if (this._statsObserver) this._statsObserver.disconnect();
          } else {
            // 一旦出现后保持可见
          }
        });
      };
      this._statsObserver = new IntersectionObserver(onStats, { root: null, threshold: 0.2 });
      this._statsObserver.observe(stats);
    },
    startSlider() {
      if (this._sliderTimer) clearInterval(this._sliderTimer);
      this._sliderTimer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 2000);
    },
    goTo(i) {
      this.currentIndex = i;
      this.startSlider();
    },
    setContainerWidth() {
      const el = this.$refs.promoRight;
      if (!el) return;
      this.containerWidth = el.clientWidth || 0;
    },
    getEventX(evt) {
      if (evt.touches && evt.touches.length) return evt.touches[0].clientX;
      return evt.clientX;
    },
    startDrag(evt) {
      if (!this.containerWidth) this.setContainerWidth();
      this.isDragging = true;
      this.dragStartX = this.getEventX(evt);
      this.dragDeltaX = 0;
      if (this._sliderTimer) clearInterval(this._sliderTimer);
    },
    onDrag(evt) {
      if (!this.isDragging) return;
      const x = this.getEventX(evt);
      this.dragDeltaX = x - this.dragStartX;
    },
    endDrag() {
      if (!this.isDragging) return;
      const threshold = Math.max(40, this.containerWidth * 0.1);
      if (this.dragDeltaX > threshold) {
        // 向右滑，上一张
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      } else if (this.dragDeltaX < -threshold) {
        // 向左滑，下一张
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
      this.isDragging = false;
      this.dragDeltaX = 0;
      this.startSlider();
    }
  },
  computed: {
    trackStyle() {
      // 基础位移：当前索引的整屏宽度
      const base = -this.currentIndex * this.containerWidth;
      const drag = this.isDragging ? this.dragDeltaX : 0;
      const translate = base + drag;
      return {
        transform: `translateX(${translate}px)`
      };
    },
    titleTrackStyle() {
      // 使用百分比便于自适应：同时叠加拖拽位移按比例换算
      const basePercent = -this.currentIndex * 100;
      const dragPercent = this.isDragging && this.containerWidth
        ? (this.dragDeltaX / this.containerWidth) * 100
        : 0;
      const translate = basePercent + dragPercent;
      return {
        transform: `translateX(${translate}%)`
      };
    }
  }
}
</script>

<style scoped>
.main-page {
  min-height: 100vh;
  position: relative;
}

/* 与上半部分相关的样式已移至 HeroSection.vue */

/* 下半部分：白色内容层 */
.white-content-layer {
  background: white;
  padding: 100px 0;
  position: relative;
  z-index: 3;
  min-height: 60vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 覆盖式卡片（参考样式） */
.flex-row { display: flex; }
.flex-column { display: flex; flex-direction: column; }

.cards {
  justify-content: space-between;
  align-items: stretch;
  gap: 36px;
  position: relative;
  z-index: 4;
  margin-top: -200px; /* 增加上移距离，让卡片覆盖到橙色部分 */
  margin-bottom: 64px;
}

/* 水平布局：卡片水平排列，第一张和第三张卡片有轻微覆盖效果 */
.cards.layered {
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: flex-end;
}
.cards.layered .card-item + .card-item { margin-left: -10px; }
.cards.layered .card-item:nth-child(1) { 
  z-index: 1; 
  transform: translateY(10px); 
  max-width: 320px;
  min-width: 300px;
  height: 250px;
  padding: 25px 28px;
}
.cards.layered .card-item:nth-child(2) { 
  z-index: 3; 
  transform: translateY(0px) scale(0.9); 
  max-width: 350px;
  min-width: 320px;
  height: 320px;
  padding: 20px 30px;
}

.cards.layered .card-item:nth-child(2) .card-media {
  height: 120px;
  margin-bottom: 16px;
}

.cards.layered .card-item:nth-child(1) .card-media,
.cards.layered .card-item:nth-child(3) .card-media {
  height: 140px;
  margin-bottom: 20px;
}
.cards.layered .card-item:nth-child(3) { 
  z-index: 1; 
  transform: translateY(10px); 
  max-width: 320px;
  min-width: 300px;
  height: 250px;
  padding: 25px 28px;
}

/* 出现后再叠加位移覆盖（可与出现动画叠加）*/
.cards.is-visible.layered .card-item:nth-child(1),
.cards.is-visible.layered .card-item:nth-child(2),
.cards.is-visible.layered .card-item:nth-child(3) {
  opacity: 1;
}

.card-item {
  flex: 1 1 0;
  min-width: 280px;
  max-width: 320px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.12);
  padding: 40px 32px;
  align-items: center;
  text-align: center;
  transition: transform .3s ease, box-shadow .3s ease;
  /* 初始隐藏 */
  opacity: 0;
  transform: translateY(36px);
}

.card-item.is-primary {
  transform: translateY(-20px);
}

.card-item:hover {
  transform: translateY(-28px) scale(1.02);
  box-shadow: 0 32px 96px rgba(0,0,0,0.18);
}

.card-media {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.card-media img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-heading {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  color: #222;
  margin: 0;
}

/* 出场动画：白色背景进入视口后为容器加 is-visible */
.cards.is-visible .card-item {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1.2s ease, transform 1.2s ease, box-shadow .3s ease;
}
.cards.is-visible .card-item:nth-child(1) { transition-delay: .0s; }
.cards.is-visible .card-item:nth-child(2) { transition-delay: .2s; }
.cards.is-visible .card-item:nth-child(3) { transition-delay: .4s; }

/* 描述文本区域 */
.description-section {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.description-text {
  font-size: 20px;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

.description-text strong {
  color: #ff8c00;
  font-weight: 700;
}

.description-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 统计数据区域 */
.statistics-section {
  position: relative;
  background: #111 url('/statisticsBg-D_n8gkQd.png') center center / cover no-repeat;
  color: #fff;
  padding: 80px 0;
}

.statistics-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.stat-item {
  text-align: left;
}

.stat-number {
  font-size: 64px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 12px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.stat-label {
  font-size: 24px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.statistics-section.is-visible .stat-item:nth-child(1) .stat-number,
.statistics-section.is-visible .stat-item:nth-child(1) .stat-label { opacity: 1; transform: none; transition-delay: 0s; }
.statistics-section.is-visible .stat-item:nth-child(2) .stat-number,
.statistics-section.is-visible .stat-item:nth-child(2) .stat-label { opacity: 1; transform: none; transition-delay: .15s; }
.statistics-section.is-visible .stat-item:nth-child(3) .stat-number,
.statistics-section.is-visible .stat-item:nth-child(3) .stat-label { opacity: 1; transform: none; transition-delay: .3s; }

/* 图片播放器样式 */
.promo-slider-section {
  background: #f5f4f3;
  padding: 40px 0 80px;
}
.promo-slider {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 0.8fr 1.4fr;
  gap: 24px;
  align-items: center;
}
.promo-left { padding: 40px 20px; position: relative; z-index: 1; }
.title-slider { position: relative; width: 100%; overflow: hidden; max-width: 560px; }
.title-track { display: flex; width: 100%; transition: transform .35s ease; }
.title-track.no-transition { transition: none; }
.title-item { flex: 0 0 100%; padding-right: 24px; }
.promo-title { font-size: 51px; font-weight: 900; margin: 0 0 20px; max-width: 600px; white-space: normal; }
.promo-link { color: #ff6a00; font-weight: 700; text-decoration: none; font-size: 22px; }
.promo-right { position: relative; width: 100%; height: 336px; overflow: hidden; border-bottom-left-radius: 220px; z-index: 2; }
.slides { position: relative; width: 100%; height: 100%; overflow: hidden; }
.slides-track { position: absolute; top: 0; left: 0; height: 100%; width: 100%; display: flex; transition: transform .35s ease; }
.slides-track.no-transition { transition: none; }
.slide-item { flex: 0 0 100%; height: 100%; position: relative; }
.slide-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.fade-enter-active, .fade-leave-active { transition: opacity .6s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.promo-dots { display: flex; gap: 12px; justify-content: center; margin-top: 16px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: #d0d0d0; cursor: pointer; }
.dot.active { background: #ff6a00; }

/* 轮播区下方预留空白 */
.after-slider {
  margin: 60px 0 100px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .white-content-layer {
    padding: 60px 0;
  }
  .cards {
    flex-direction: column;
    gap: 20px;
    margin-top: -80px;
  }
  .cards.layered .card-item + .card-item { margin-left: 0; }
  .cards.layered .card-item:nth-child(1),
  .cards.layered .card-item:nth-child(2),
  .cards.layered .card-item:nth-child(3) {
    transform:none ;
  }
  .card-item {
    max-width: 100%;
  }
  
  .description-text {
    font-size: 18px;
  }

  .statistics-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .stat-number { font-size: 48px; }
  .stat-label { font-size: 18px; }
  /* 移动端标题滑块占满宽度 */
  .title-slider { max-width: 100%; }
}

@media (max-width: 480px) {
  .white-content-layer {
    padding: 40px 0;
  }
  
  .content-wrapper {
    padding: 0 15px;
  }
  
  .description-text {
    font-size: 16px;
  }
}
</style>
