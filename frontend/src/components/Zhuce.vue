<template>
  <div class="zhuce-page">
    <!-- 头部区域 -->
    <div class="header-section">
      <div class="header-bg"></div>
      <div class="header-content">
        <h1 class="header-title">Register</h1>
      </div>
    </div>
    
    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 侧边栏容器 -->
      <div class="sidebar-container">
        <!-- 侧边栏卡片 -->
        <div class="sidebar">
        <!-- 注册步骤 -->
        <div class="register-steps">
          <h2 class="steps-title">Register Steps</h2>
          <div class="steps-list">
            <div class="step-item active">
              <div class="step-number">1</div>
              <div class="step-text">Applicant's Details</div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-text">Parents Details</div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-text">National Identity Card Information</div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-text">Set Password</div>
            </div>
          </div>
        </div>
        
        <!-- 帮助部分 -->
        <div class="help-section" @click="goToContact">
          <h2 class="help-title">Need Help?</h2>
          <button class="contact-btn" @click.stop="goToContact">Contact Us</button>
          <div class="help-image" @click.stop="goToContact">
            <img src="/contact.png" alt="Contact Support" />
          </div>
        </div>
      </div>
      </div>
      
      <!-- 右侧内容区域 -->
      <div class="content-area">
        <!-- 申请人详情表单 -->
        <div class="form-container">
          <h2 class="form-title">Applicant's Details</h2>
          
          <!-- 申请人详情部分 -->
          <div class="form-section">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name <span class="required">*</span></label>
                <input type="text" class="form-input" value="Yansen" />
              </div>
                <div class="form-group">
                  <label class="form-label">Middle Name</label>
                  <input type="text" class="form-input" placeholder="Please enter your middle name" />
                </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Last Name <span class="required">*</span></label>
                <input type="text" class="form-input" value="Feng" />
              </div>
              <div class="form-group">
                <label class="form-label">Tribe <span class="required">*</span></label>
                <input type="text" class="form-input" value="Koiari" />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Clan <span class="required">*</span></label>
                <input type="text" class="form-input" value="Warrior" />
              </div>
              <div class="form-group">
                <label class="form-label">Date Of Birth <span class="required">*</span></label>
                <div class="date-picker-wrapper">
                  <div class="date-input-container" @click="toggleDatePicker">
                    <span class="calendar-icon">📅</span>
                    <input type="text" class="form-input date-input" v-model="selectedDate" readonly />
                    <span class="clear-icon" @click.stop="clearDate">×</span>
                  </div>
                  
                  <!-- 日期选择器弹窗 -->
                  <div v-if="showDatePicker" class="date-picker-popup">
                    <div class="date-picker-header">
                      <button @click="previousYear" class="nav-btn"><<</button>
                      <button @click="previousMonth" class="nav-btn"><</button>
                      <span class="current-month">{{ currentMonthYear }}</span>
                      <button @click="nextMonth" class="nav-btn">></button>
                      <button @click="nextYear" class="nav-btn">>></button>
                    </div>
                    
                    <div class="date-picker-weekdays">
                      <div class="weekday" v-for="day in weekdays" :key="day">{{ day }}</div>
                    </div>
                    
                    <div class="date-picker-grid">
                      <div 
                        v-for="day in calendarDays" 
                        :key="`${day.date}-${day.month}-${day.year}`"
                        class="calendar-day"
                        :class="{
                          'other-month': day.otherMonth,
                          'selected': day.selected,
                          'today': day.today
                        }"
                        @click="selectDate(day)"
                      >
                        {{ day.date }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 出生地信息部分 -->
          <div class="form-section place-of-birth">
            <h3 class="section-title">Place of Birth</h3>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Hospital/Village/Town <span class="required">*</span></label>
                <input type="text" class="form-input" value="Mount Hagen" />
              </div>
              <div class="form-group">
                <label class="form-label">Province/state <span class="required">*</span></label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openProvince }" @click="toggle('Province')">
                    <span class="cs-text">{{ selectedProvince }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openProvince" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsProvince" :key="opt" @click="selectOption('Province', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">LLG <span class="required">*</span></label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openLLG }" @click="toggle('LLG')">
                    <span class="cs-text">{{ selectedLLG }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openLLG" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsLLG" :key="opt" @click="selectOption('LLG', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">District <span class="required">*</span></label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openDistrict }" @click="toggle('District')">
                    <span class="cs-text">{{ selectedDistrict }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openDistrict" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsDistrict" :key="opt" @click="selectOption('District', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Ward <span class="required">*</span></label>
                <input type="text" class="form-input" value="Kaugere" />
              </div>
              <div class="form-group">
                <!-- 空列保持布局平衡 -->
              </div>
            </div>
          </div>
          
          <!-- 申请人详情第二部分 -->
          <div class="form-section">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Gender <span class="required">*</span></label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openGender }" @click="toggle('Gender')">
                    <span class="cs-text">{{ selectedGender }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openGender" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsGender" :key="opt" @click="selectOption('Gender', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Order Of Child</label>
                <input type="text" class="form-input" value="First" />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Registration Type <span class="required">*</span> <span class="info-icon">ⓘ</span></label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openRegType }" @click="toggle('RegType')">
                    <span class="cs-text">{{ selectedRegType }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openRegType" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsRegType" :key="opt" @click="selectOption('RegType', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Registered As <span class="required">*</span> <span class="info-icon">ⓘ</span></label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openRegisteredAs }" @click="toggle('RegisteredAs')">
                    <span class="cs-text">{{ selectedRegisteredAs }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openRegisteredAs" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsRegisteredAs" :key="opt" @click="selectOption('RegisteredAs', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Type of Birth</label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openBirthType }" @click="toggle('BirthType')">
                    <span class="cs-text">{{ selectedBirthType }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openBirthType" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsBirthType" :key="opt" @click="selectOption('BirthType', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Disability <span class="info-icon">ⓘ</span></label>
                <div class="custom-select">
                  <button type="button" class="cs-trigger" :class="{ open: openDisability }" @click="toggle('Disability')">
                    <span class="cs-text">{{ selectedDisability }}</span>
                    <span class="cs-caret">▾</span>
                  </button>
                  <div v-if="openDisability" class="cs-menu">
                    <div class="cs-option" v-for="opt in optionsDisability" :key="opt" @click="selectOption('Disability', opt)">{{ opt }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 联系信息部分 -->
          <div class="form-section contact-info">
            <h3 class="section-title">Contact Information</h3>
            <div class="form-group">
              <label class="form-label">Mobile No <span class="required">*</span> <span class="info-icon">ⓘ</span></label>
              <div class="input-with-button">
                <input type="text" class="form-input" value="70008000" />
                <button class="send-code-btn">Send Code</button>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <div class="input-with-button">
                <input type="email" class="form-input" placeholder="Please enter your email" />
                <button class="send-code-btn disabled">Send Code</button>
              </div>
            </div>
          </div>
          
          <!-- 操作按钮 -->
          <div class="form-actions">
            <button class="btn-cancel">Cancel</button>
            <button class="btn-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Zhuce',
  data() {
    return {
      selectedDate: '06-17-1983',
      showDatePicker: false,
      currentDate: new Date(1983, 5, 17), // 1983年6月17日
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

      // 自定义下拉：状态与选项
      openProvince: false,
      openLLG: false,
      openDistrict: false,
      openGender: false,
      openRegType: false,
      openRegisteredAs: false,
      openBirthType: false,
      openDisability: false,

      selectedProvince: 'National Capital District',
      selectedLLG: 'Port Moresby Urban LLG',
      selectedDistrict: 'Port Moresby South',
      selectedGender: 'Male',
      selectedRegType: 'Live Birth',
      selectedRegisteredAs: 'Natural',
      selectedBirthType: 'Twins',
      selectedDisability: 'Yes',

      optionsProvince: ['National Capital District', 'Eastern Highlands', 'Western Province'],
      optionsLLG: ['Port Moresby Urban LLG', 'Hohola LLG', 'Waigani LLG'],
      optionsDistrict: ['Port Moresby South', 'Port Moresby North-West', 'Port Moresby North-East'],
      optionsGender: ['Male', 'Female'],
      optionsRegType: ['Live Birth', 'Still Birth'],
      optionsRegisteredAs: ['Natural', 'Adopted'],
      optionsBirthType: ['Twins', 'Single', 'Triplets'],
      optionsDisability: ['Yes', 'No']
    }
  },
  computed: {
    currentMonthYear() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
      return `${this.currentDate.getFullYear()} ${months[this.currentDate.getMonth()]}`;
    },
    calendarDays() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const today = new Date();
      
      // 获取当月第一天和最后一天
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const firstDayOfWeek = firstDay.getDay();
      const daysInMonth = lastDay.getDate();
      
      const days = [];
      
      // 添加上个月的末尾几天
      const prevMonth = new Date(year, month - 1, 0);
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        days.push({
          date: prevMonth.getDate() - i,
          month: month - 1,
          year: year,
          otherMonth: true,
          selected: false,
          today: false
        });
      }
      
      // 添加当月的所有天
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isSelected = this.selectedDate === this.formatDate(date);
        const isToday = date.toDateString() === today.toDateString();
        
        days.push({
          date: day,
          month: month,
          year: year,
          otherMonth: false,
          selected: isSelected,
          today: isToday
        });
      }
      
      // 添加下个月的开头几天，填满6行
      const remainingDays = 42 - days.length;
      for (let day = 1; day <= remainingDays; day++) {
        days.push({
          date: day,
          month: month + 1,
          year: year,
          otherMonth: true,
          selected: false,
          today: false
        });
      }
      
      return days;
    }
  },
  methods: {
    toggle(which) {
      this[`open${which}`] = !this[`open${which}`]
    },
    selectOption(which, value) {
      this[`selected${which}`] = value
      this[`open${which}`] = false
    },
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
    },
    clearDate() {
      this.selectedDate = '';
      this.showDatePicker = false;
    },
    selectDate(day) {
      if (!day.otherMonth) {
        const date = new Date(day.year, day.month, day.date);
        this.selectedDate = this.formatDate(date);
        this.showDatePicker = false;
      }
    },
    formatDate(date) {
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      return `${month}-${day}-${year}`;
    },
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    },
    previousYear() {
      this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), 1);
    },
    nextYear() {
      this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), 1);
    },
    goToContact() {
      this.$router.push('/contact');
    }
  },
  mounted() {
    // 点击外部关闭日期选择器
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.date-picker-wrapper')) {
        this.showDatePicker = false;
      }
    });
  }
}
</script>

