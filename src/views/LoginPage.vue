<template>
  <div>
    <div class="login-container-wrapper">
      <div class="login-container">
        <div class="login-form-container">
          <div class="rib-bor">
            <sui-label class="rib" ribbon>Login</sui-label>
          </div>
          <br />
          <br />
          <br />
          <label class="TT" for="user-account">User Account</label>
          <sui-input
            class="input"
            type="User Account"
            v-model="user.username"
            id="account"
            placeholder="User Account"
          />
          <label class="TT" for="password">Password</label>
          <sui-input
            class="input"
            type="Password"
            v-model="user.password"
            id="password"
            placeholder="Password"
          />
          <button class="clickLog" @click="Login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import md5 from "md5"; // Import md5 library

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    Login() {
      const predefinedUsername = "bob";
      const predefinedPassword = "1234";

      if (
        this.user.username === predefinedUsername &&
        md5(this.user.password) === md5(predefinedPassword)
      ) {
        console.log("Successfully logged in!");
        this.$router.push("/contact-list");
      } else {
        alert("Invalid credentials!");
      }
    },
  },
};
</script> -->

<script>
import md5 from "md5";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async Login() {
  try {
    const response = await axios.post("http://127.0.0.1:3000/login", {
      username: this.user.username,
      password: md5(this.user.password),
    });

    console.log("Successfully logged in!");
    this.$router.push("/contact-list");
  } catch (error) {
    alert("Invalid credentials!");
  }
},
  },
};
</script>


<style>
.login-container-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(219, 219, 219);
  border-radius: 5px;
  width: 350px;
  height: 260px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 13px;
  margin-top: 35px; /* Nav bar offset */
}

.login-form-container {
  width: 100%;
  max-width: 4000px;
}

.rib-bor {
  padding: 8px;
  border-top: 1px solid rgb(0, 181, 173);
  border-left: 1px solid rgb(183, 183, 183);
  border-right: 1px solid rgb(183, 183, 183);
  border-bottom: 1px solid rgb(183, 183, 183);
  border-radius: 3px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: left;
  position: absolute;
}

.rib {
  background-color: rgb(0, 181, 173) !important;
  color: white !important;
  font-weight: bold !important;
  border-color: rgb(0, 129, 126) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-left: 7px !important;
  margin-bottom: 5px !important;
}

.TT {
  display: block;
  text-align: left;
  font-weight: bold;
  color: black;
  font-size: 12px;
}

.input {
  width: 100% !important;
  height: 30px !important;
  border-radius: 5px !important;
  border: 10px rgb(143, 143, 143) !important;
  margin-bottom: 15px;
  font-size: 12px !important;
}

.clickLog {
  text-align: center;
  border: none;
  border-radius: 3px;
  background-color: rgb(224, 225, 226);
  font-size: 12px !important;
  font-weight: 600 !important;
  width: 70px;
  height: 35px;
  color: rgb(67, 67, 67);
}
</style>
