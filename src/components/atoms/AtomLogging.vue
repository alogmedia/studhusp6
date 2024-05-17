<template>
  <div class="logger" @touchend="handleTouchEnd">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  property: {
    type: String,
    required: true,
  },
  apiUrl: {
    type: String,
    },
});

const handleTouchEnd = async () => {
  if (window.matchMedia('(pointer: coarse)').matches) {
    console.log(`User interaction detected for property: ${props.property}`);

    try {
      const response = await fetch('https://studhus-c0295-default-rtdb.europe-west1.firebasedatabase.app/logging.json');
      const data = await response.json();

      // Check if the fetched data is an array
      if (!Array.isArray(data)) {
        throw new Error('Data is not an array');
      }

      const loggingArray = data;

      // Find the index of the item with the specified property
      const loggingIndex = loggingArray.findIndex((e) => e[props.property] !== undefined);

      if (loggingIndex === -1) {
        throw new Error(`Ingen logging fundet med det givne ID for property: ${props.property}`);
      }

      const logging = loggingArray[loggingIndex];
      logging[props.property] = (parseInt(logging[props.property], 10) + 1).toString();

      const updatedLoggingData = [...loggingArray];
      updatedLoggingData[loggingIndex] = logging;

      await fetch('https://studhus-c0295-default-rtdb.europe-west1.firebasedatabase.app/logging.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLoggingData),
      });

      console.log('API success: Data er opdateret!');
    } catch (error) {
      console.error('API error', error.message);
    }
  }
};
</script>
