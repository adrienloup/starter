<template>
  <div>
    <p v-if="users.length < 1">No user</p>
    <div v-else>
      <div
        :key="user.id"
        v-for="user in users"
      >
        {{user.id}}
        <span v-if="editing === user.id">
          <input
            type="text"
            v-model="user.name"
          >
        </span>
        <span v-else>{{user.name}}</span>
        <span v-if="editing === user.id">
          <input
            type="text"
            v-model="user.email"
          >
        </span>
        <span v-else>{{user.email}}</span>
        <div v-if="editing === user.id">
          <button @click="editUser(user)">Save</button>
          <button
            class="muted-button"
            @click="cancelEdit(user)"
          >Cancel</button>
        </div>
        <div v-else>
          <button @click="editMode(user)">Edit</button>
          <button @click="$emit('delete:user', user.id)">Delete</button>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: Array,
  },
  data() {
    return {
      editing: null,
    }
  },
  methods: {
    editMode(user) {
      this.cachedUser = Object.assign({}, user)
      this.editing = user.id
    },

    cancelEdit(user) {
      Object.assign(user, this.cachedUser)
      this.editing = null;
    },

    editUser(user) {
      if (user.name === '' || user.email === '') return
      this.$emit('edit:user', user.id, user)
      this.editing = null
    }
  }
}
</script>