<style scoped>
.zhuce-page {
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
}

/* 头部区域 */
.header-section {
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.header-content {
  position: relative;
  z-index: 2;
  padding: 0 40px;
  width: 100%;
}

.header-title {
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.1;
}

/* 主要内容区域 */
.main-content {
  flex: 1;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: flex-start; /* 顶部对齐 */
  padding: 10px 40px 40px 40px; /* 恢复顶部内边距 */
  gap: 40px;
  background: white;
}

/* 侧边栏容器 */
.sidebar-container {
  position: sticky;
  top: 0; /* 粘在页面顶部 */
  align-self: flex-start;
}

/* 侧边栏卡片 */
.sidebar {
  width: 400px;
  background: white;
  border-radius: 20px;
  border: 1px solid black; /* 添加黑色边框 */
  padding: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  margin-top: 20px; /* 卡片上方的间距 */
}

/* 注册步骤 */
.register-steps {
  flex: 1;
  margin-bottom: 30px;
}

.steps-title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 30px 0;
}

.steps-list {
  display: flex;
  flex-direction: column;
}

.step-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.step-item.active {
  background: #fff3e0;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-item.active .step-number {
  background: #ff6b35;
  color: white;
}

.step-item:not(.active) .step-number {
  background: #e0e0e0;
  color: #999;
}

