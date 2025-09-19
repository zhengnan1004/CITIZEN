<template>
  <section class="hero2" role="region" aria-label="Secondary highlight">
    <div class="hero2__inner">
      <div class="hero2__content">
        <div class="hero2__headline" role="heading" aria-level="1">
          <span class="hero2__line hero2__line--dark">Easily Access Your</span>
          <span class="hero2__line hero2__line--light">Trusted Digital</span>
          <span class="hero2__line hero2__line--light">Identity</span>
        </div>
      </div>
      
      
      <!-- 左上角：握手图片 -->
      <div class="hero2__image hero2__image--top-left">
        <img src="/community.png" alt="Safe And Reliable" class="hero2__img">
        <div class="hero2__text-box">
          <h3>Safe And Reliable</h3>
          <p>Obtaining your personal data from government sources.</p>
        </div>
      </div>
      
      <!-- 右上角：女人图片 -->
      <div class="hero2__image hero2__image--top-right">
        <img src="/girl.png" alt="Birth Certificate" class="hero2__img">
        <div class="hero2__text-box">
          <h3>Birth Certificate</h3>
          <p>Birth certificate can be viewed and downloaded.</p>
        </div>
      </div>
      
      <!-- 右下角：看手机图片 -->
      <div class="hero2__image hero2__image--bottom-right">
        <img src="/babymom.png" alt="Government Notifications" class="hero2__img hero2__img--highlight">
        <div class="hero2__text-box hero2__text-box--highlight">
          <h3>Government Notifications</h3>
          <p>Receive real-time notifications from the government.</p>
        </div>
      </div>

      <!-- 中间靠右：手机预览图 -->
      <div class="hero2__image hero2__image--center-phone" aria-hidden="true">
        <img src="../../public/iphone.png" alt="Phone preview" class="hero2__img hero2__img--phone">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBackground2',
  data() {
    return {
      scrollY: 0,
      lastScrollY: 0,
      isScrollingUp: false,
      elementTop: 0,
      elementHeight: 0,
      //组件进入视口前就开始动画
      startLead: 200,
      // 最远位置
      farthestPositions: {
        topLeft: { dx: -150, dy: 200 },
        topRight: { dx: 500, dy: 50 },
        bottomRight: { dx: 250, dy: 300 }
      },
      //最近位置
      closestPositions: {
        topLeft: { dx: -50, dy: 70 },
        topRight: { dx: 150, dy: 20 },
        bottomRight: { dx: 80, dy: 100 }
      }
    }
  },
  mounted() {
    this.handleScroll = this.throttle(this.updateCardPositions, 16) // 60fps
    window.addEventListener('scroll', this.handleScroll)
    this.initElementPosition()
    this.updateCardPositions()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    initElementPosition() {
      const element = this.$el
      if (element) {
        const rect = element.getBoundingClientRect()
        this.elementTop = rect.top + window.scrollY
        this.elementHeight = rect.height
      }
    },
    
    updateCardPositions() {
      this.scrollY = window.scrollY
      
      // 判断滚动方向
      this.isScrollingUp = this.scrollY < this.lastScrollY
      this.lastScrollY = this.scrollY
      
      // 检查是否在这个元素区域内
      const elementBottom = this.elementTop + this.elementHeight
      // 提前 startLead 像素开始动画
      const isInElementArea = this.scrollY >= (this.elementTop - this.startLead) && this.scrollY <= elementBottom
      
      if (!isInElementArea) {
        this.resetCardPositions()
        return
      }
      
      // 在元素区域内，根据滚动进度调整位置
      this.moveCardsBasedOnScroll()

      this.adjustPhonePreviewSize()
    },

    adjustPhonePreviewSize() {
      const phonePreview = document.querySelector('.hero2__image--center-phone') 
      if (phonePreview) {
        const scrollFromTop = this.scrollY - (this.elementTop - this.startLead);
        const maxScrollInElement = this.elementHeight * 0.3;
        const rawProgress = Math.min(scrollFromTop / maxScrollInElement, 1);

        // 向下滚动放大：进度越大，scale 越大（1 → 1.3）
        const scaleProgress = this.easeOutQuart(rawProgress);
        const scale = 1 + scaleProgress * 0.3;
        phonePreview.style.transform = `translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(${scale})`;
      }
    },
    
    moveCardsBasedOnScroll() {
      // 以提前触发点作为起点
      const scrollFromTop = this.scrollY - (this.elementTop - this.startLead)
      const maxScrollInElement = this.elementHeight * 0.3 // 移动更快
      const rawProgress = Math.min(scrollFromTop / maxScrollInElement, 1)
      
      // 加速函数
      const scrollProgress = this.easeOutQuart(rawProgress)

    if (scrollProgress >= 1) {
      this.updateCardPosition('top-left', this.closestPositions.topLeft, this.farthestPositions.topLeft, 1)
      this.updateCardPosition('top-right', this.closestPositions.topRight, this.farthestPositions.topRight, 1)
      this.updateCardPosition('bottom-right', this.closestPositions.bottomRight, this.farthestPositions.bottomRight, 1)
      return
  } 

      
      // 最远位置
      this.updateCardPosition('top-left', this.closestPositions.topLeft, this.farthestPositions.topLeft, scrollProgress)
      this.updateCardPosition('top-right', this.closestPositions.topRight, this.farthestPositions.topRight, scrollProgress)
      this.updateCardPosition('bottom-right', this.closestPositions.bottomRight, this.farthestPositions.bottomRight, scrollProgress)
    },
    
    resetCardPositions() {
      // 最近位置
      this.updateCardPosition('top-left', this.closestPositions.topLeft, this.farthestPositions.topLeft, 0)
      this.updateCardPosition('top-right', this.closestPositions.topRight, this.farthestPositions.topRight, 0)
      this.updateCardPosition('bottom-right', this.closestPositions.bottomRight, this.farthestPositions.bottomRight, 0)
    },
    
    updateCardPosition(cardClass, closestPos, farthestPos, progress) {
      const element = document.querySelector(`.hero2__image--${cardClass}`)
      if (element) {
        const newDx = closestPos.dx + (farthestPos.dx - closestPos.dx) * progress
        const newDy = closestPos.dy + (farthestPos.dy - closestPos.dy) * progress
        
        element.style.setProperty('--dx', `${newDx}px`)
        element.style.setProperty('--dy', `${newDy}px`)
      }
    },
    
    //移动更快
    easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4)
    },
    
    // 加速函数
    easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    },
    
    throttle(func, limit) {
      let inThrottle
      return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
          func.apply(context, args)
          inThrottle = true
          setTimeout(() => inThrottle = false, limit)
        }
      }
    }
  }
}
</script>

