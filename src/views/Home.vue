<template>
  <phoenixtree-layout :noPadding='true' :noContentPadding="true">
    <template v-slot:Frame-content>
      <phoenixtree-base-table>
      </phoenixtree-base-table>
    </template>
  </phoenixtree-layout>
</template>

<script>
export default {
  name: 'Home',
}
</script>
