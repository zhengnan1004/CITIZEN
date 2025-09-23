<template>
  <section class="privacy-page">
    <div class="topbar">
      <button class="back" @click="goBack">← Back</button>
    </div>

    <div class="container">
      <h1 class="title">Privacy Policy</h1>
      <div class="updated">Last updated: <strong>January 20, 2020</strong></div>

      <p>
        This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your
        information when you use the Service and tells you about your privacy rights and how the law protects you.
      </p>
      <p>
        We use your personal data to provide and improve the Service. By using the Service, you agree to the
        collection and use of information in accordance with this Privacy Policy.
      </p>

      <h2 class="section-title">Interpretation and Definitions</h2>
      <h3 class="sub-title">Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the following conditions.
        The following definitions shall have the same meaning regardless of whether they appear in singular or in
        plural.
      </p>

      <h3 class="sub-title">Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul class="bullets">
        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to PAPUA NEW GUINEA CIVIL & IDENTITY REGISTRY, PNG NID Haus, Kumul Avenue, Port Moresby.</li>
        <li><strong>Account</strong> means a unique account created for you to access our Service or parts of our Service.</li>
        <li><strong>Website</strong> refers to PNGCIR.</li>
        <li><strong>Service</strong> refers to the Website.</li>
        <li><strong>Country</strong> refers to Papua New Guinea.</li>
      </ul>

      <h2 class="section-title">Collecting and Using Your Personal Data</h2>
      <h3 class="sub-title">Types of Data Collected</h3>
      <p>
        While using our Service, we may ask you to provide us with certain personally identifiable information that can
        be used to contact or identify you.
      </p>

      <h3 class="sub-title">Use of Your Personal Data</h3>
      <ul class="bullets">
        <li>To provide and maintain our Service.</li>
        <li>To manage your account.</li>
        <li>To contact you by email, phone calls, SMS, or other equivalent forms of electronic communication.</li>
      </ul>

      <h2 class="section-title">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:helpdesk@pngcir.gov.pg">helpdesk@pngcir.gov.pg</a>.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Privacy',
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.privacy-page { background: #fff; }
.topbar { max-width: 980px; margin: 0 auto; padding: 20px 16px 0 16px; }
.back { background: transparent; border: none; color: #ff8c00; font-weight: 700; cursor: pointer; }
.container { max-width: 980px; margin: 0 auto; padding: 10px 16px 60px 16px; }
.title { font-size: 28px; font-weight: 800; margin: 10px 0 14px 0; color: #1a1a1a; }
.updated { color: #333; margin-bottom: 18px; }
.section-title { font-size: 24px; font-weight: 800; color: #1a1a1a; margin: 28px 0 8px 0; }
.sub-title { font-size: 18px; font-weight: 700; color: #1a1a1a; margin: 12px 0 6px 0; }
p { color: #1f1f1f; line-height: 1.8; margin: 10px 0; }
.bullets { padding-left: 18px; color: #1f1f1f; }
.bullets li { margin: 6px 0; line-height: 1.7; }
.container a { color: #ff8c00; text-decoration: none; }
.container a:hover { text-decoration: underline; }
@media (max-width: 640px) {
  .title { font-size: 28px; }
}
</style>