.step-text {
  font-size: 16px;
  font-weight: 500;
}

.step-item.active .step-text {
  color: #ff6b35;
}

.step-item:not(.active) .step-text {
  color: #999;
}

/* 帮助部分 */
.help-section {
  position: relative;
  background: #f4f2f0;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.help-section:hover {
  background: #ebe8e5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.help-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.contact-btn {
  background: #ff6b35;
  color: white;
  border: none;
  height: 44px;
  width: 250px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.contact-btn:hover {
  background: #e55a2b;
}

.help-image {
  position: absolute;
  right: -10px;
  bottom: 18px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 20px; /* 改为圆角矩形 */
  z-index: 1;
}

.help-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 右侧内容区域 */
.content-area {
  width: 800px; /* 设置固定宽度 */
  background: white;
  border-radius: 20px;
  border: 1px solid black; /* 添加黑色边框 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 40px;
  position: relative;
}

.content-area::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.02) 50%, transparent 51%),
    linear-gradient(-45deg, transparent 49%, rgba(0,0,0,0.02) 50%, transparent 51%);
  background-size: 20px 20px;
  pointer-events: none;
}

/* 表单样式 */
.form-container {
  position: relative;
  z-index: 2;
}

.form-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 30px 0;
  text-align: center;
}

.form-section {
  margin-bottom: 30px;
}

.place-of-birth {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.contact-info {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.required {
  color: #e74c3c;
  font-weight: bold;
}

.info-icon {
  color: #666;
  font-size: 12px;
  margin-left: 4px;
  cursor: help;
}

.form-input,
.form-select {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.form-input:hover,
.form-select:hover {
  border-color: #ff6b35;
  box-shadow: 0 2px 6px rgba(255, 107, 53, 0.1);
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #ff6b35;
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.15);
  transform: translateY(-1px);
}

.form-input::placeholder {
  color: #999;
  opacity: 1;
}

/* 日期选择器样式 */
.date-picker-wrapper {
  position: relative;
}

.date-input-container {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.date-input {
  padding-left: 40px; /* 为左侧图标留出空间 */
  padding-right: 40px; /* 为右侧清除按钮留出空间 */
  cursor: pointer;
}

.calendar-icon {
  position: absolute;
  left: 12px;
  font-size: 16px;
  color: #666;
  pointer-events: none;
  z-index: 2;
}

.clear-icon {
  position: absolute;
  right: 12px;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f0f0f0;
  z-index: 2;
}

.clear-icon:hover {
  background: #e0e0e0;
  color: #666;
}

.date-picker-popup {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 4px;
  padding: 16px;
  min-width: 280px;
}

.date-picker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.nav-btn {
  background: none;
  border: none;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-btn:hover {
  background: #f0f0f0;
}

.current-month {
  font-weight: 600;
  font-size: 16px;
  color: #333;
}

.date-picker-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
}

.weekday {
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #666;
  padding: 8px 4px;
}

.date-picker-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.calendar-day {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  color: #333;
}

.calendar-day:hover {
  background: #f0f0f0;
}

.calendar-day.other-month {
  color: #ccc;
}

.calendar-day.selected {
  background: #ff6b35;
  color: white;
}

.calendar-day.today {
  font-weight: 600;
  color: #ff6b35;
}

.calendar-day.today.selected {
  color: white;
}

/* 带按钮的输入框样式 */
.input-with-button {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  overflow: hidden;
}

.input-with-button .form-input {
  flex: 1;
  margin-bottom: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.input-with-button .form-input:focus {
  outline: none;
  box-shadow: none;
}

.send-code-btn {
  padding: 8px 16px;
  background: white;
  color: #ff6b35;
  border: none;
  border-radius: 0;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-code-btn:hover {
  background: #f8f9fa;
  color: #ff6b35;
}

.send-code-btn.disabled {
  color: #999;
  cursor: not-allowed;
}

.send-code-btn.disabled:hover {
  background: white;
  color: #999;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ff6b35' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 16px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 48px;
  cursor: pointer;
}

/* 自定义下拉样式，与 Inquiry.vue 保持一致 */
.custom-select { position: relative; }
.cs-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
}
.cs-trigger.open { border-color: #ff6b35; box-shadow: 0 0 0 3px rgba(255,107,53,.15); }
.cs-text { color: #333; }
.cs-caret { color: #333; }
.cs-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0; right: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 10px 24px rgba(0,0,0,.12);
  padding: 8px 0;
  z-index: 40;
}
.cs-option { padding: 10px 14px; cursor: pointer; }
.cs-option:hover { background: #f7f7f7; }

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.btn-cancel {
  padding: 12px 24px;
  background: white;
  color: #ff6b35;
  border: 1px solid #ff6b35;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cancel:hover {
  background: #ff6b35;
  color: white;
}

.btn-next {
  padding: 12px 24px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-next:hover {
  background: #e55a2b;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
    justify-content: center; /* 保持居中 */
    align-items: center; /* 垂直居中 */
    padding: 10px 20px 20px 20px; /* 减少顶部内边距 */
    gap: 20px;
  }
  
  .sidebar-container {
    position: static; /* 在小屏幕上取消粘性定位 */
  }
  
  .sidebar {
    width: 100%;
    max-width: 400px; /* 限制最大宽度 */
    margin-top: 0; /* 取消顶部间距 */
  }
  
  .content-area {
    width: 100%; /* 在小屏幕上占满宽度 */
    max-width: 800px; /* 限制最大宽度 */
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 20px;
  }
  
  .header-title {
    font-size: 36px;
  }
  
  .sidebar {
    padding: 30px;
  }
  
  .steps-title,
  .help-title {
    font-size: 24px;
  }
  
  .help-image {
    width: 80px;
    height: 80px;
    right: -10px;
    bottom: -10px;
  }
}

@media (max-width: 480px) {
  .header-section {
    height: 80px;
  }
  
  .header-content {
    padding: 0 16px;
  }
  
  .header-title {
    font-size: 28px;
  }
  
  .main-content {
    padding: 8px 16px 16px 16px; /* 减少顶部内边距 */
  }
  
  .sidebar {
    padding: 20px;
  }
  
  .step-item {
    padding: 12px 15px;
  }
  
  .step-text {
    font-size: 14px;
  }
  
  .help-image {
    width: 60px;
    height: 60px;
  }
  
  /* 表单响应式设计 */
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .btn-cancel,
  .btn-next {
    width: 100%;
  }
}
</style>

