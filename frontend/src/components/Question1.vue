<template>
  <div class="faq-page">
    <!-- 顶部返回与 Need Help 同行 -->
    <div class="top-bar">
      <div class="back-section">
        <router-link to="/faq" class="back-link">
          <span class="back-icon">‹</span>
          Back
        </router-link>
      </div>
      <div class="top-need-help">
        <router-link to="/contact" class="need-help-link">Need Help?</router-link>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 左侧内容 -->
      <div class="content-left">
        <!-- 问题标题 -->
        <h1 class="question-title">How do I contact the National Identification Bureau for help?</h1>
        
        <!-- 分隔线 -->
        <div class="title-divider"></div>
        
        <!-- 问题元数据 -->
        <div class="question-meta">
          <span class="meta-item">
            <img src="/clock.svg" alt="time" class="meta-icon" />
            08-08-2025 16:28
          </span>
          <span class="meta-item">
            <img src="/dianzan.svg" alt="like" class="meta-icon" />
            4
          </span>
        </div>

        <!-- 答案内容 -->
        <div class="answer-content">
          <!-- 联系方式容器 -->
          <div class="contact-info-container">
            <div class="answer-item">
              <strong>National Hotline:</strong> [Phone Number] (available Monday-Friday, 8 AM-4 PM)
            </div>
            
            <div class="answer-item">
              <strong>Email:</strong> nib.support@png.gov.pg
            </div>
            
            <div class="answer-item">
              <strong>Social Media:</strong> Follow NIB on Facebook/WhatsApp for updates: @PNGNIBOfficial
            </div>

            <div class="answer-item">
                Note: Policies and procedures may change-always confirm details with your local NIB office or the official website before applying!
            </div>

          </div>
          
          <div class="note">
            Was this answer helpful?
          </div>
          
          <div class="helpful-actions">
            <button class="helpful-btn is-no" type="button">
              <img class="helpful-icon is-down" src="/dianzan.svg" alt="No" />
              <span>No</span>
            </button>
            <button class="helpful-btn is-yes" type="button">
              <img class="helpful-icon" src="/dianzan.svg" alt="Yes" />
              <span>Yes</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧边栏 -->
      <div class="sidebar">
        
        <!-- 相关问题 -->
        <div class="related-questions">
          <h3 class="related-title">Related Questions</h3>
          
          <div class="question-cards">
            <!-- 问题卡片1 -->
            <div class="question-card">
              <div class="card-header">
                <h4 class="card-title">I have trouble to access eNID website on my PC</h4>
                <span class="card-arrow">›</span>
              </div>
              <div class="card-meta">
                <img src="/clock.svg" alt="time" class="meta-icon" />
                08-01-2025 16:01
                <img src="/dianzan.svg" alt="like" class="meta-icon" />
                1
              </div>
            </div>

            <!-- 问题卡片2 -->
            <div class="question-card">
              <div class="card-header">
                <h4 class="card-title">Where can I submit suggestions and complains regard the service?</h4>
                <span class="card-arrow">›</span>
              </div>
              <div class="card-meta">
                <img src="/clock.svg" alt="time" class="meta-icon" />
                08-01-2025 16:01
                <img src="/dianzan.svg" alt="like" class="meta-icon" />
                2
              </div>
            </div>

            <!-- 问题卡片3 -->
            <div class="question-card">
              <div class="card-header">
                <h4 class="card-title">Do I need an Internet connection or mobile data to access eNID app?</h4>
                <span class="card-arrow">›</span>
              </div>
              <div class="card-meta">
                <img src="/clock.svg" alt="time" class="meta-icon" />
                08-01-2025 16:01
                <img src="/dianzan.svg" alt="like" class="meta-icon" />
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question1'
}
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  background: white;
  padding: 20px;
}

.back-section {
  margin-bottom: 0;
}

.top-bar {
  max-width: 1100px;
  margin: 0 auto 12px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ff6b35;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #e55a2b;
}

.back-icon {
  font-size: 20px;
  font-weight: bold;
}

.top-need-help {
  text-align: right;
}

.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

/* 左侧内容 */
.content-left {
  background: white;
}

.question-title {
  font-size: 34px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 10px 0 0 0;
  letter-spacing: -0.5px;
}

.title-divider {
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
}

.question-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  color: #666;
  font-size: 14px;
  font-weight: 400;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
}

.answer-content {
  line-height: 1.6;
}

.contact-info-container {
  background-color: #f8f7f6;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.answer-item {
  margin-bottom: 16px;
  font-size: 18px;
  color: #333;
}

.answer-item strong {
  color: #1a1a1a;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
}

.note {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  font-size: 22px;
  color: #080808;
  font-style: italic;
  text-align: center;
}

.helpful-actions {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.helpful-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;
  color: #222;
  font-size: 16px;
  transition: box-shadow .2s ease, border-color .2s ease, transform .1s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
}

.helpful-btn:hover {
  border-color: #ffdac9;
  color: #ff6b35;
  box-shadow: 0 8px 20px rgba(234,96,27,.18);
}

.helpful-btn:hover .helpful-icon {
  filter: invert(55%) sepia(64%) saturate(1648%) hue-rotate(342deg) brightness(101%) contrast(101%);
}

.helpful-icon {
  width: 20px;
  height: 20px;
}

.helpful-icon.is-down {
  transform: rotate(180deg);
}

@media (max-width: 480px) {
  .helpful-btn { padding: 8px 14px; font-size: 14px; }
  .helpful-actions { gap: 12px; }
}

/* 右侧边栏 */
.sidebar {
  background: #fcfcfc;
  padding: 30px;
  border-radius: 12px;
  height: fit-content;
}

.need-help-section {
  margin-bottom: 30px;
}

.need-help-link {
  color: #ff6b35;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s ease;
}

.need-help-link:hover {
  color: #e55a2b;
}

.related-title {
  color: #ff6b35;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 20px 0;
}

.question-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.question-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #eeeeee;
}

.question-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(234, 96, 27, 0.18);
  border-color: #ffdac9;
}

.question-card:hover .card-title { color: #ff6b35; }
.question-card:hover .meta-icon { filter: invert(55%) sepia(64%) saturate(1648%) hue-rotate(342deg) brightness(101%) contrast(101%); }

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
  flex: 1;
  margin-right: 12px;
}

.card-arrow {
  color: #ff6b35;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  line-height: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #666;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .question-title {
    font-size: 28px;
  }
  
  .sidebar {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .faq-page {
    padding: 16px;
  }
  
  .question-title {
    font-size: 24px;
  }
  
  .question-meta {
    flex-direction: column;
    gap: 12px;
  }
  
  .sidebar {
    padding: 16px;
  }
  
  .question-card {
    padding: 16px;
  }
  
  .card-title {
    font-size: 14px;
  }
}
</style>
