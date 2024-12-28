<template>
  <div class="min-h-screen bg-[#faf1e8] flex items-center justify-center">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-2xl font-bold text-center text-[#3A6507]">Admin Login</h1>
      <form @submit.prevent="handleSubmit" class="mt-6">
        <div class="mb-4">
          <label for="email" class="block text-[#3A6507] font-medium">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full mt-2 p-3 border rounded-lg focus:ring-[#00BCD4] focus:border-[#00BCD4]"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-[#3A6507] font-medium">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full mt-2 p-3 border rounded-lg focus:ring-[#00BCD4] focus:border-[#00BCD4]"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-[#00BCD4] text-white font-bold py-3 rounded-lg hover:bg-[#3A6507] transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      if (this.email && this.password) {
        alert('Logged in successfully!');
      } else {
        alert('Please fill in all fields.');
      }
    }
  }
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
