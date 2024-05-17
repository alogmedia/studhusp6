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

