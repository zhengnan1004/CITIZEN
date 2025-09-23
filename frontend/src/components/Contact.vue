<template>
  <section class="nid-page">
    <div class="base-page-banner">
      <div class="banner-inner">
        <div class="left-copy">
          <h2 class="title">CONTACT US</h2>
        </div>
        <div class="right-visual">
          <img src="/callme.png" alt="Contact Us page banner" />
        </div>
      </div>
    </div>

    <!-- 三列联系卡片 -->
    <div class="contact-wrapper">
      <div class="contact-grid">
        <!-- Phone -->
        <div class="contact-card clickable" @click="copyToClipboard('+675 3133000')">
          <div class="icon-badge">
            <img src="/shouji.svg" alt="Phone icon" />
          </div>
          <h3 class="card-title">Phone Support</h3>
          <div class="card-subtitle">
            <img class="mini-icon" src="/shouji.svg" alt="phone" />
            <span>+675 3133000</span>
          </div>
          <p class="card-desc">
            Get instant assistance by calling our support line. Our representatives are available to help
            you in real time during business hours, Monday through Friday.
          </p>
        </div>

        <!-- Email -->
        <a class="contact-card link-card" href="mailto:helpdesk@pngcir.gov.pg">
          <div class="icon-badge">
            <img src="/email.svg" alt="Email icon" />
          </div>
          <h3 class="card-title">Email Support</h3>
          <div class="card-subtitle">
            <img class="mini-icon" src="/email.svg" alt="email" />
            <span>helpdesk@pngcir.gov.pg</span>
          </div>
          <p class="card-desc">
            Send us your questions anytime via email. We typically respond within 1-2 business days with
            detailed support.
          </p>
        </a>

        <!-- Inquiry Form -->
        <div class="contact-card clickable" @click="$router.push('/inquiry')">
          <div class="icon-badge">
            <img src="/write.svg" alt="Write icon" />
          </div>
          <h3 class="card-title">Inquiry Form</h3>
          <div class="card-subtitle">Inquiry Form</div>
          <p class="card-desc">
            Submit your request using our online form. Our team will review your inquiry and get back to
            you within 1-2 business days via email.
          </p>
        </div>
      </div>
    </div>

    <!-- 复制成功提示 -->
    <div v-if="showToast" class="copy-toast" role="status" aria-live="polite">
      <span class="toast-icon">✔</span>
      <span>{{ toastText }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      showToast: false,
      toastText: 'Copied to clipboard'
    }
  },
  methods: {
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text)
        this.triggerToast()
      } catch (e) {
        // 兼容性降级
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        try { document.execCommand('copy') } catch (err) {}
        document.body.removeChild(textarea)
        this.triggerToast()
      }
    },
    triggerToast() {
      this.showToast = true
      window.clearTimeout(this._toastTimer)
      this._toastTimer = window.setTimeout(() => {
        this.showToast = false
      }, 2000)
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

/* 联系方式卡片 */
.contact-wrapper {
  padding: 80px 16px 80px 16px;
}

.contact-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.contact-card {
  position: relative;
  background: #f7f6f5;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 24px 24px 24px 24px;
  transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.contact-card:hover {
  background: #fbe4d7;
  border-color: #ea601b;
  box-shadow: 0 6px 18px rgba(234, 96, 27, 0.18);
}

.clickable { cursor: pointer; }

/* Toast */
.copy-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #e8f7e9;
  color: #2e8b57;
  border: 1px solid #bfe3c4;
  border-radius: 8px;
  padding: 10px 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  z-index: 2000;
}

.toast-icon { font-size: 14px; }

.icon-badge {
  position: absolute;
  left: 28px;
  top: -28px;
  width: 120px;
  height: 80px;
  border-radius: 14px;
  background: #ea601b;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(234, 96, 27, 0.25);
}

.icon-badge img { width: 48px; height: 48px; }

.card-title {
  color: #ea601b;
  font-size: 28px;
  font-weight: 700;
  margin: 40px 0 8px 0;
}

.card-subtitle {
  color: #ea601b;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-dot { margin-right: 8px; }

.mini-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%) invert(46%) sepia(81%) saturate(1736%) hue-rotate(3deg) brightness(96%) contrast(97%);
}

.card-desc {
  color: #e35c19;
  line-height: 1.7;
  font-size: 14px;
}

.link-card { display: block; text-decoration: none; color: inherit; }

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
  .contact-grid { grid-template-columns: 1fr; }
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
