<template>
    <br /><br />
    <div>
        <form
            @submit.prevent="submitEvent"
            method="post"
            enctype="multipart/form-data"
        >
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="event.title" />
            </div>

            <div>
                <label for="description">Description:</label>
                <textarea
                    id="description"
                    v-model="event.description"
                ></textarea>
            </div>

            <div>
                <label for="date">Date:</label>
                <input type="date" id="date" v-model="event.date" />
            </div>

            <div>
                <label for="time">Time:</label>
                <input type="time" id="time" v-model="event.time" />
            </div>

            <div>
                <label for="image">Image:</label>
                <input
                    type="file"
                    id="image"
                    @change="handleImageUpload"
                    accept="image/*"
                />
            </div>

            <button type="submit">Submit Event</button>
        </form>
    </div>
    <br /><br /><br /><br /><br />
</template>

<script>
export default {
    data() {
        return {
            event: {
                title: "",
                description: "",
                date: "",
                time: "",
                image: null,
            },
        }
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0]
            this.event.image = file
        },
        async submitEvent() {
            const formData = new FormData()
            formData.append("title", this.event.title)
            formData.append("description", this.event.description)
            formData.append("date", this.event.date)
            formData.append("time", this.event.time)
            formData.append("image", this.event.image)

            console.log("Event data:", formData)

            // Replace with your API endpoint or action
            fetch("https://turtles-steel.vercel.app/api/events", {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    /* if (!response.ok) {
                        throw new Error("Failed to submit event")
                    } */
                    return response.json()
                })
                .then((data) => {
                    console.log("Event submitted:", data)
                })
                .catch((error) => {
                    console.error(error)
                })
        },
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}

form div {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
}

input,
textarea,
button {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
}

button:hover {
    background-color: #0056b3;
}
</style>
