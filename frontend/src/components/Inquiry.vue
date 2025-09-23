<template>
  <section class="nid-page">
    <!-- 顶部返回按钮（参考 Question1.vue） -->
    <div class="top-bar">
      <div class="back-section">
        <router-link to="/contact" class="back-link">
          <span class="back-icon">‹</span>
          Back
        </router-link>
      </div>
    </div>

    <!-- 表单 -->
    <div class="form-wrapper">
      <form class="inquiry-form" @submit.prevent="onSubmit">
        <h2 class="page-title">Contact Us</h2>
        <!-- 第一行：Inquiry Type -->
        <div class="form-row">
          <label class="form-label" for="inquiryType">Inquiry Type <span class="req">*</span></label>
          <div class="field">
            <div class="custom-select" @keydown.stop>
              <button type="button" class="cs-trigger" :class="{ open: openType }" @click="openType = !openType">
                <span class="cs-text" :class="{ placeholder: !form.inquiryType }">{{ typeLabel }}</span>
                <span class="cs-caret" aria-hidden>▾</span>
              </button>
              <div v-if="openType" class="cs-menu" @click.outside="openType = false">
                <div class="cs-option" v-for="opt in inquiryTypes" :key="opt.value" @click="selectType(opt.value)">{{ opt.label }}</div>
              </div>
            </div>
          </div>
          <p v-if="errors.inquiryType" class="error">{{ errors.inquiryType }}</p>
        </div>

        <!-- 第二行：Inquiry Category -->
        <div class="form-row">
          <label class="form-label" for="inquiryCategory">Inquiry Category <span class="req">*</span></label>
          <div class="field">
            <div class="custom-select" :class="{ disabled: !availableCategories.length }">
              <button type="button" class="cs-trigger" :disabled="!availableCategories.length" :class="{ open: openCategory }" @click="toggleCategory">
                <span class="cs-text" :class="{ placeholder: !form.inquiryCategory }">{{ categoryLabel }}</span>
                <span class="cs-caret" aria-hidden>▾</span>
              </button>
              <div v-if="openCategory" class="cs-menu">
                <div class="cs-option" v-for="opt in availableCategories" :key="opt" @click="selectCategory(opt)">{{ opt }}</div>
              </div>
            </div>
          </div>
          <p v-if="errors.inquiryCategory" class="error">{{ errors.inquiryCategory }}</p>
        </div>

        <!-- 姓名三项 -->
        <div class="form-row">
          <label class="form-label" for="firstName">First Name <span class="req">*</span></label>
          <div class="field"><input id="firstName" v-model.trim="form.firstName" type="text" placeholder="" required /></div>
          <p v-if="errors.firstName" class="error">{{ errors.firstName }}</p>
        </div>

        <div class="form-row">
          <label class="form-label" for="middleName">Middle Name</label>
          <div class="field"><input id="middleName" v-model.trim="form.middleName" type="text" placeholder="" /></div>
        </div>

        <div class="form-row">
          <label class="form-label" for="lastName">Last Name <span class="req">*</span></label>
          <div class="field"><input id="lastName" v-model.trim="form.lastName" type="text" placeholder="" required /></div>
          <p v-if="errors.lastName" class="error">{{ errors.lastName }}</p>
        </div>

        <!-- NID / Mobile / Email -->
        <div class="form-row">
          <label class="form-label" for="nid">NID</label>
          <div class="field"><input id="nid" v-model.trim="form.nid" type="text" inputmode="numeric" placeholder="" /></div>
        </div>

        <div class="form-row">
          <label class="form-label" for="mobile">Mobile No. <span class="req">*</span></label>
          <div class="field"><input id="mobile" v-model.trim="form.mobile" type="tel" inputmode="tel" placeholder="" required /></div>
          <p v-if="errors.mobile" class="error">{{ errors.mobile }}</p>
        </div>

        <div class="form-row">
          <label class="form-label" for="email">Email <span class="req">*</span></label>
          <div class="field"><input id="email" v-model.trim="form.email" type="email" placeholder="" required /></div>
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>

        <!-- 主题与消息 -->
        <div class="form-row">
          <label class="form-label" for="subject">Subject</label>
          <div class="field"><input id="subject" v-model.trim="form.subject" type="text" /></div>
        </div>

        <div class="form-row">
          <label class="form-label" for="message">Message</label>
          <div class="field"><textarea id="message" v-model.trim="form.message" rows="6" placeholder=""></textarea></div>
        </div>

        <!-- 附件 -->
        <div class="form-row upload-section">
          <label class="form-label" for="fileUpload">Upload Screenshot</label>
          <div class="field">
            <input ref="fileInput" id="fileUpload" type="file" class="hidden-file" @change="onFileChange" />
            <div class="upload-box" @click="triggerFile" @dragover.prevent @drop.prevent="onDrop">
              <span class="plus">+</span>
            </div>
            <div v-if="fileName" class="file-name">{{ fileName }}</div>
          </div>
        </div>

        <!-- 提交按钮 -->
        <div class="actions">
          <button class="btn-outline" type="button" @click="resetForm">Clear</button>
          <button class="btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Inquiry',
  data() {
    return {
      inquiryTypes: [
        { value: 'application', label: 'Application' },
        { value: 'account', label: 'Account' },
        { value: 'technical', label: 'Technical' },
        { value: 'other', label: 'Other' }
      ],
      categoriesMap: {
        application: ['Status Update', 'Document Submission', 'Appointment'],
        account: ['Login Problem', 'Password Reset', 'Profile Update'],
        technical: ['Website Bug', 'Performance', 'Accessibility'],
        other: ['General Question', 'Feedback']
      },
      form: {
        inquiryType: '',
        inquiryCategory: '',
        firstName: '',
        middleName: '',
        lastName: '',
        nid: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      },
      fileName: '',
      errors: {},
      openType: false,
      openCategory: false
    }
  },
  computed: {
    availableCategories() {
      const type = this.form.inquiryType
      return type ? this.categoriesMap[type] || [] : []
    },
    typeLabel() {
      const found = this.inquiryTypes.find(i => i.value === this.form.inquiryType)
      return found ? found.label : 'Select inquiry type'
    },
    categoryLabel() {
      return this.form.inquiryCategory || 'Select inquiry category'
    }
  },
  methods: {
    onTypeChange() {
      // 切换类型时清空分类
      this.form.inquiryCategory = ''
    },
    selectType(value) {
      this.form.inquiryType = value
      this.openType = false
      this.onTypeChange()
    },
    toggleCategory() {
      if (!this.availableCategories.length) return
      this.openCategory = !this.openCategory
    },
    selectCategory(value) {
      this.form.inquiryCategory = value
      this.openCategory = false
    },
    onFileChange(e) {
      const file = e.target.files && e.target.files[0]
      this.fileName = file ? file.name : ''
    },
    triggerFile() {
      this.$refs.fileInput && this.$refs.fileInput.click()
    },
    onDrop(e) {
      const file = e.dataTransfer.files && e.dataTransfer.files[0]
      if (file) {
        this.fileName = file.name
      }
    },
    validate() {
      const errs = {}
      if (!this.form.inquiryType) errs.inquiryType = 'Please select inquiry type'
      if (!this.form.inquiryCategory) errs.inquiryCategory = 'Please select inquiry category'
      if (!this.form.firstName) errs.firstName = 'First name is required'
      if (!this.form.lastName) errs.lastName = 'Last name is required'
      if (!this.form.mobile) errs.mobile = 'Mobile no. is required'
      if (!this.form.email) errs.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) errs.email = 'Invalid email'
      this.errors = errs
      return Object.keys(errs).length === 0
    },
    resetForm() {
      this.form = {
        inquiryType: '',
        inquiryCategory: '',
        firstName: '',
        middleName: '',
        lastName: '',
        nid: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      }
      this.errors = {}
      this.fileName = ''
      const input = document.getElementById('file')
      if (input) input.value = ''
    },
    onSubmit() {
      if (!this.validate()) return
      const payload = { ...this.form, fileName: this.fileName }
      console.log('Submit inquiry:', payload)
      alert('Your inquiry has been submitted. We will contact you soon.')
      this.resetForm()
    }
  }
}
</script>

