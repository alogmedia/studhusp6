<script setup>
import AtomLogo from '@/components/atoms/AtomLogo.vue';
import AtomFlag from '@/components/atoms/AtomFlag.vue';
import FlagDK from '@/assets/images/dkimg.svg';
import FlagEN from '@/assets/images/enimg.svg';

</script>

<template>
<header>
  <AtomLogo />
    <div class="flags">
      <AtomFlag :src="FlagDK" alt="Danish Flag" />
      <AtomFlag :src="FlagEN" alt="English Flag" />
    </div>
</header>
</template>
