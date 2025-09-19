<template>
  <section class="nid-page">
    <div class="base-page-banner">
      <div class="banner-inner">
        <div class="left-copy">
          <h2 class="title">ABOUT NID</h2>
        </div>
        <div class="right-visual">
          <img src="/child.png" alt="ABOUT NID page banner" />
        </div>
      </div>
    </div>

    <div class="content-card">
      <h3>National Identity-NID</h3>
      <p>
        National Identity is an important legal Identity Document that recognizes you as a PNG
      </p>
      <p>
        Citizen before the law and the State of PNG.
      </p>
      <p>
        Persons above 18 years of age must be registered with an NID.
      </p>
      <p>
        NID registration collects your Personal Information plus your biometrics; Face photo and
      </p>
      <p>
        10 fingers finger print. The output is a legal Birth Certificate and National Identity Card.
      </p>
    </div>

    <div class="nid-section-bg">
      <h2 class="headline">
        <strong>IMPORTANCE OF GETTING EVERYONE REGISTERED</strong>
      </h2>
    </div>

    <!-- fourpeople.png -->
    <section class="feature-block">
      <div class="feature-inner">
        <div class="feature-copy">
          <h3 class="feature-title">Health Planning</h3>
          <ul class="feature-list">
            <li>Identifying priorities – maternal and child health care, Non-communicable diseases.</li>
            <li>Targeting health Programs – populations at risk.</li>
            <li>Service Delivery – distribution of health infrastructure, e.g. drugs, service providers and other resources.</li>
          </ul>
        </div>
        <div class="feature-visual">
          <img src="/fourpeople.png" alt="Health Planning" />
        </div>
      </div>
    </section>

    <!-- manypeople.png-->
    <section class="feature-block feature-left">
      <div class="feature-inner">
        <div class="feature-visual">
          <img src="/manypeople.png" alt="Government Services" />
        </div>
        <div class="feature-copy">
          <h3 class="feature-title">Government Services</h3>
          <ul class="feature-list">
            <li>Education – allocation of resources; schools and teachers.</li>
            <li>Social security – e.g. age of retirement and pension, Police protection and social welfare.</li>
            <li>Infrastructure planning – determining needs such as housing.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- onepeople.png -->
    <section class="feature-block">
      <div class="feature-inner">
        <div class="feature-copy">
          <h3 class="feature-title">Identity and Security</h3>
          <ul class="feature-list">
            <li>Passports and identify documents.</li>
            <li>Electoral rolls.</li>
            <li>Disaster planning and response(identification of populations at risk and follow up for support).</li>
            <li>Commercial Business Transactions.</li>
          </ul>
        </div>
        <div class="feature-visual">
          <img src="/onepeople.png" alt="Identity and Security" />
        </div>
      </div>
    </section>

    <!-- threepeople.png -->
    <section class="feature-block feature-left">
      <div class="feature-inner">
        <div class="feature-visual">
          <img src="/threepeople.png" alt="Land" />
        </div>
        <div class="feature-copy">
          <h3 class="feature-title">Land</h3>
          <ul class="feature-list">
            <li>land Rights and Inheritances.</li>
            <li>Royalty.</li>
            <li>ILG recognition.</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Nid'
}
</script>

<style scoped>
.nid-page {
  background: #ffffff;
}


.nid-section-bg {
  background-image: url('/statisticsBg-D_n8gkQd.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 120px;
  padding-bottom: 50px;
  position: relative;
  margin-top: -100px;
  z-index: 1;

  /*初始状态*/
  opacity: 0;
  transform: translateY(50px);
  animation: slideUp 1s ease-out forwards;
}

.headline {
  font-size: 48px;
  line-height: 67px;
  font-weight: 600;
  text-align: center;
  max-width: 982px;
  margin: 0 auto;
  color: #ee6425;
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

.content-card {
  max-width: 1000px;
  margin: 36px auto 80px auto;
  background: #f8f7f6;
  border-radius: 18px;
  padding: 28px 28px 36px 28px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 2;

  /*初始状态*/
  opacity: 0;
  transform: translateY(-50px);
  animation: slideDown 1s ease-out forwards; 
}

.content-card::before {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%);
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 50%;
  display: block;
}

.content-card h3 {
  font-size: 48px;
  margin-bottom: 10px;
  line-height: 67px;
  color: #ee6425;
  text-align: center;
  font-weight: 600;
}

.content-card p {
  color: #4a4a4a;
  line-height: 1.8;
  font-size: 22px;
  text-align: center;
}

/* 新的两栏组件 */
.feature-block {
  padding: 40px 0 80px 0;
}

.feature-inner {
  max-width: 1220px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: center;
}

.feature-title {
  font-size: 48px;
  line-height: 1.2;
  color: #ee6425;
  font-weight: 700;
  margin-bottom: 16px;
}

.feature-list {
  padding-left: 20px;
  color: #333;
  font-size: 20px;
  line-height: 1.1;
}


.feature-visual {
  position: relative;
  border-bottom-left-radius: 180px;
  overflow: hidden;
}

.feature-visual::after {
  content: "";
  position: absolute;
  right: -80px;
  bottom: -80px;
  width: 60%;
  height: 60%;
  background: #f6d8ca;
  border-top-left-radius: 160px;
  z-index: 0;
}

.feature-visual img {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  z-index: 1;
}

/* 左图右文的镜像圆角与装饰背景 */
.feature-left .feature-inner {
  grid-template-columns: 1fr 1.1fr;
}

.feature-left .feature-visual {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 180px;
}

.feature-left .feature-visual::after {
  left: -80px;
  right: auto;
  border-top-right-radius: 160px;
  border-top-left-radius: 0;
}

@media (max-width: 1024px) {
  .feature-inner {
    grid-template-columns: 1fr;
  }
  .feature-visual {
    order: 2;
  }
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

@keyframes slideDown{
  to {
    opacity: 1; 
    transform: translateY(0);
  }
}

@keyframes slideUp{
  to {
    opacity: 1; 
    transform: translateY(0);
  }
}
</style>