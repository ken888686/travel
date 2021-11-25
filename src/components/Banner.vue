<template>
  <div class="banner bg-cover">
    <div
      class="
        input-group input-group-lg
        w-25
        start-50
        top-50
        translate-middle
        justify-content-center
      "
    >
      <h1 class="text-nowrap fw-bold">開始實現你的夢想旅程</h1>
      <input
        type="text"
        class="form-control"
        placeholder="想要去哪？"
        aria-label="想要去哪？"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-outline-light" type="button" id="button-addon2">
        <img src="@/assets/img/search.svg" alt="search" />
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url(https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80);
  height: 686px;
}

.bg-cover {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

h1 {
  color: var(--bs-gray-100);
}
</style>
