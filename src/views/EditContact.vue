<template>
  <div class="big-box">
    <h class="hh">Contact</h>
    <sui-label class="hh2" color="teal">Edit</sui-label>
    <br />
    <br />
    <hr class="d" />
    <br />
    <p class="text">First Name</p>
    <sui-input
      class="inp"
      v-model="contact.firstName"
      id="first"
      placeholder="Unchanged"
    />
    <p class="text">Last Name</p>
    <sui-input
      class="inp"
      v-model="contact.lastName"
      id="last"
      placeholder="Unchanged"
    />
    <p class="text">Mobile No</p>
    <sui-input class="inp" v-model="contact.mobile" id="no" placeholder="Unchanged" />
    <p class="text">Email</p>
    <sui-input class="inp" v-model="contact.email" id="em" placeholder="Unchanged" />
    <p class="text">Facebook</p>
    <sui-input class="inp" v-model="contact.facebook" id="fb" placeholder="Unchanged" />
    <p class="text">ImageUrl</p>
    <sui-input class="inp" v-model="contact.imgurl" id="url" placeholder="Unchanged" />
    <div class="button-container">
      <sui-button class="SC" basic color="blue" @click="updateContact(contactId)">💾 Save</sui-button>
      <sui-button class="SC" basic color="blue" @click="close">❌ Close</sui-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "edit-contact",
  data() {
    return {
      contact: {
        contactID: "",
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        facebook: "",
        imgurl: "",
      },
    };
  },
  mounted() {
    // this.loadContact();
  },
  methods: {
    loadContact() {
      const contactId = this.$route.params.contactId;
      axios
        .get(`http://127.0.0.1:3000/contact/${contactId}`)
        .then((response) => {
          this.contact = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateContact(contactId) {
  // Remove any properties with empty string values
  Object.keys(this.contact).forEach(key => {
    if (this.contact[key] === '') {
      delete this.contact[key];
    }
  });

  axios
    .put(`http://127.0.0.1:3000/contact/update/` + this.$route.params.contactId, this.contact)
    .then(() => {
      this.$router.push("/contact-list");
    })
    .catch((error) => {
      console.log(error);
    });
},

    close() {
      this.$router.push("/contact-list");
    },
  },
};
</script>