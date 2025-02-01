<template>
  <div class="setting-item">
    <label>
      {{ label }}
    </label>
    <select class="sexyselect" :value="selected" @change="updateValue($event.target.value)">
      <slot></slot>
    </select>
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

.sexyselect {
  background-color: #fff;
  background-image: none;
  border: .0625rem solid #ccc;
  color: #55595c;
  display: block;
  line-height: 1.5;
  margin: 0;
  max-width: 16rem;
  padding: .375rem .75rem;
  width: 100%
}
</style>