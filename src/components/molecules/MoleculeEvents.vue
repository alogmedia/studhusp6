<template>
    <AtomSectionTitle :title="title" v-if="title" />
    <div class="upcoming-events">
    <div class="Events">
      <AtomEvent
        v-for="(event, index) in limitedEvents"
        :key="index"
        :src="event.image"
        :alt="`Image for ${event.name}`"
        @click="() => togglePopup('buttonTrigger')"
      />
    </div>
  </div>
  <OrganismEventsInfoPage
    v-if="popupTriggers.buttonTrigger"
    :togglePopup="() => togglePopup('buttonTrigger')"
  />
</template>

<script setup>
import AtomEvent from '@/components/atoms/AtomEvent.vue';
import AtomSectionTitle from '@/components/atoms/AtomSectionTitle.vue';
import OrganismEventsInfoPage from '@/components/organisms/OrganismEventsInfoPage.vue';
import { ref, computed, onMounted } from 'vue';

const popupTriggers = ref({ buttonTrigger: false });

const togglePopup = (trigger) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
};

const props = defineProps({
  limit: {
    type: Number,
    default: 3,
  },
  title: {
    type: String,
    default: null,
  },
  latest: {
    type: Boolean,
    default: false,
  },
});

const events = ref([]);

// Function to get the month name from a custom date string (YYYY-DD-MM)
const getMonthFromDateString = (dateString) => {
  const [year, day, month] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleString('da-DK', { month: 'long' }).toUpperCase();
};

// Group events by month
const groupEventsByMonth = (events) => {
  const grouped = {};
  events.forEach((event) => {
    const month = getMonthFromDateString(event.date);
    if (!grouped[month]) {
      grouped[month] = [];
    }
    grouped[month].push(event);
  });
  return grouped;
};

// Computed property to get limited events
const limitedEvents = computed(() => {
  const groupedEvents = groupEventsByMonth(events.value);
  if (props.latest) {
    const sortedEvents = [...events.value].sort((a, b) => new Date(b.date.split('-').reverse().join('-')) - new Date(a.date.split('-').reverse().join('-')));
    return sortedEvents.slice(0, props.limit);
  } else if (props.title) {
    const filteredEvents = groupedEvents[props.title.toUpperCase()] || [];
    return filteredEvents.slice(0, props.limit);
  } else {
    return events.value.slice(0, props.limit);
  }
});

const getEvents = () => {
  fetch(`https://studhus-c0295-default-rtdb.europe-west1.firebasedatabase.app/events.json`, {
    method: 'GET',
  })
    .then((rawData) => rawData.json())
    .then((data) => {
      events.value = Object.values(data).flat();
    })
    .catch((error) => {
      console.error('Error fetching or processing data:', error);
    });
};

onMounted(() => {
  getEvents();
});
</script>
