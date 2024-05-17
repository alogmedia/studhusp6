<template>
  <header>
    <AtomLogo />
    <div class="flags">
      <AtomLogging property="flagdk">
        <AtomFlag :src="FlagDK" alt="Danish Flag" />
      </AtomLogging>
      <AtomLogging property="flagen">
        <AtomFlag :src="FlagEN" alt="English Flag" />
      </AtomLogging>
    </div>
  </header>
</template>

<script setup>
import AtomFlag from '@/components/atoms/AtomFlag.vue';
import AtomLogo from '@/components/atoms/AtomLogo.vue';
import AtomLogging from '@/components/atoms/AtomLogging.vue';
import FlagDK from '@/assets/images/dkimg.svg';
import FlagEN from '@/assets/images/enimg.svg';
</script>
