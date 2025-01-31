<template>
  <vue-final-modal v-slot="{ close }" classes="sexycontainer modal-container modal-absolute modal-inset modal-outline-none"
    content-class="modal2">

    <div style="display: block;">
      <button class="sexyclosebutton modal__close" @click="close">
        ×
      </button>
      <h1 class="sexyh1">설정</h1>
      <header class="headeraaa">
        <li class="sexytab">위키</li>
        <li class="sexytab">토론</li>
        <li class="sexytab" id="selectedtab">스킨</li>
      </header>
      <section class="sexysection">
        <div id="wiki">
          <slot></slot>
        </div>
        <div id="toron" hidden>
          <slot></slot>
        </div>
        <div id="skin" hidden>
          <slot></slot>
        </div>
      </section>
    </div>

  </vue-final-modal>
</template>

<script>
export default {
  name: 'setting'
}
</script>