<template>
  <section class="forget-page">
    <!-- 顶部返回与 Need Help 同行 -->
    <div class="top-bar">
      <router-link to="/login" class="back-link">
        <span class="back-icon">‹</span>
        Back
      </router-link>
      <router-link to="/contact" class="help-link">Need Help?</router-link>
    </div>

    <!-- 内容卡片 -->
    <div class="content-wrap">
      <img class="page-logo" src="/biaozhi.svg" alt="logo" />
      <h1 class="page-title">Retrieve Password</h1>
      <p class="page-sub">Please enter the account you want to retrieve</p>

      <form class="form" @submit.prevent="handleNext">
        <!-- NID -->
        <label class="form-label" for="nid">NID <span class="req">*</span></label>
        <input
          id="nid"
          v-model.trim="nid"
          type="text"
          class="text-input"
          placeholder="Enter NID"
          autocomplete="off"
          required
        />

        <!-- Mobile No with Send Code -->
        <label class="form-label" for="mobile">Mobile No <span class="req">*</span></label>
        <div class="with-action">
          <input
            id="mobile"
            v-model.trim="mobile"
            type="tel"
            class="text-input no-radius"
            placeholder="Enter Mobile No"
            autocomplete="tel"
            required
          />
          <button class="action-btn" type="button" :disabled="!canSendCode" @click="sendCode">Send Code</button>
        </div>

        <!-- OTP -->
        <label class="form-label" for="otp-0">Enter OTP <span class="req">*</span></label>
        <div class="otp-row" @paste.prevent="onPasteOtp">
          <input v-for="(v, idx) in 6" :key="idx" :id="`otp-${idx}`" class="otp-input" maxlength="1"
                 inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code"
                 v-model="otp[idx]" @input="onOtpInput(idx)" @keydown.backspace="onOtpBackspace(idx, $event)" />
        </div>

        <button class="next-btn" :class="{ disabled: !canProceed }" :disabled="!canProceed" type="submit">Next</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Forget',
  data() {
    return {
      nid: '',
      mobile: '',
      otp: ['', '', '', '', '', ''],
      codeSent: false,
    }
  },
  computed: {
    canSendCode() {
      return this.mobile.trim().length >= 6
    },
    canProceed() {
      return this.nid.trim() && this.mobile.trim() && this.otp.join('').length === 6
    }
  },
  methods: {
    sendCode() {
      this.codeSent = true
    },
    onOtpInput(idx) {
      const val = this.otp[idx]
      if (/[^0-9]/.test(val)) {
        this.$set(this.otp, idx, val.replace(/\D/g, ''))
      }
      if (this.otp[idx] && idx < 5) {
        const next = document.getElementById(`otp-${idx + 1}`)
        next && next.focus()
      }
    },
    onOtpBackspace(idx, e) {
      if (!this.otp[idx] && idx > 0) {
        const prev = document.getElementById(`otp-${idx - 1}`)
        prev && prev.focus()
      }
    },
    onPasteOtp(e) {
      const text = (e.clipboardData || window.clipboardData).getData('text') || ''
      const digits = text.replace(/\D/g, '').slice(0, 6).split('')
      digits.forEach((d, i) => { this.$set(this.otp, i, d) })
      const target = document.getElementById(`otp-${Math.min(digits.length, 5)}`)
      target && target.focus()
    },
    handleNext() {
      if (!this.canProceed) return
      // 提交逻辑占位
      console.log('Submit', { nid: this.nid, mobile: this.mobile, otp: this.otp.join('') })
    }
  }
}
</script>

<style scoped>
.forget-page { background: #ffffff; min-height: 100vh; }

.top-bar {
  max-width: 1100px;
  margin: 16px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-link { color: #ff6b35; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; }
.back-icon { font-size: 18px; font-weight: 700; }
.help-link { color: #ff6b35; text-decoration: none; font-weight: 600; }

.content-wrap {
  max-width: 350px;
  margin: 20px auto 80px auto;
  text-align: center;
}

.page-logo { width: 120px; height: 120px; object-fit: contain; margin: 8px auto 6px auto; display: block; }
.page-title { font-size: 36px; font-weight: 700; color: #1a1a1a; margin: 12px 0 8px; }
.page-sub { color: #666; margin-bottom: 20px; }

.form { text-align: left; }
.form-label { display: block; font-weight: 600; color: #1a1a1a; margin: 16px 0 8px 0; }
.req { color: #ea601b; }

.text-input {
  width: 100%;
  height: 48px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 16px;
  outline: none;
}
.text-input:focus { border-color: #ff8c00; }

.with-action { display: grid; grid-template-columns: 1fr auto; }
.no-radius { border-top-right-radius: 0; border-bottom-right-radius: 0; border-right: none; }
.action-btn {
  height: 48px;
  padding: 0 16px;
  border: 1px solid #d6d6d6;
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #ffffff;
  color: #ff6b35;
  font-weight: 600;
  cursor: pointer;
}
.action-btn:disabled { color: #9b9b9b; cursor: not-allowed; }
.action-btn:not(:disabled):hover { background: #fff6f1; border-color: #ffdac9; }

.otp-row { display: flex; gap: 14px; justify-content: center; margin: 8px 0 22px 0; }
.otp-input {
  width: 46px; height: 46px; text-align: center; font-size: 20px;
  border: 1px solid #d6d6d6; border-radius: 8px; outline: none;
}
.otp-input:focus { border-color: #ff8c00; }

.next-btn {
  width: 260px; height: 52px; border: none; border-radius: 8px;
  background: #bfbfbf; color: #ffffff; font-weight: 700; display: block; margin: 0 auto;
}
.next-btn:not(.disabled) { background: #ff8c00; cursor: pointer; }
.next-btn:not(.disabled):hover { background: #e67e00; }

@media (max-width: 640px) {
  .content-wrap { margin: 10px auto 60px; padding: 0 12px; }
  .page-title { font-size: 30px; }
}
</style>
