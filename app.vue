<script setup>
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
const auth = useAuthenticator();

// onMounted(async () => {auth.signOut()});
const user = auth.user;
console.log(user);

const formFields = {
  signUp: {
    name: {
      label: 'Full Legal Name',
      placeholder: "As on your passport, driver's licence, tax returns, etc.",
      order: 1
    },
    email: {
      order: 2
    },
    password: {
      order: 3
    },
    confirm_password: {
      order: 4
    },
    phone_number: {
      dialCode: "+61",
      label: 'Mobile Number',
      placeholder: "Eg 401234567 (no leading zero)",
      order: 5
    },
  }
}

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
    <Authenticator variation="modal" :formFields="formFields">
    <NuxtPage />
    </Authenticator>
</template>
