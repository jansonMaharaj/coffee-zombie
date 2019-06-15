<template>
  <div>
    <v-container fluid fill height>
      <v-layout align-center justify-center>
        <v-flex xs10 sm5 md5 dark>
          <v-card ref="form">
            <v-card-text class="text-sm-center">Top Up</v-card-text>

            <v-layout justify-center>
              <v-avatar :tile="tile" :size="150" color="grey lighten-4">
                <img  src="https://i.stack.imgur.com/l60Hf.png" alt="avatar">
              </v-avatar>
            </v-layout>

            <v-layout justify-center>
              <p>Mr Robertson</p>
            </v-layout>

            <v-card-text>
              <v-autocomplete
                ref="bank"
                v-model="bank"
                :items="banks"
                label="Bank"
                placeholder="Select..."
              ></v-autocomplete>

              <v-text-field
                ref="bankDetails"
                v-model="bankDetails"
                label="Bank Details"
                placeholder="12-3456-1234567-00"
              ></v-text-field>

              <v-text-field
                ref="currentBalance"
                v-model="currentBalance"
                label="Current Balance"
                placeholder="$120.00"
              ></v-text-field>

              <v-text-field
                ref="topUpAmount"
                v-model="topUpAmount"
                label="Top Up Amount"
                placeholder="$10.00"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn flat @click="resetForm" to="/User">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                  <template v-slot:activator="{ on }">
                    <v-btn icon class="my-0" @click="resetForm" v-on="on">
                      <v-icon>refresh</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
              <v-btn color="primary" flat to="/TransferConfirm">Top-up</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    banks: ["ANZ", "BNZ", "Kiwi Bank"],
    errorMessages: "",
    bankDetails: null,
    currentBalance: null,
    topUpAmount: null
  }),

  computed: {
    form() {
      return {
        bankDetails: this.bankDetails,
        currentBalance: this.currentBalance,
        topUpAmount: this.topUpAmount,
        bank: this.bank
      };
    }
  },

  watch: {
    name() {
      this.errorMessages = "";
    }
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? "Hey! I'm required" : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
    showAlert() {
      const options = { title: "Top Up", size: "sm" };
      this.$dialogs.alert("Great Your Account has been TOPPED UP!!", options).then(res => {
        console.log(res); // {ok: true|false|undefined}
      });
    }
  }
};
</script>