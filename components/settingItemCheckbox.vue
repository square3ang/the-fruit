<template>
  <div class="setting-item">
    <label>
      {{ label }}
    </label>
    <div class="sexylabelparent">
      <label class="sexylabel">
        <input type="checkbox" class="sexycb" :checked="checked" @change="updateValue($event.target.checked)" />
        사용
      </label>

    </div>
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

.sexycb {
  color: inherit;
  line-height: inherit;
  font: inherit;
  margin: .25rem 0 0 -1.25rem;
  position: static
}

.sexylabelparent {
  display: block;
  margin-bottom: .75rem;
  padding-left: 1rem;
  position: relative
}

.sexylabel {
  cursor: pointer;
  font-weight: 400;
  margin-bottom: 0;
  padding-left: 1.25rem
}
</style>