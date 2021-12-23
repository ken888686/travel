<template>
  <div class="bg-cover">
    <div class="container py-5">
      <h1 class="text-light fw-bold">
        景點列表
      </h1>
      <ul class="list-unstyled row my-0">
        <li class="col-3 d-grid">
          <button
            type="button"
            class="btn btn-outline-primary text-start"
          >
            選擇地區
          </button>
        </li>
        <li class="col-3 d-grid">
          <button
            type="button"
            class="btn btn-outline-primary text-start"
          >
            選擇參觀日期
          </button>
        </li>
        <li class="col-auto ms-auto pe-0">
          <button
            type="button"
            class="btn btn-primary text-start d-flex justify-content-between align-items-center"
          >
            排序
            <img
              class="ms-2"
              src="@/assets/icons/sort.svg"
              alt="sort"
            >
          </button>
        </li>
        <li class="col-auto pe-0">
          <button
            type="button"
            class="btn btn-primary text-start d-flex justify-content-between align-items-center"
          >
            篩選
            <img
              class="ms-2"
              src="@/assets/icons/filter.svg"
              alt="sort"
            >
          </button>
        </li>
        <li class="col-auto pe-0">
          <button
            type="button"
            class="btn btn-primary h-100"
          >
            <img
              src="@/assets/icons/list.svg"
              alt="sort"
            >
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.bg-cover {
  background-image: url('https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80');
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #616161;
    mix-blend-mode: multiply;
    opacity: 0.4;
    backdrop-filter: blur(21px);
  }
}

// .filter {
//   background: #616161;
//   mix-blend-mode: multiply;
//   opacity: 0.4;
//   backdrop-filter: blur(21px);
// }
</style>
