<template>
  <div class="login-page">
    <div class="main-content">
      <!-- 左侧内容区域 -->
      <div class="left-section">
        <div class="content-wrapper">
          <div class="illustration">
            <img src="/login.svg" alt="NID Services Illustration" class="illustration-img" />
          </div>
        </div>
      </div>

      <!-- 右侧登录表单区域 -->
      <div class="right-section">
        <div class="login-card">
          <h3 class="login-title">Login</h3>

          <!-- 登录方式切换标签 -->
          <div class="login-tabs">
            <button class="tab-button" :class="{ active: activeTab === 'password' }" @click="activeTab = 'password'">
              Password Login
            </button>
            <button class="tab-button" :class="{ active: activeTab === 'enid' }" @click="activeTab = 'enid'">
              eNID App Login
            </button>
          </div>

          <!-- 登录表单 -->
          <form class="login-form" @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="nid" class="form-label">NID</label>
              <input
                type="text"
                id="nid"
                v-model="loginData.nid"
                class="form-input"
                placeholder="Please enter your NID."
                required
              />
            </div>

            <div class="form-group input-with-icon">
              <label for="password" class="form-label">Password</label>
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="loginData.password"
                class="form-input"
                placeholder="Please enter your password."
                required
              />
              <span
                class="toggle-password"
                @mousedown="showPassword = true"
                @mouseup="showPassword = false"
                @mouseleave="showPassword = false"
                @touchstart.prevent="showPassword = true"
                @touchend="showPassword = false"
              >
                <img
                  :src="showPassword ? '/see.svg' : '/see.svg'"
                  alt="Toggle password visibility"
                  class="eye-icon"
                />
              </span>
            </div>

            <button type="submit" class="login-button">Login</button>

            <div class="form-links">
              <router-link to="/register" class="form-link register-link">Register</router-link>
              <router-link to="/forget" class="form-link forgot-link">Forgot Password?</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Login',
  data() {
    return {
      activeTab: 'password',
      loginData: {
        nid: '',
        password: ''
      },
      showPassword: false
    }
  },
  methods: {
    handleLogin() {
      console.log('Login data:', this.loginData)
    }
  }
}
</script>
  
  <style scoped>
  .login-page {
    min-height: calc(100vh - 80px);
    background-image: url('/background3.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
  
  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1200px;
    width: 100%;
    align-items: center;
  }
  
  /* 左侧内容区域 */
  .left-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content-wrapper {
    text-align: left;
    max-width: 500px;
  }
  
  .main-title {
    font-size: 28px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    line-height: 1.3;
  }
  
  .subtitle {
    font-size: 48px;
    font-weight: 800;
    color: #333;
    margin-bottom: 40px;
    line-height: 1.1;
  }
  
  .illustration {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .illustration-img {
    max-width: 100%;
    height: auto;
    max-height: 400px;
  }
  
  /* 右侧登录表单区域 */
  .right-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-card {
    background: white;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .login-title {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
  }
  
  /* 登录方式切换标签 */
  .login-tabs {
    display: flex;
    margin-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .tab-button {
    flex: 1;
    padding: 12px 0;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
  }
  
  .tab-button.active {
    color: #ff8c00;
    border-bottom-color: #ff8c00;
  }
  
  .tab-button:hover {
    color: #ff8c00;
  }
  
  /* 表单样式 */
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .form-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  
  .form-input {
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s ease;
    outline: none;
  }
  
  
  .form-input:focus {
    border-color: #ff8c00;
  }
  
  
  
  .login-button {
    background: #ff8c00;
    color: white;
    border: none;
    padding: 14px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
  }
  
  .login-button:hover {
    background: #e67e00;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
  }

.input-with-icon {
  position: relative;
  /* 通过变量微调眼睛垂直位置（+ 向下，- 向上） */
  --eye-offset: 12px;
}

.input-with-icon .form-input {
  padding-right: 40px; /* 给眼睛按钮预留空间 */
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(calc(-50% + var(--eye-offset)));
  cursor: pointer;
  display: flex;
  align-items: center;
}

.eye-icon {
  width: 20px;
  height: 20px;
  transition: filter 0.2s ease;
}

/* 悬停或按下时高亮 */
.toggle-password:active .eye-icon,
.toggle-password:hover .eye-icon {
  filter: brightness(0) saturate(100%) invert(44%) sepia(84%) saturate(2000%) hue-rotate(10deg) brightness(100%) contrast(95%);
}

  
  .form-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  
  .form-link {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .register-link {
    color: #ff8c00;
  }
  
  .register-link:hover {
    color: #e67e00;
  }
  
  .forgot-link {
    color: #666;
  }
  
  .forgot-link:hover {
    color: #333;
  }

  /* 隐藏浏览器(Edge/IE)自带的密码显隐按钮，避免与自定义图标重复 */
  :deep(input[type="password"]::-ms-reveal),
  :deep(input[type="password"]::-ms-clear) {
    display: none;
  }
  /* 一些 Edge/Chromium 版本也使用 ::-ms-reveal，冗余一条保证兼容 */
  :deep(.form-input::-ms-reveal),
  :deep(.form-input::-ms-clear) {
    display: none;
  }
  
  /* 响应式设计 */
  @media (max-width: 1024px) {
    .main-content {
      gap: 40px;
    }
    
    .subtitle {
      font-size: 40px;
    }
    
    .main-title {
      font-size: 24px;
    }
  }
  
  @media (max-width: 768px) {
    .main-content {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: center;
    }
    
    .content-wrapper {
      text-align: center;
    }
    
    .subtitle {
      font-size: 36px;
    }
    
    .main-title {
      font-size: 22px;
    }
    
    .login-card {
      padding: 30px 20px;
    }
  }
  
  @media (max-width: 480px) {
    .login-page {
      padding: 20px 10px;
    }
    
    .subtitle {
      font-size: 28px;
    }
    
    .main-title {
      font-size: 20px;
    }
    
    .login-card {
      padding: 20px 15px;
    }
    
    .form-links {
      flex-direction: column;
      gap: 10px;
    }
  }
  </style>
