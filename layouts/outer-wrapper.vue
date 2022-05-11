<script setup lang="ts">
import { Ref } from 'vue'
import { User } from '~~/models/user'

const user: Ref<User> = useState('user')
const loggedIn: Ref<boolean> = useState('loggedIn')
const adminDropdownShow = ref(false)
</script>

<template>
  <div>
    <header class="">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="/f.svg" class="logo">-sektionen inom TLTH
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Medlemmar
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Sektionen
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Nollning
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div v-if="!loggedIn" class="buttons">
                <NuxtLink class="button is-light" to="/register">
                  Sign up
                </NuxtLink>
                <NuxtLink class="button is-primary" to="/login">
                  Log in
                </NuxtLink>
              </div>
              <div v-if="loggedIn">
                <div class="dropdown" :class="{ 'is-active': adminDropdownShow }">
                  <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="adminDropdownShow = !adminDropdownShow">
                      <span>Admin</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true" />
                      </span>
                    </button>
                  </div>
                  <div id="dropdown-menu" class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <NuxtLink class="dropdown-item" to="/admin/users">
                        Användare
                      </NuxtLink>
                      <NuxtLink class="dropdown-item" to="/admin/permissions">
                        Rättigheter
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <span>{{ user?.email }}</span>
              </div>
            </div>
          </div>
        </div>
        <slot name="header-additional" />
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="footer">
      Copyright 2022 F-sektionen inom TLTH | HilbertWeb skapat av <a href="#">web2.0-gruppen</a>
    </footer>
  </div>
</template>

<style>
  header {
    position: relative;
    width: 100%;
    background-image: url(/bg.jpg);
    box-shadow: 25px 25px 100px 0 black inset, -25px -25px 100px 0 black inset;
    background-position: 50% 0;
    height: 75px;
    font-family: Roboto;
  }
  .logo {
    height: 72px;
  }
</style>
