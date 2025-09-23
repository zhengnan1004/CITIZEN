<template>
  <section class="nid-page">
    <div class="base-page-banner">
      <div class="banner-inner">
        <div class="left-copy">
          <h2 class="title">APPLICATION STATUS</h2>
        </div>
        <div class="right-visual">
          <img src="/smile.png" alt="Application Status page banner" />
        </div>
        <router-link to="/contact" class="help-link">Need Help?</router-link>
      </div>
    </div>

    <div class="track-wrapper">
      <div class="track-card">
        <div class="track-inner">
          <h3 class="track-title">Track Application</h3>
          <p class="track-tip">Please enter the Application No when you applied.</p>

          <form class="track-form" @submit.prevent="handleNext">
            <label class="form-label" for="appNo">Application No <span class="required">*</span></label>
            <div class="input-row">
              <input
                id="appNo"
                v-model.trim="applicationNo"
                class="app-input"
                type="text"
                placeholder="Enter Application No"
                required
              />
            </div>

            <button class="next-btn" :class="{ disabled: !canProceed }" :disabled="!canProceed" type="submit">Next</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Application',
  data() {
    return {
      applicationNo: ''
    }
  },
  computed: {
    canProceed() {
      return this.applicationNo.trim().length > 0
    }
  },
  methods: {
    handleNext() {
      // 这里先简单打印，后续可接入真实查询接口
      console.log('Application No:', this.applicationNo)
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
  position: relative;
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

.help-link {
  position: absolute;
  right: 100px;
  bottom: -30px;
  color: #ea601b;
  text-decoration: none;
  font-weight: 600;
  z-index: 1;
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

/* 查询区块 */
.track-wrapper {
  padding: 40px 16px 80px 16px;
}

.track-card {
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background: #ffffff;
}

.track-inner {
  margin: 32px;
  background: #f7f6f5;
  border-radius: 6px;
  padding: 40px 24px 32px 24px;
}

.track-title {
  text-align: center;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.track-tip {
  text-align: center;
  color: #5d5d5d;
  margin-bottom: 28px;
}

.track-form {
  max-width: 760px;
  margin: 0 auto;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.required { color: #ea601b; }

.input-row {
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
}

.app-input {
  width: 60%;
  height: 54px;
  border: 1px solid #cfcfcf;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  display: block;
  margin: 0 auto;
}

.app-input:focus { border-color: #ff8c00; }

.next-btn {
  width: 220px;
  height: 52px;
  border: none;
  border-radius: 6px;
  background: #bfbfbf;
  color: #ffffff;
  font-weight: 700;
  cursor: not-allowed;
  display: block;
  margin: 0 auto;
}

.next-btn:not(.disabled) {
  background: #ff8c00;
  cursor: pointer;
}

.next-btn:not(.disabled):hover { background: #e67e00; }

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
  .track-inner { margin: 16px; padding: 24px 16px; }
  .track-title { font-size: 28px; }
}
</style>