<style scoped>
.nid-page { background: #ffffff; }

/* 表单容器 */
.form-wrapper { padding: 40px 16px 80px 16px; }
.inquiry-form { max-width: 900px; margin: 0 auto; }

/* 顶部返回按钮样式（复用 Question1 风格） */
.top-bar {
  max-width: 900px;
  margin: 0 auto 12px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.back-section { margin-bottom: 0; }
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
.back-link:hover { color: #e55a2b; }
.back-icon { font-size: 20px; font-weight: bold; }

.page-title {
  margin: 0 0 14px 0;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% 0.28em;
  background-position: 0 78%;
}

.form-row { margin-bottom: 16px; }
.form-label { display: block; font-weight: 600; margin-bottom: 8px; color: #333; }
.req { color: #ff8c00; }

.field select,
.field input,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  transition: border-color .15s ease, box-shadow .15s ease;
  background: #fff;
}

/* 占位文本透明（仅当未选择时） */
.field select.is-empty { color: transparent; }
.field select.is-empty option { color: #333; }

/* 自定义下拉：触发器 */
.custom-select { position: relative; }
.cs-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
}
.cs-trigger.open { border-color: #ff8c00; box-shadow: 0 0 0 3px rgba(255,140,0,.15); }
.cs-text.placeholder { color: #999; }
.cs-caret { color: #333; }

/* 弹层菜单 */
.cs-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 10px 24px rgba(0,0,0,.12);
  padding: 8px 0;
  z-index: 20;
}
.cs-option { padding: 10px 14px; cursor: pointer; }
.cs-option:hover { background: #f7f7f7; }
.custom-select.disabled .cs-trigger { background: #f5f5f5; color: #aaa; cursor: not-allowed; }

.field select:focus,
.field input:focus,
.field textarea:focus { border-color: #ff8c00; box-shadow: 0 0 0 3px rgba(255,140,0,.15); }

.file-name { margin-top: 8px; color: #555; font-size: 13px; }

/* 自定义上传框 */
.upload-section .hidden-file { display: none; }
.upload-box {
  width: 96px;
  height: 96px;
  border: 2px solid #ff8c00;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ff8c00;
  cursor: pointer;
  background: #fff;
  transition: box-shadow .15s ease, transform .05s ease;
}
.upload-box:hover { box-shadow: 0 4px 12px rgba(255,140,0,.2); }
.upload-box:active { transform: scale(0.98); }
.upload-box .plus { font-size: 28px; line-height: 1; }

.error { color: #d93025; font-size: 13px; margin-top: 6px; }

.actions { display: flex; gap: 12px; justify-content: center; margin-top: 24px; }
.btn-outline,
.btn-primary {
  height: 44px;
  padding: 0 20px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid transparent;
}
.btn-outline { background: #fff; color: #ea601b; border-color: #ea601b; }
.btn-outline:hover { box-shadow: 0 6px 16px rgba(234,96,27,.15); }
.btn-primary { background: #ff8c00; color: #fff; border-color: #ff8c00; }
.btn-primary:hover { box-shadow: 0 6px 16px rgba(255,140,0,.3); }

</style>


