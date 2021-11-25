<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="logo" />
      </a>
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
        <div class="input-group w-50">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-header"
          />
          <button class="btn border" type="button" id="search-header">
            <img src="@/assets/img/search.svg" alt="search" />
          </button>
        </div>

        <form class="container-fluid d-flex justify-content-end">
          <button class="btn btn-outline-primary me-2" type="button">找景點</button>
          <button class="btn btn-outline-primary me-2" type="button">找餐廳</button>
          <button class="btn btn-outline-primary me-2" type="button">找飯店</button>
          <button class="btn btn-outline-primary ms-4" type="button">我的旅程</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script></script>
