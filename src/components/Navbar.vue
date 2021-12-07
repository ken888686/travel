<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex input-group-custom input-group-custom-sm">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn input-group-icon" type="submit">
            <img src="@/assets/icons/search.svg" alt="search" style="height: 14px; width: 14px" />
          </button>
        </form>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/tour" class="btn btn-outline-primary">
              找景點
              <img src="@/assets/icons/tour.svg" alt="找景點" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/food" class="btn btn-outline-primary">
              找餐廳
              <img src="@/assets/icons/food.svg" alt="找餐廳" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hotel" class="btn btn-outline-primary">
              找飯店
              <img src="@/assets/icons/bed.svg" alt="找飯店" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-journey" class="btn btn-outline-primary">我的旅程</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.navbar {
  background-color: var(--bs-gray-200);
}
</style>
