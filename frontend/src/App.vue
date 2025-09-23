<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="header-container">
        <!-- Logo和Portal名称 -->
        <div class="logo-section">
          <router-link to="/" class="logo-link">
            <div class="logo">
              <img src="https://enid-dev.ilmnhub.com/assets/logo-BYgfMcyp.svg" alt="CITIZEN Logo" class="logo-img" />
            </div>
            <div class="portal-name">
              <h1 class="citizen-text">CITIZEN</h1>
              <p class="nid-portal-text">NID PORTAL</p>
            </div>
          </router-link>
        </div>

        <!-- 右侧导航和按钮区域 -->
        <div class="right-section">
          <!-- 导航链接 -->
          <nav class="navigation">
            <ul class="nav-list">
              <li class="nav-item">
                <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/nid" class="nav-link" :class="{ active: $route.path.startsWith('/nid') }">About NID</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/branch" class="nav-link" :class="{ active: $route.path.startsWith('/branch') }">NID Branch</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/application" class="nav-link" :class="{ active: $route.path.startsWith('/application') }">Application Status</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" :class="{ active: $route.path.startsWith('/contact') || $route.path.startsWith('/inquiry') }">Contact Us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/faq" class="nav-link" :class="{ active: $route.path.startsWith('/faq') || $route.path.startsWith('/question') }">FAQ</router-link>
              </li>
            </ul>
          </nav>

          <!-- 操作按钮 -->
          <div class="action-buttons">
            <router-link to="/login" class="btn btn-login">Login</router-link>
            <button class="btn btn-register" @click="showRegisterModal = true">Register</button>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view />
    </main>
    <Footer />

    <!-- Register 弹窗 -->
    <div v-if="showRegisterModal" class="modal-overlay" @click.self="showRegisterModal = false">
      <div class="modal-card">
        <button class="modal-close" @click="showRegisterModal = false">×</button>
        <h3 class="modal-title">eNID Register</h3>
        <p class="modal-sub">Have you already got a physical National ID?</p>

        <div class="modal-options">
          <button class="option primary" @click="goExisting">
            <span class="opt-title">Yes, I already have an NID</span>
            <span class="opt-sub">Continue with my existing NID</span>
            <span class="arrow">→</span>
          </button>
          <button class="option outline" @click="goNew">
            <span class="opt-title">No, I haven't applied yet</span>
            <span class="opt-sub">Start a new application</span>
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      showRegisterModal: false
    }
  },
  methods: {
    goExisting() {
      this.showRegisterModal = false
      this.$router.push('/login')
    },
    goNew() {
      this.showRegisterModal = false
      this.$router.push('/register')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
}

/* 顶部导航栏样式 */
.header {
  background: #1a1a1a;
  color: white;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
}

/* Logo区域 */
.logo-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-link { display: inline-flex; align-items: center; text-decoration: none; color: inherit; }

.logo {
  margin-right: 15px;
}

.logo-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.portal-name {
  display: flex;
  flex-direction: column;
}

.citizen-text {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: white;
  line-height: 1;
}

.nid-portal-text {
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: #ccc;
  line-height: 1;
  margin-top: 2px;
}

/* 右侧区域 */
.right-section {
  display: flex;
  align-items: center;
  gap: 0px;
  flex-shrink: 0;
}
.navigation {
  display: flex;
  margin-left: 20px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
}


.nav-link {
  display: block;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: transparent;
  color: #ff8c00;
}

.nav-link.active {
  color: #ff8c00;
  background: transparent;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  margin-left: 60px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
}

.btn-login {
  background: #ff8c00;
  color: white;
}

.btn-login:hover {
  background: #e67e00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
}

.btn-register {
  background: transparent;
  color: #ff8c00;
  border: 2px solid #ff8c00;
}

.btn-register:hover {
  background: #ff8c00;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.2);
}

/* 主要内容区域 */
.main-content {
  min-height: calc(100vh - 80px);
}

/* Modal 样式 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-card {
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  width: min(900px, 92vw);
  height: 300px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  position: relative;
}

.modal-close {
  position: absolute;
  right: 14px;
  top: 12px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.modal-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}

.modal-sub {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.modal-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.option {
  position: relative;
  border-radius: 10px;
  padding: 18px 20px;
  text-align: left;
  cursor: pointer;
  border: 1px solid #ff8c00;
  background: #fff;
  transition: transform .15s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
}

.option .opt-title { font-size: 20px; font-weight: 700; display: block; margin-bottom: 6px; }
.option .opt-sub { color: #666; font-size: 14px; }
.option .arrow { position: absolute; right: 14px; bottom: 14px; font-size: 18px; color: #ff8c00; }

.option.primary {
  background: #ff8c00;
  color: #fff;
  border-color: #ff8c00;
}
.option.primary .opt-sub { color: #fff; opacity: .95; }
.option.primary .arrow { color: #fff; }

.option:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.15); }

@media (max-width: 640px) {
  .modal-card { padding: 20px; }
  .modal-options { grid-template-columns: 1fr; }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .header-container {
    padding: 12px 15px;
  }
  
  .nav-list {
    gap: 20px;
  }
  
  .nav-link {
    padding: 10px 12px;
    font-size: 14px;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }
  
  .right-section {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    order: 2;
  }
  
  .navigation {
    order: 1;
    width: 100%;
  }
  
  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  
  .action-buttons {
    order: 2;
    width: 100%;
    justify-content: center;
  }
  
  .logo-section {
    order: 1;
  }
}

@media (max-width: 480px) {
  .nav-list {
    gap: 10px;
  }
  
  .nav-link {
    padding: 8px 10px;
    font-size: 13px;
  }
  
  .btn {
    padding: 8px 16px;
    font-size: 12px;
  }
  
  .citizen-text {
    font-size: 20px;
  }
  
  .nid-portal-text {
    font-size: 12px;
  }
  
  .logo-img {
    width: 40px;
    height: 40px;
  }
}
</style>
