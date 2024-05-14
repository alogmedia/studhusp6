<template>
    <div class="backtofp-section ">
            <AtomSquareButtonLeft buttonTitle='TILBAGE' @click="navigateToFront"/>
            <div class="backtofp-text">
            <AtomH3Title>KOMMENDE EVENTS</AtomH3Title>
            <AtomParagraph>Hos Studenterhuset Odense</AtomParagraph>
        </div>
    </div>
</template>

<script setup>
import AtomH3Title from '@/components/atoms/AtomH3Title.vue';
import AtomParagraph from '@/components/atoms/AtomParagraph.vue';
import AtomSquareButtonLeft from '@/components/atoms/buttons/AtomSquareButtonLeft.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToFront = () => {
  // Use the router instance to navigate to the "/events" route
  router.push('/');
};

// Expose the navigateToEvents function to the template
defineExpose({
    navigateToFront
});
</script>

<style scoped>
    .backtofp-section {
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:20px;
    padding: 20px;
    background: rgb(220,81,188);
    background: linear-gradient(152deg, rgba(220,81,188,1) 20%, rgba(254,145,87,1) 40%, rgba(200,93,164,1) 60%, rgba(108,103,228,1) 80%, rgba(200,93,164,1) 100%);
}

.backtofp-text {
    display: flex;
    flex-direction: column;
}
</style>
  