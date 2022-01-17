<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name</label>
      <input
        id="name"
        ref="first"
        type="text"
        :class="{ 'error': submitting && invalidName }"
        v-model="user.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <label for="mail">Email</label>
      <input
        id="mail"
        type="text"
        :class="{ 'error': submitting && invalidEmail }"
        v-model="user.email"
        @focus="clearStatus"
      >
      <button type="submit">Add</button>
      <p
        v-if="error && submitting"
        class="error-message"
      >All fields are mandatory</p>
      <p
        v-if="success"
        class="success-message"
      >User successfully added</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      user: {
        name: '',
        email: '',
      }
    }
  },
  computed: {
    invalidName() {
      return this.user.name === '';
    },
    invalidEmail() {
      return this.user.email === '';
    },
  },
  methods: {
    handleSubmit() {
      this.clearStatus();
      this.submitting = true;

      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }

      this.$emit('add:user', this.user);
      this.$refs.first.focus();
      this.user = {
        name: '',
        email: '',
      }
      this.success = true;
      this.error = false;
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  }
};
</script>

<style scoped>
input.error {
  border-color: red;
}
[class*="-message"] {
  font-weight: 500;
}
.error-message {
  color: red;
}
.success-message {
  color: green;
}
</style>
