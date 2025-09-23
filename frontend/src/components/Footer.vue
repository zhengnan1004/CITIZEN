<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-top">
      <div class="footer-left">
        <div class="brand">
          <div class="brand-text">
            <div class="brand-line brand-line--main">CITIZEN</div>
            <div class="brand-line brand-line--sub">NID PORTAL</div>
          </div>
        </div>
      </div>

      <div class="footer-columns">
        <div class="footer-col">
          <h3 class="col-title">About Us</h3>
          <ul class="col-links">
            <li><a href="#">Register</a></li>
            <li><a href="#">Citizen NID Portal</a></li>
            <li><router-link to="/forget">Forgot Password?</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="col-title">Support</h3>
          <ul class="col-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">How to register for Citizen NID Portal</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="col-title">Quick links</h3>
          <ul class="col-links">
            <li><a href="#">Application Status</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">NID Branch</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="col-title">Connect</h3>
          <div class="social-and-stores">
            <div class="social">
              <a class="social-btn" aria-label="Facebook" href="#" title="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.6c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v2h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a class="social-btn" aria-label="LinkedIn" href="#" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 7.1a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9zM20.44 20v-6.6c0-3.5-1.9-5.1-4.43-5.1a3.83 3.83 0 0 0-3.46 1.9h-.07V8.5H9.24V20h3.38v-6.2c0-1.6.3-3.1 2.25-3.1 1.92 0 1.95 1.8 1.95 3.2V20h3.62z"/>
                </svg>
              </a>
            </div>
            <div class="stores">
              <a href="#" class="store-link" aria-label="Download on the App Store">
                <img src="/appleMinio.svg" alt="App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.enid.app" target="_blank" rel="noopener" class="store-link" aria-label="Get it on Google Play">
                <img src="/previewMinio.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="bottom-left">© PNGCIR - All rights reserved 2025.</div>
      <div class="bottom-center">
        <router-link to="/privacy">Privacy Policy</router-link>
        <span class="dot">•</span>
        <a href="#">Terms Of Use</a>
      </div>
      <div class="bottom-right">
        <span>©Government of Papua New Guinea</span>
        <span class="dot">•</span>
        <span>Last updated at 20 Mar 2025</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.site-footer {
  background:rgb(0, 0, 0);
  color: #ffffff;
}

.footer-top {
  display: grid;
  grid-template-columns: 0.6fr 3fr;
  gap: 15px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 20px 24px;
}

.brand { display: flex; align-items: center; gap: 12px; }
.brand-text { display: flex; flex-direction: column; }
.brand-line--main { font-size: 28px; font-weight: 700; letter-spacing: 2px; color: #ffffff; margin-bottom: 4px; transition: color .2s ease; cursor: pointer; }
.brand-line--main:hover { color: #ff8a00; }
.brand-line--sub { font-size: 16px; color: #a0a0a0; font-weight: 400; transition: color .2s ease; cursor: pointer; }
.brand-line--sub:hover { color: #ff8a00; }
.footer-columns { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
.footer-col { min-width: 0; padding: 8px; }
.col-title { color:#ff8a00; font-size: 14px; font-weight: 600; margin: 0 0 12px; }
.col-links { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
.col-links a { color: #b0b0b0; text-decoration: none; transition: color .2s ease; font-size: 13px; }
.col-links a:hover { color: #ff8a00; }

.social-and-stores { margin-top: 12px; display: grid; gap: 12px; }
.social { display: flex; gap: 12px; }
.social-btn { width: 40px; height: 40px; border-radius: 50%; background: #2d3748; color: #fff; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #4a5568; transition: transform .2s ease, background .2s ease; }
.social-btn:hover { background: #4a5568; transform: translateY(-2px); }
.stores { display: flex; gap: 12px; align-items: center; }
.store-link img { height: 48px; width: auto; display: block; }

.footer-bottom {
  border-top: 1px solid #2d3748;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 20px 24px;
  font-size: 14px;
  color: #a0a0a0;
}
.bottom-left { text-align: left; }
.bottom-center { text-align: center; display: flex; gap: 12px; justify-content: center; align-items: center; }
.bottom-center a { color: #a0a0a0; text-decoration: none; transition: color .2s ease; }
.bottom-center a:hover { color: #ff8a00; }
.bottom-right { text-align: right; color: #a0a0a0; display: flex; gap: 8px; justify-content: flex-end; }
.dot { color: #777; padding: 0 4px; }

@media (max-width: 1024px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-columns { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .footer-columns { grid-template-columns: repeat(2, 1fr); }
  .footer-bottom { grid-template-columns: 1fr; text-align: center; }
  .bottom-left, .bottom-right { text-align: center; justify-content: center; }
}

@media (max-width: 480px) {
  .stores .store-link img { height: 44px; }
}
</style>