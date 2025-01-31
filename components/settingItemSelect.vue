<template>
    <div class="setting-item">
      <label>
        {{ label }}
        <select :value="selected" @change="updateValue($event.target.value)">
          <slot></slot>
        </select>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'setting-item-select',
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
        type: String,
        default: ''
      }
    },
    computed: {
      selected() {
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
    display: block;
    margin-bottom: 5px;
  }
  select {
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>