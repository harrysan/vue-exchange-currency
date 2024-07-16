<template>
  <div class="container-lg py-3">
    <!-- Top Content -->
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
          <div class="d-flex flex-column flex-sm-row justify-content-start">
            <!-- Select 1 -->
            <select
              class="form-select select-curr first-item px-2 py-2"
              aria-label="Select Currency"
              v-model="value1"
              @change="onChange"
            >
              <base-option :currencies="currencies"></base-option>
            </select>
            <!-- Select 2 -->
            <select
              class="form-select select-curr px-2 py-2"
              aria-label="Select Currency"
              v-model="value2"
              @change="onChange"
            >
              <base-option :currencies="currencies"></base-option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <div
            class="d-flex flex-column flex-sm-row justify-content-start align-self-center"
          >
            <input
              type="number"
              v-model="result1"
              @input="onChangeResult1"
              class="px-2 py-2 border rounded result"
            />
            <div class="exchange-icon">
              <img
                src="../../assets/icon/exchange.png"
                class="img-fluid"
                width="36"
                height="36"
                alt="Exchange Icon"
              />
            </div>
            <div class="px-2 py-2 border rounded result">
              <div class="d-flex justify-content-between">
                <div>{{ result2 }}</div>
                <div>
                  <span @click="copyText('result2', result2)"
                    ><i
                      class="fa fa-clipboard link-icon"
                      :class="{ selClass: isCopied2 }"
                      aria-hidden="true"
                    ></i
                    ><span v-if="isCopied2">copied!</span></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <div class="d-flex flex-column">
            <small class="text-muted"
              >*Exchange rate may change during transaction process.</small
            >
            <small class="text-muted"
              >*Last updated currency {{ dateApi }}.</small
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Content -->
    <h3 class="mulish-semibold text-dark mb-4">Rate Currency</h3>
    <div class="container p-3 mb-5 bg-body rounded px-2 py-1">
      <div class="row">
        <div class="col p-3">
          <div
            class="d-flex gap-2 flex-row align-items-start align-self-center"
          >
            <div>
              <select
                class="form-select select-curr first-item-bottom px-2 py-2"
                aria-label="Select Currency"
                v-model="value3"
                @change="onChange2"
              >
                <base-option :currencies="currencies"></base-option>
              </select>
            </div>

            <base-button>Print</base-button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Rate</th>
                <th scope="col">Name</th>
                <th scope="col">1 {{ value3 }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="curr in currencies" :key="curr.code">
                <td>{{ value3 }}/{{ curr.code }}</td>
                <td>{{ curr.name }}</td>
                <td>{{ curr.rate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from "dateformat";
import { useStore } from "vuex";
import { reactive, ref } from "vue";
import BaseOption from "../../components/ui/BaseOption.vue";

export default {
  components: { BaseOption },
  setup() {
    const store = useStore();
    const currencies = store.getters.currencies;
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const result1 = ref("");
    const result2 = ref("");
    const dateApi = ref("");
    const isCopied1 = ref(false);
    const isCopied2 = ref(false);
    const returnData = reactive({ date: "", resultConvert: "" });

    const now = new Date();
    const datetoday = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    async function makeRequest() {
      const value1LowerCase = value1.value.toLowerCase();
      const value2LowerCase = value2.value.toLowerCase();

      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${value1LowerCase}.json`,
        {
          method: "GET",
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(console.log("Failed to fetch requests."));
        throw error;
      }

      const responseval1 = responseData[value1LowerCase];
      (returnData.date = responseData.date),
        (returnData.resultConvert = responseval1[value2LowerCase]);

      console.log(returnData);

      return returnData;
    }

    async function onChange(event) {
      console.log(event.target.value);

      if (result1.value == 0) {
        result1.value = 1;
      }

      if (value2.value) {
        await makeRequest();

        dateApi.value = returnData.date;
        result2.value = result1.value * returnData.resultConvert;
      }
    }

    async function onChange2(e) {
      console.log(e.target.value);

      const listValue = e.target.value.toLowerCase();
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${listValue}.json`,
        {
          method: "GET",
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(console.log("Failed to fetch requests."));
        throw error;
      }
      console.log(responseData);

      const responseval3 = responseData[listValue];
      console.log(responseval3);

      for (const val in currencies) {
        console.log(currencies[val]);
        currencies[val].rate = responseval3[currencies[val].code.toLowerCase()];
      }
    }

    function onChangeResult1(e) {
      console.log(e.target.value);

      if (value2.value) {
        result2.value = e.target.value * returnData.resultConvert;
      } else {
        alert("Please select second currency!");
        result1.value = 1;
      }
    }

    function copyText(params1, params2) {
      console.log(params1, params2);
      if (params1 === "result1") {
        isCopied1.value = true;
        setTimeout(() => {
          isCopied1.value = false;
        }, 3000);
      } else if (params1 === "result2") {
        isCopied2.value = true;
        setTimeout(() => {
          isCopied2.value = false;
        }, 3000);
      }

      navigator.clipboard.writeText(params2).catch((err) => {
        console.error("Could not copy text: ", err);
      });
    }

    return {
      value1,
      value2,
      value3,
      result1,
      result2,
      dateApi,
      onChange,
      onChange2,
      onChangeResult1,
      datetoday,
      currencies,
      isCopied1,
      isCopied2,
      copyText,
    };
  },
};
</script>

<style scoped>
/* small screen */
@media (max-width: 575.98px) {
  .first-item,
  .first-item-bottom {
    margin-bottom: 1rem;
  }
  .exchange-icon {
    transform: rotate(-0.25turn);
    align-self: center;
    margin-right: 5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

@media (min-width: 576px) {
  .first-item {
    margin-right: 2rem;
  }
  .exchange-icon {
    margin-left: 1.5rem;
    margin-right: 1.3rem;
  }
  .first-item-bottom {
    margin-right: 3rem;
  }
}

/* large screen */
@media (min-width: 1000px) {
  .first-item {
    margin-right: 9rem;
  }
  .first-item-bottom {
    margin-right: 1rem;
  }
  .exchange-icon {
    margin-left: 3.5rem;
    margin-right: 3.3rem;
  }
  .table {
    width: 800px;
  }
}

.select-curr {
  width: 300px;
  max-height: 300px;
  overflow-y: scroll;
  white-space: normal;
}

.result {
  width: 300px;
  white-space: normal;
}

.selClass {
  border: solid #613eea 1px;
  visibility: hidden;
  /* background-color: white; */
}
</style>
