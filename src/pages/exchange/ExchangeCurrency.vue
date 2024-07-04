<template>
  <div class="container-lg py-3">
    <h3 class="mulish-semibold text-dark mb-4">Exchange Currency</h3>
    <div class="container shadow p-3 mb-5 bg-body rounded px-2 py-1">
      <div class="row">
        <div class="col p-3">
          <div
            class="d-flex flex-column flex-sm-row bd-highlight justify-content-start gap-3"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="../../assets/icon/calendar.png"
                  class="img-fluid"
                  width="24"
                  height="20"
                  alt="Calendar Today"
                />
              </div>
              <div class="flex-grow-1 ms-3">Date</div>
            </div>
            <div class="bd-highlight">{{ datetoday }}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <div
            class="d-flex flex-column flex-sm-row bd-highlight justify-content-start"
          >
            <div class="dropdown">
              <button
                class="btn dropdown-toggle border py-2 px-5"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><h6 class="dropdown-header">Select currency</h6></li>
                <li>
                  <button class="dropdown-item" type="button">Action</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn dropdown-toggle border py-2 px-5"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><h6 class="dropdown-header">Select currency</h6></li>
                <li>
                  <button class="dropdown-item" type="button">Action</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">Row 3</div>
      </div>
      <div class="row">
        <div class="col p-3">Row 4</div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from "dateformat";

export default {
  setup() {
    const now = new Date();
    const datetoday = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    return { datetoday };
  },
};
</script>

<style scoped></style>
