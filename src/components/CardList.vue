<template>
  <div class="container-fluid mt-4">
    <div class="container d-flex justify-content-between align-items-center">
      <h3>{{ title }}</h3>
      <button type="button" class="btn btn-primary">查看更多</button>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <img src="@/assets/images/card-img.png" class="card-img-top" alt="Card" />
          <div class="card-body">
            <h5 class="card-title">新北市歡樂耶誕城</h5>
            <button class="tag">文化活動</button>
            <button class="tag">熱鬧</button>
            <button class="tag">新北板橋</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const title = '熱門打卡景點';
</script>
