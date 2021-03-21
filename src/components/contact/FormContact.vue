<template>
  <section class="form container text-left">
    <h2 class="h1 form_heading">Get in touch</h2>
    <p class="lead">get in touch about availability to work or participating in art gallery</p>
    <p class="lead call"> <strong>Call: +0201148778720</strong></p>
    <p class="lead email"> <strong>Email: Engy.abdelhak2018@gmail.com</strong></p>

    <form class="form-group" @submit.prevent="sendMail" method="GET" v-if="!submited">
      <label for="fullname">Full Name *</label> <br>
      <input class="form-control" type="text" required name="from_name"
      v-model="contactFormData.name" /> <br>
      <span :class="{opacity : error}" class="errorMsg">{{errorMsg}}</span> <br>
      <label for="email">Email *</label> <br>
      <input class="form-control" type="email" required name="from_email"
      v-model="contactFormData.email" /> <br>
      <span :class="{opacity : errorMail}" class="errorMsg">{{errorMsgEmail}}</span> <br>
      <label for="message">Message *</label> <br>
      <textarea class="form-control" placeholder="Message here .."
      rows="5" cols="20" v-model="contactFormData.message" name="message"></textarea> <br>
      <input class="btn btn-secondary" type="submit" value="Submit" />
    </form>

        <input
        class="btn btn-success"
        type="submit" value="successfully submited"
        v-if="submited"  />

      <div class="form_social text-center">
        <a href="https://www.instagram.com/enjiabdelhak/?hl=en" target="_blank" id="instagram">
          <b-icon-instagram />
        </a>
      <a href="https://www.linkedin.com/in/engy-abd-elhaaq-21373a1b5/" target="_blank" id="linkedin">
      <b-icon-linkedin />
      </a>
  </div>
  </section>
</template>
<script>
import { BIconInstagram, BIconLinkedin } from 'bootstrap-vue';
import emailjs from 'emailjs-com';

export default {
  name: 'form-contact',
  data() {
    return {
      contactFormData: {
        name: null,
        email: '@gmail.com',
        message: null,
      },
      error: false,
      errorMsg: '',
      errorMail: false,
      errorMsgEmail: '',
      submited: false,
    };
  },
  components: {
    BIconInstagram,
    BIconLinkedin,
  },
  methods: {
    sendMail(e) {
      const regExp = /[!$%^&*()+|~=`{}[]/;
      if (this.contactFormData.name.length <= 6 || this.contactFormData.name.length >= 25) {
        this.errorMsg = '*characters should be between 6 and 25';
        this.error = true;
      } else {
        this.error = false;
        try {
          emailjs.sendForm('service_y41xr7o', 'template_xlgf0hg', e.target, 'user_cKuz6eNN5sIfNQbfzQL2B', {
            from_name: this.contactFormData.name,
            from_email: this.contactFormData.email,
            message: this.contactFormData.message,
          });
          console.log('submited!!!');
        } catch (error) {
          console.log({ error });
        }
        this.contactFormData.name = '';
        this.contactFormData.email = '@gmail.com';
        this.contactFormData.message = '';
        this.submited = true;
      }

      if (this.contactFormData.email.match(regExp)) {
        this.errorMsgEmail = '*Invalid Email';
        this.errorMail = true;
      } else {
        this.errorMail = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.errorMsg {
  display: block;
  margin: -24px auto;
  width: fit-content;
  font: .8rem bold;
  color: #ff0000;
  opacity: 0;
}
.opacity {
  opacity: 1;
}
</style>
