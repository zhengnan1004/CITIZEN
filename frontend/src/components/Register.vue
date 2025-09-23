<template>
  <section class="nid-page">
    <div class="base-page-banner">
      <div class="banner-inner">
        <div class="left-copy">
          <h2 class="title">REGISTER</h2>
        </div>
        <div class="right-visual">
          <img src="/people.png" alt="Register page banner" />
        </div>
      </div>
    </div>

    <!-- BEFORE YOU START -->
    <div class="prestart-wrapper">
      <div class="prestart-card">
        <h3 class="prestart-title">BEFORE YOU START PLEASE MAKE SURE THAT</h3>
        <p class="prestart-intro">
          The birth of any child born in PNG must be recorded and issued with a Birth Certificate as governed by Civil Registration Act 1963. Amended 2014.
        </p>
        <ul class="prestart-bullets">
          <li>Persons below the 18 years of age register their birth certificate only.</li>
          <li>Persons with the 18 years of age and above register for both their birth certificate and National Identity Document (NID).</li>
        </ul>

        <div class="checklist">
          <div class="checklist-title">The checklist below provides a guide on the required attachments or documents to support birth registrations:</div>
          <div class="checklist-grid">
            <div class="item"><span class="num">1</span> Clinic Book/Health Record Book.</div>
            <div class="item"><span class="num">5</span> Written statement from informants/Notifier.</div>
            <div class="item"><span class="num">2</span> Baptism record.</div>
            <div class="item"><span class="num">6</span> Primary Verifier.</div>
            <div class="item"><span class="num">3</span> Employment ID cards.</div>
            <div class="item"><span class="num">7</span> NID Card or Birth Certificate.</div>
            <div class="item"><span class="num">4</span> Passport or school records.</div>
          </div>

          <div class="note-box">
            <div class="note-title">Note</div>
            <ol>
              <li>A Birth Certificate is a LEGAL IDENTITY DOCUMENT. All PNG Citizens must register for a BIRTH CERTIFICATE!</li>
              <li>Without a legal identity, you are not recognized by the government, which results in being unprotected, unaccounted and alienated from government services.</li>
              <li>To Meet the 2021 Targets; PNGCIR has deployed Mobile Teams through out PNG with the help of District MP's who have signed MOUs.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
    <div class="agree-section">
      <label class="agree-row">
        <input type="checkbox" :checked="agreeTerms" @change="onCheckboxChange" />
        <span>I have read and agree the <a href="#" class="terms-link" @click.prevent="openTerms">Terms of Use</a><span style="color:#ff8c00"> *</span></span>
      </label>
      <div class="btn-row">
        <button class="btn-outline" @click="onCancel">Cancel</button>
        <button :class="agreeTerms ? 'btn-primary' : 'btn-disabled'" :disabled="!agreeTerms" @click="onAccept">Accept & Continue</button>
      </div>
    </div>

    <!-- Terms Modal -->
    <div v-if="showTermsModal" class="terms-overlay" @click.self="closeTerms">
      <div class="terms-card">
        <button class="terms-close" @click="closeTerms">×</button>
        <h3 class="terms-title">Terms and Conditions</h3>
        <div class="terms-body">
          <p>Last updated: January 20, 2020</p>
          <p>Please read these terms and conditions carefully before using our Service.</p>
          <h4>Interpretation and Definitions</h4>
          <p>For the purposes of these Terms and Conditions...</p>
          <p>This is placeholder content. Replace with your real terms text as needed. This area scrolls if content exceeds the height.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet est id nisl tempus varius. Integer iaculis, dui a laoreet volutpat, erat nisl luctus turpis, in dignissim leo lectus at enim.</p>
          <p>Nullam aliquet, elit at fermentum varius, arcu nibh pulvinar justo, vel placerat orci nisl id ipsum. Cras ut massa id turpis lacinia consectetur. Sed rutrum, est sed consequat rhoncus, arcu odio sodales lorem, vitae pulvinar tortor urna non tortor.</p>
          <p>...</p>
        </div>
        <div class="terms-actions">
          <button class="btn-primary" @click="acceptTerms">I have read and agree</button>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      agreeTerms: false,
      showTermsModal: false
    }
  },
  methods: {
    openTerms() {
      this.showTermsModal = true
    },
    closeTerms() {
      this.showTermsModal = false
    },
    onCheckboxChange(e) {
      // 勾选时弹出条款弹窗，并在弹窗中点击同意后再勾选
      if (e.target.checked) {
        e.target.checked = false
        this.showTermsModal = true
      }
    },
    acceptTerms() {
      this.agreeTerms = true
      this.showTermsModal = false
    },
    onCancel() {
      this.$router.push('/nid')
    },
     onAccept() {
       if (!this.agreeTerms) return
       this.$router.push('/zhuce')
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

.left-copy { padding: 80px 20px 60px 20px; }

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

@media (max-width: 1024px) {
  .banner-inner { grid-template-columns: 1fr; align-items: center; }
  .left-copy { padding: 60px 20px 10px 20px; }
  .right-visual { height: 280px; border-bottom-left-radius: 120px; }
  .title { font-size: 42px; }
}

@media (max-width: 640px) {
  .left-copy { padding: 40px 16px 8px 16px; }
  .title { font-size: 32px; }
  .right-visual { height: 220px; border-bottom-left-radius: 90px; }
}
</style>
<style scoped>
/* 追加：内容部分样式 */
.prestart-wrapper {
  padding: 60px 16px 60px 16px;
}

.prestart-card {
  max-width: 800px;
  margin: 0 auto;
  background: #f8f7f6;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  padding: 28px 28px 32px 28px;
  position: relative;
}

.prestart-card::before {
  content: '';
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 72px;
  background: #ffffff;
  border-radius: 50%;
}

.prestart-title {
  color: #ea601b;
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 16px;
}

.prestart-intro { color: #222; line-height: 1.7; margin-bottom: 16px; }
.prestart-bullets { margin: 0 0 18px 22px; }
.prestart-bullets li { line-height: 1.7; margin-bottom: 6px; }

.checklist { background: linear-gradient(180deg, #fff 0%, #fff5ef 100%); border-radius: 14px; padding: 18px; border: 1px solid #f3cdb7; }
.checklist-title { font-weight: 700; margin-bottom: 12px; }
.checklist-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 30px; }
.item { color: #d3541a;  display: flex; align-items: center; gap: 2px; }
.num { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: #ff8c00; color: #fff; border-radius: 50%; font-size: 13px; font-weight: 700; }

.note-box { background: #f7f7f7; border: 1px solid #e5e5e5; border-radius: 12px; padding: 14px; margin-top: 16px; }
.note-title { font-weight: 700; margin-bottom: 8px; }
.note-box ol { padding-left: 18px; margin: 0; }
.note-box li { margin-bottom: 6px; line-height: 1.7; }

@media (max-width: 768px) {
  .checklist-grid { grid-template-columns: 1fr; }
}

/* 协议与按钮 */
.agree-section {
  max-width: 800px;
  margin: 24px auto 60px auto;
  text-align: center;
}

.agree-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #333;
  margin-bottom: 16px;
}

.agree-row a { color: #ea601b; text-decoration: none; }

.btn-row {
  display: flex;
  justify-content: center;
  gap: 18px;
}

.btn-outline,
.btn-primary,
.btn-disabled {
  height: 44px;
  padding: 0 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn-outline { background: #fff; color: #ea601b; border-color: #ea601b; }
.btn-outline:hover { box-shadow: 0 6px 16px rgba(234,96,27,.15); }

.btn-primary { background: #ff8c00; color: #fff; border-color: #ff8c00; }
.btn-primary:hover { box-shadow: 0 6px 16px rgba(255,140,0,.3); }

.btn-disabled { background: #ececec; color: #8e8e8e; cursor: not-allowed; }

/* Terms modal */
.terms-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2100;
}

.terms-card {
  background: #fff;
  width: min(820px, 92vw);
  max-height: 80vh;
  border-radius: 12px;
  padding: 20px 20px 16px 20px;
  box-shadow: 0 24px 48px rgba(0,0,0,0.28);
  position: relative;
  display: flex;
  flex-direction: column;
}

.terms-close {
  position: absolute;
  right: 12px;
  top: 10px;
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

.terms-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 24px 12px 0;
}

.terms-body {
  overflow: auto;
  padding-right: 6px;
  color: #333;
  line-height: 1.6;
}

.terms-actions {
  margin-top: 12px;
  display: flex;
  justify-content: center;
}
</style>


