<template>
  <v-container style="color: white">
    <v-row>
      <v-col>
        <v-row>
          <v-col class="text-center text-h5"> Gem Given </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row class="text-h6">
              <v-col class="text-center"> Gem Purchase </v-col>
            </v-row>
            <v-row align="center">
              <v-col>
                <v-text-field
                  v-model.number="gemPurchaseValue"
                  hide-details
                  solo
                  flat
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="gemPurchase" width="100%">Gem Purchase</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="text-h6">
              <v-col class="text-center"> Prize Won</v-col>
            </v-row>
            <v-row align="center">
              <v-col>
                <v-text-field
                  v-model.number="gemPricevalue"
                  hide-details
                  solo
                  flat
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="gemDistribute" width="100%">Distribute</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="text-h6">
              <v-col class="text-center"> Admin add </v-col>
            </v-row>
            <v-row align="center">
              <v-col>
                <v-text-field
                  v-model.number="adminAddValue"
                  hide-details
                  solo
                  flat
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="gemAdd" width="100%">Add</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row align="center">
              <v-col> Total Gems in the market </v-col>
              <v-col>{{ gemData && gemData.totalGemsInMarket }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col class="text-center text-h5"> Gem Destroyed </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row class="text-h6">
              <v-col class="text-center"> Gem Payment </v-col>
            </v-row>
            <v-row align="center">
              <v-col>
                <v-text-field
                  v-model.number="gemPaymentValue"
                  hide-details
                  solo
                  flat
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="gemPayment" width="100%">Pay</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="text-h6">
              <v-col class="text-center"> Gift</v-col>
            </v-row>
            <v-row align="center">
              <v-col>
                <v-text-field
                  v-model.number="gemGiftValue"
                  hide-details
                  solo
                  flat
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="gemGift" width="100%">Gift</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="text-h6">
              <v-col class="text-center"> Admin delete </v-col>
            </v-row>
            <v-row align="center">
              <v-col>
                <v-text-field
                  v-model.number="adminRemoveValue"
                  hide-details
                  solo
                  flat
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="gemRemove" width="100%">Delete</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row align="center">
              <v-col> Total Gems destroyed </v-col>
              <v-col>{{ gemData && gemData.totalGemsDestroyed }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-row align="center">
          <v-col> Total Transaction </v-col>
          <v-col>{{ gemData && gemData.allTransactions }}</v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row align="center">
          <v-col> Credit Transaction </v-col>
          <v-col>{{ gemData && gemData.creditTransactions }}</v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row align="center">
          <v-col> Debit Transaction </v-col>
          <v-col> {{ gemData && gemData.debitTransactions }} </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row align="center">
          <v-col> User Gem Count </v-col>
          <v-col> {{ gemData && gemData.userGemCount }} </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { getUser } from "../StorageFactory"
export default {
  name: "GemTest",
  data() {
    return {
      gemPurchaseValue: 0,
      gemPricevalue: 0,
      adminAddValue: 0,
      gemPaymentValue: 0,
      gemGiftValue: 0,
      adminRemoveValue: 0,
      gemData: null,
      user: null
    };
  },
  created() {
      this.user = getUser()
  },
  mounted() {
    this.getGemData()
  },
  methods: {
    async getGemData() {
      axios
        .get("/gem/gemdata")
        .then(res => {this.gemData = res.data});
    },
    async gemPurchase() {
      axios
        .post("/gem/add", {
          criteria: {
              user: this.user?._id
          },
          data: {
            gem: this.gemPurchaseValue,
            reason: "gemPurchased",
          },
        })
        .then(() =>  {
          this.gemPurchaseValue = 0 
          this.getGemData()
        });
    },
    async gemDistribute() {
      axios
        .post("/gem/add", {
          criteria: {
              user: this.user?._id
          },
          data: {
            gem: this.gemPricevalue,
            reason: "prize",
          },
        })
        .then(() => {
          this.gemPricevalue = 0
          this.getGemData()
        });
    },
    async gemAdd() {
      axios
        .post("/gem/add", {
          criteria: {
              user: this.user?._id
          },
          data: {
            gem: this.adminAddValue,
            reason: "addedByAdmin",
          },
        })
        .then(() => {
          this.adminAddValue = 0
          this.getGemData()
        });
    },
    async gemPayment() {
      axios
        .post("/gem/remove", {
          criteria: {
              user: this.user?._id
          },
          data: {
            gem: this.gemPaymentValue,
            reason: "gemPaid",
          },
        })
        .then(() => {
          this.gemPaymentValue = 0
          this.getGemData()
        });
    },
    async gemGift() {
      axios
        .post("/gem/remove", {
          criteria: {
              user: this.user?._id
          },
          data: {
            gem: this.gemGiftValue,
            reason: "giftGem",
          },
        })
        .then(() => {
          this.gemGiftValue = 0
          this.getGemData()
        });
    },
    async gemRemove() {
      axios
        .post("/gem/remove", {
          criteria: {
              user: this.user?._id
          },
          data: {
            gem: this.adminRemoveValue,
            reason: "removedByAdmin",
          },
        })
        .then(() => {
          this.adminRemoveValue = 0
          this.getGemData()
        });
    },
  },
};
</script>