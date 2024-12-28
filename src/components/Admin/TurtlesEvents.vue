<template>
  <section class="py-16 px-6 sm:px-12 lg:px-24 bg-[#faf1e8] min-h-screen">
    <!-- Page Title -->
    <h1 class="text-4xl font-pacifico text-[#3A6507] mb-8 text-center">Upcoming Events</h1>

    <!-- Add Event Form -->
    <div class="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 class="text-2xl font-bold text-[#3A6507] mb-4">Add New Event</h2>
      <form @submit.prevent="addEvent">
        <div class="mb-4">
          <label class="block text-[#3A6507] font-medium mb-2">Event Title</label>
          <input
            type="text"
            v-model="newEvent.title"
            placeholder="Enter event title"
            class="w-full border rounded-lg p-3 focus:ring-[#00BCD4] focus:border-[#00BCD4]"
          />
        </div>
        <div class="mb-4">
          <label class="block text-[#3A6507] font-medium mb-2">Event Date</label>
          <input
            type="text"
            v-model="newEvent.date"
            placeholder="Enter event date (e.g., Every Friday, 7 PM)"
            class="w-full border rounded-lg p-3 focus:ring-[#00BCD4] focus:border-[#00BCD4]"
          />
        </div>
        <div class="mb-4">
          <label class="block text-[#3A6507] font-medium mb-2">Event Image URL</label>
          <input
            type="text"
            v-model="newEvent.image"
            placeholder="Enter image URL"
            class="w-full border rounded-lg p-3 focus:ring-[#00BCD4] focus:border-[#00BCD4]"
          />
        </div>
        <button
          type="submit"
          class="bg-[#00BCD4] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#3A6507] transition"
        >
          Add Event
        </button>
      </form>
    </div>

    <!-- Event Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="event in events"
        :key="event.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">{{ event.title }}</h2>
          <p class="text-gray-600 mb-4">{{ event.date }}</p>
          <div class="flex justify-between items-center">
            <a
              :href="event.link"
              class="bg-[#00BCD4] hover:bg-[#3A6507] text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
            >
              Reserve a Spot
            </a>
            <button
              @click="deleteEvent(event.id)"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Live Music Night',
          date: 'Every Friday, 7 PM',
          image: 'path/to/slide1.jpg',
          link: '/book-event',
        },
        {
          id: 2,
          title: 'Seafood Festival',
          date: 'First Saturday of every month',
          image: 'path/to/slide3.jpg',
          link: '/book-event',
        },
        {
          id: 3,
          title: 'Sunset Yoga',
          date: 'Every Sunday, 5 PM',
          image: 'path/to/slide2.jpg',
          link: '/book-event',
        },
      ],
      newEvent: {
        title: '',
        date: '',
        image: '',
      },
    };
  },
  methods: {
    addEvent() {
      if (this.newEvent.title && this.newEvent.date && this.newEvent.image) {
        this.events.push({
          ...this.newEvent,
          id: Date.now(),
          link: '/book-event',
        });
        this.newEvent = { title: '', date: '', image: '' }; // Reset form
      } else {
        alert('Please fill in all fields.');
      }
    },
    deleteEvent(eventId) {
      this.events = this.events.filter(event => event.id !== eventId);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
