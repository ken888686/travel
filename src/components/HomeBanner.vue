<template>
  <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-light bg-cover">
    <div class="col-md-5 py-lg-5 mx-auto my-5">
      <h1 class="text-white">
        開始實現你的夢想旅程
      </h1>
      <form class="d-flex input-group-custom my-3">
        <input
          type="text"
          class="form-control"
          placeholder="想要去哪？"
          aria-label="想要去哪？"
          aria-describedby="basic-addon1"
        >
        <button
          class="btn input-group-icon"
          type="submit"
        >
          <img
            src="@/assets/icons/search.svg"
            alt="search"
            style="height: 14px; width: 14px"
          >
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
// const imgUrl = 'https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80';
</script>
<style lang="scss" scoped>
.bg-cover {
  background-image: url('https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
