<template>
  <div class="big-box">
    <h class="hh">Contact</h>
    <sui-label class="hh2" color="teal">Add</sui-label>
    <br />
    <br />
    <hr class="d" />
    <br />
    <p class="text">Contact ID <span style="color: red">*</span></p>
    <sui-input
      class="inp"
      v-model="contactID"
      id="id"
      placeholder="Contact ID"
    />
    <p class="text">First Name <span style="color: red">*</span></p>
    <sui-input
      class="inp"
      v-model="firstName"
      id="first"
      placeholder="First Name"
    />
    <p class="text">Last Name <span style="color: red">*</span></p>
    <sui-input
      class="inp"
      v-model="lastName"
      id="last"
      placeholder="Last Name"
    />
    <p class="text">Mobile No <span style="color: red">*</span></p>
    <sui-input class="inp" v-model="mobile" id="no" placeholder="Mobile No" />
    <p class="text">Email</p>
    <sui-input class="inp" v-model="email" id="em" placeholder="Email" />
    <p class="text">Facebook</p>
    <sui-input class="inp" v-model="facebook" id="fb" placeholder="Facebook" />
    <p class="text">ImageUrl</p>
    <sui-input class="inp" v-model="imgurl" id="url" placeholder="Image Url" />
    <div class="button-container">
      <sui-button class="SC" basic color="blue" @click="save"
        >💾 Save</sui-button
      >
      <sui-button class="SC" basic color="blue" @click="close"
        >❌ Close</sui-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contactID: "",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      facebook: "",
      imgurl: "",
    };
  },
  methods: {
    save() {
      if (!this.contactID || !this.firstName || !this.lastName || !this.mobile) {
        alert("Please fill out all required fields.");
        return;
      }
      
      let newContact = {
        contactID: this.contactID,
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        facebook: this.facebook,
        imgurl: this.imgurl,
      };
      console.log(newContact);
      axios
        .post("http://127.0.0.1:3000/contact", newContact)
        .then((response) => {
          console.log(response);
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


<style>
.hh {
  font-size: 20px;
  color: black;
  font-weight: bold;
}

.hh2 {
  /* display:flex!important; */
  align-items: center !important;
  justify-content: center !important;
  height: 25px !important;
}

.text {
  display: block;
  text-align: left;
  font-weight: bold;
  color: black;
  font-size: 12px;
  margin-bottom: 6px;
}

.inp {
  width: 100% !important;
  height: 30px !important;
  border-radius: 5px !important;
  border: 10px rgb(143, 143, 143) !important;
  margin-bottom: 10px;
  font-size: 12px !important;
}

.hr {
  border-top: 1px;
  border-radius: 2px;
}

.A {
  color: black;
  font-weight: bold;
  margin: none;
}

.B {
  width: 100%;
  margin: none;
}

.SC {
  padding: 10px !important;
  border:  rgb(6, 42, 93) !important;
  background-color: #ffffff !important;
  border-width: 2px !important;
  border-radius: 3px !important;
  text-align: center !important;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>
