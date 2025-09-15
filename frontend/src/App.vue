<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="header-container">
        <!-- Logo和Portal名称 -->
        <div class="logo-section">
          <div class="logo">
            <img src="https://enid-dev.ilmnhub.com/assets/logo-BYgfMcyp.svg" alt="CITIZEN Logo" class="logo-img" />
          </div>
          <div class="portal-name">
            <h1 class="citizen-text">CITIZEN</h1>
            <p class="nid-portal-text">NID PORTAL</p>
          </div>
        </div>

        <!-- 右侧导航和按钮区域 -->
        <div class="right-section">
          <!-- 导航链接 -->
          <nav class="navigation">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="#" class="nav-link active">Home</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">About NID</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">NID Branch</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Application Status</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Contact Us</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">FAQ</a>
              </li>
            </ul>
          </nav>

          <!-- 操作按钮 -->
          <div class="action-buttons">
            <button class="btn btn-login">Login</button>
            <button class="btn btn-register">Register</button>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <MainPage />
    </main>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
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
  gap: 40px;
  flex-shrink: 0;
}

/* 导航区域 */
.navigation {
  display: flex;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: block;
  padding: 12px 16px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background: #333;
  color: #ff8c00;
}

.nav-link.active {
  color: #ff8c00;
  background: rgba(255, 140, 0, 0.1);
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
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
