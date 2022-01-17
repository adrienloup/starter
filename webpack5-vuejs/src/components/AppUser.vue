<template>
  <div>
    <h1>Users</h1>
    <user-form
      @add:user="addUser"
    />
    <br>
    <user-list
      :users="users"
      @delete:user="deleteUser"
      @edit:user="editUser"
    />
  </div>
</template>

<script>
import UserList from './UserList.vue';
import UserForm from './UserForm.vue';

export default {
  name: 'AppUser',
  components: {
    UserList,
    UserForm,
  },
  data() {
    return {
      users: [],
      totalUsers: 0,
    }
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.users = await response.json();
        this.totalUsers = this.users.length;
      } catch (error) {
        console.error(error);
      }
    },
    async addUser(user) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json();
        this.users = [...this.users, data];
        this.totalUsers = this.totalUsers + 1;
        data.id = this.totalUsers + 1;
      } catch (error) {
        console.error(error);
      }
    },
    async editUser(id, updatedUser) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedUser),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json();
        this.users = this.users.map(user => user.id === id ? data : user);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE'
        })
        this.users = this.users.filter(user => user.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>