<style scoped>
.hero2 {
  position: relative;
  min-height: 520px;
  background: #000; 
}

.hero2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('/background2.png') center/cover no-repeat;
}

.hero2::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.6) 100%);
}

.hero2__inner { 
  position: relative;
  z-index: 1;
  width: 100%; 
}

.hero2__content {
  padding: 40px 24px; 
}

.hero2__headline {
  font-size: 48px;
  line-height: 1.05;
  font-weight: 700;
}

.hero2__line { display: block; margin: 0; }
.hero2__line--dark { color: #111; }
.hero2__line--light { color: #fff; }



.hero2__image {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 300px;
  height: 200px;
  
  top: 50%;
  left: 50%;
  --dx: 0px;
  --dy: 0px;
  transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy)));
  transition: transform 0.1s ease-out;
}

.hero2__img {
  width: 80%;
  height: 80%;
  border-radius: 16px 16px 0 0;
  margin-bottom: 0;
  transition: none;
}


/* 高亮图片特殊样式 */
.hero2__img--highlight {
  box-shadow: 0 6px 25px rgba(255, 140, 0, 0.2);
}


/* iPhone  */
.hero2__img--phone {
  border-radius: 28px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.35);
}

.hero2__text-box {
  width: 80%;
  height: auto;
  box-sizing: border-box;
  text-align: center;
  background: #ffffff;
  padding: 20px 24px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: none;
  max-width: none;
  margin-top: -1px;
}

.hero2__text-box h3 {
  color: #ff8c00;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.hero2__text-box p {
  color: #333;
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

/* 特殊高亮卡片样式 */
.hero2__text-box--highlight {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid rgba(255, 140, 0, 0.2);
}

.hero2__text-box--highlight h3 {
  font-weight: 800;
}

.hero2__image--center-phone {
  --dx: 150px;
  --dy: -10px;
  width: 200px;
  height: 450px;
  transition: transform 0.1s ease-out; /* 加上过渡 */
  transform-origin: center center; /* 确保缩放时围绕中心 */
}


/* 桌面*/
.hero2__image--top-left { --dx: -150px; --dy: 200px; }
.hero2__image--top-right { --dx: 500px; --dy: 50px; }
.hero2__image--bottom-right { --dx: 250px; --dy: 300px; }
.hero2__image--center-phone { --dx: 150px; --dy: -10px; width: 200px; height: 450px; }

@media (max-width: 768px) {
  .hero2 { 
    min-height: 420px; 
  }
  .hero2__content { 
    padding: 24px 16px; 
  }
  
  
  .hero2__image {
    max-width: 200px;
  }
  
  .hero2__img {
    width: 100%;
    height: 100%;
  }
  
  .hero2__text-box {
    padding: 16px 20px;
    max-width: 200px;
  }
  
  .hero2__text-box h3 {
    font-size: 16px;
  }
  
  .hero2__text-box p {
    font-size: 12px;
  }
  
  /* 移动端 */
  .hero2__image--top-left { --dx: -200px; --dy: -10px; }
  .hero2__image--top-right { --dx: 170px; --dy: -120px; }
  .hero2__image--bottom-right { --dx: 130px; --dy: 120px; }
  .hero2__image--center-phone { --dx: 10px; --dy: -10px; width: 200px; height: 380px; }
}
</style>




