<template>
  <nav class="navbar navbar-expand-lg background-bold">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">
        <img
          src="../../assets/logo.png"
          class="img-fluid"
          width="24"
          height="20"
          alt="Web App Logo"
        />
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/exchange"
              class="nav-link active text-white"
              aria-current="page"
              >Exchange Currency Web App</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/feedback"
                class="nav-link active text-white"
                aria-current="page"
                >Feedback</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../assets/icon/globe.svg"
                  class="img-fluid"
                  width="24"
                  height="20"
                  alt="change language"
                />
                Language
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item text-body" href="#"
                    ><img
                      src="../../assets/icon/eng.png"
                      class="img-fluid me-2"
                      width="24"
                      height="20"
                      alt="Web App Logo"
                    />ENG</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-body" href="#"
                    ><img
                      src="../../assets/icon/idn.png"
                      class="img-fluid me-2"
                      width="24"
                      height="20"
                      alt="Web App Logo"
                    />IDN</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.dropdown-menu {
  background: transparent;
}
</style>
