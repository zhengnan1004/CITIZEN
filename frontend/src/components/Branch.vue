<template>
  <section class="nid-page">
    <div class="base-page-banner">
      <div class="banner-inner">
        <div class="left-copy">
          <h2 class="title">NID BRANCH</h2>
        </div>
        <div class="right-visual">
          <img src="/MAPS.png" alt="NID Branch page banner" />
        </div>
      </div>
    </div>

    <div class="region-selector">
      <h3 class="selector-title">Select your region the nearest NID Branch</h3>
      <div class="selector-container">
        <select class="region-dropdown">
          <option value="all">All</option>
          <option value="Highlands">Highlands</option>
          <option value="Momase">Momase</option>
          <option value="New Guinea Islands">New Guinea Islands</option>
          <option value="Southern">Southern</option>
        </select>
      </div>
    </div>

    <div class="branch-cards">
      <div class="card">
        <img src="/logo1.svg" alt="Location" class="card-corner-icon" />
        <h4 class="card-title">EAST SEPIK CIVIL</h4>
        <div class="card-info">
          <div class="info-item">
            <img src="/logo1.svg" alt="Location" class="info-icon" />
            <span class="info-text">Kreer Height, Wewak</span>
          </div>
          <div class="info-item">
            <img src="/logo2.svg" alt="Time" class="info-icon" />
            <span class="info-text">Monday to Friday</span>
            <span class="info-text">9am to 8pm</span>
          </div>
          <div class="info-item">
            <img src="/logo3.svg" alt="Phone" class="info-icon" />
            <span class="info-text">+675 7813 6429</span>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="/logo1.svg" alt="Location" class="card-corner-icon" />
        <h4 class="card-title">SIMBU CIVIL</h4>
        <div class="card-info">
          <div class="info-item">
            <img src="/logo1.svg" alt="Location" class="info-icon" />
            <span class="info-text">Kundiawa</span>
          </div>
          <div class="info-item">
            <img src="/logo2.svg" alt="Time" class="info-icon" />
            <span class="info-text">Monday to Friday</span>
            <span class="info-text">9am to 4pm</span>
          </div>
          <div class="info-item">
            <img src="/logo3.svg" alt="Phone" class="info-icon" />
            <span class="info-text">+675 7248 9361</span>
          </div>
        </div>
      </div>

      <div class="card expandable-card">
        <img src="/logo1.svg" alt="Location" class="card-corner-icon" />
        <h4 class="card-title">MAPRIK CIVIL</h4>
        <div class="card-info">
          <div class="info-item">
            <img src="/logo1.svg" alt="Location" class="info-icon" />
            <span class="info-text">Opposite Police Station Maprik</span>
          </div>
          <div class="info-item expandable-time">
            <img src="/logo2.svg" alt="Time" class="info-icon" />
            <div class="time-content">
              <div class="time-main">
                <span class="info-text">Monday to Friday</span>
                <span class="info-text">8:30am to 5:30pm</span>
                <img src="/logo2.svg" alt="Expand" class="expand-icon" />
              </div>
              <div class="time-expanded">
                <span class="info-text">Monday to Friday 9:30am to 10:30pm</span>
                <span class="info-text">Monday to Friday 9:30am to 10:30pm</span>
                <span class="info-text">Monday to Friday 9:30am to 10:30pm</span>
              </div>
            </div>
          </div>
          <div class="info-item">
            <img src="/logo3.svg" alt="Phone" class="info-icon" />
            <span class="info-text">+675 7392 8154</span>
          </div>
        </div>
      </div>

      <div class="card expandable-card">
        <img src="/logo1.svg" alt="Location" class="card-corner-icon" />
        <h4 class="card-title">Test</h4>
        <div class="card-info">
          <div class="info-item">
            <img src="/logo1.svg" alt="Location" class="info-icon" />
            <span class="info-text">test</span>
          </div>
          <div class="info-item expandable-time">
            <img src="/logo2.svg" alt="Time" class="info-icon" />
            <div class="time-content">
              <div class="time-main">
                <span class="info-text">Monday</span>
                <span class="info-text">9:00 am to 4:00 pm</span>
                <img src="/logo2.svg" alt="Expand" class="expand-icon" />
              </div>
              <div class="time-expanded">
                <span class="info-text">Monday to Friday 9:30am to 10:30pm</span>
                <span class="info-text">Monday to Friday 9:30am to 10:30pm</span>
                <span class="info-text">Monday to Friday 9:30am to 10:30pm</span>
              </div>
            </div>
          </div>
          <div class="info-item">
            <img src="/logo3.svg" alt="Phone" class="info-icon" />
            <span class="info-text">+675 8876 0090</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Branch'
}
</script>

<style scoped>
.nid-page {
  background: #ffffff;
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

.region-selector {
  background: #ffffff;
  padding: 60px 20px 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.selector-title {
  font-size: 30px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.2;
}

.selector-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 0;
}

.region-dropdown {
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;
  background: #ffffff;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  min-width: 200px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ee6425' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}

.region-dropdown:hover {
  background-color: #f8f8f8;
}

.region-dropdown:focus {
  background-color: #f8f8f8;
}

.branch-cards {
  background: #ffffff;
  padding: 10px 20px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
}

.card {
  background: #f8f7f6;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  background: #ee6425;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(238, 100, 37, 0.2);
}

.card:hover .card-title,
.card:hover .info-text {
  color: #ffffff;
}

.card:hover .info-icon,
.card:hover .card-corner-icon {
  filter: brightness(0) invert(1);
}

.card-corner-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 80px;
  height: 80px;
  opacity: 0.3;
  transition: all 0.3s ease;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.info-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-text {
  font-size: 16px;
  color: #4a4a4a;
  line-height: 1.4;
  display: block;
}

.expandable-time {
  cursor: pointer;
}

.time-content {
  flex: 1;
}

.time-main {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.expand-icon {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.expandable-card:hover .expand-icon {
  transform: translateY(-50%) rotate(180deg);
}

.time-expanded {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(74, 74, 74, 0.2);
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, margin-top 0.3s ease, padding-top 0.3s ease;
}

.expandable-card:hover .time-expanded {
  max-height: 200px;
  margin-top: 8px;
  padding-top: 8px;
  border-top-color: rgba(255, 255, 255, 0.3);
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
  
  .branch-cards {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 30px 20px 60px 20px;
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
  
  .region-selector {
    padding: 40px 16px 10px 16px;
  }
  
  .selector-title {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .region-dropdown {
    min-width: 180px;
    font-size: 14px;
    padding: 10px 16px;
    padding-right: 36px;
  }
  
  .branch-cards {
    padding: 10px 16px 40px 16px;
    gap: 16px;
  }
  
  .card {
    padding: 20px;
  }
  
  .card-title {
    font-size: 18px;
    margin-bottom: 16px;
  }
  
  .info-text {
    font-size: 14px;
  }
  
  .info-icon {
    width: 14px;
    height: 14px;
  }
  
  .card-corner-icon {
    width: 24px;
    height: 24px;
    top: 12px;
    right: 12px;
  }
  
  .expand-icon {
    width: 10px;
    height: 10px;
    right: -16px;
  }
}
</style>