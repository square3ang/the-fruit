<template>
    <div class="setting-item">
      <label>
        <input type="checkbox" :checked="checked" @change="updateValue($event.target.checked)" />
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'setting-item-checkbox',
    props: {
      label: {
        type: String,
        required: true
      },
      ckey: {
        type: String,
        required: true
      },
      default: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      checked() {
        return this.$store.state.localConfig[this.ckey] ?? this.default;
      }
    },
    methods: {
      updateValue(value) {
        this.$store.commit('localConfigSetValue', { key: this.ckey, value });
      }
    }
  }
  </script>
  
  <style scoped>
  .setting-item {
    margin-bottom: 15px;
  }
  label {
    font-weight: bold;
    cursor: pointer;
  }
  input[type="checkbox"] {
    margin-right: 10px;
  }
  </style>