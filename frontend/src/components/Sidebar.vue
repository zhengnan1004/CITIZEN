<template>
  <div class="sidebar">
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
          <a href="#" class="nav-link">NID Branch</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Application Status</a>
        </li>
        <li class="nav-item">
          <router-link
            to="/contact"
            class="nav-link"
            :class="{ active: $route.path.startsWith('/contact') || $route.path.startsWith('/inquiry') }"
          >Contact Us</router-link>
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
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  background: #1a1a1a;
  color: white;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
}

/* Logo区域 */
.logo-section {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
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

/* 导航区域 */
.navigation {
  flex: 1;
  margin-bottom: 30px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 8px;
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

.nav-link.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background: #ff8c00;
  border-radius: 0 2px 2px 0;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .sidebar {
    padding: 15px;
    min-height: auto;
  }
  
  .logo-section {
    margin-bottom: 30px;
  }
  
  .logo-img {
    width: 40px;
    height: 40px;
  }
  
  .citizen-text {
    font-size: 20px;
  }
  
  .nid-portal-text {
    font-size: 12px;
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

@media (max-width: 480px) {
  .sidebar {
    padding: 10px;
  }
  
  .logo-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .logo {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .action-buttons {
    flex-direction: row;
    gap: 8px;
  }
  
  .btn {
    flex: 1;
    padding: 8px 12px;
    font-size: 12px;
  }
}
</style>
