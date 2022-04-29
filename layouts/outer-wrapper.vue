<template>
  <div>
    <header class="">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
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
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
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
      Copyright 2022 F-sektionen inom TLTH | HilbertOS skapat av <a href="#">web2.0-gruppen</a>
    </footer>
  </div>
</template>

<style>
  header {
    position: relative;
    width: 100%;
    background-image: url(bg.jpg);
    box-shadow: 25px 25px 100px 0 black inset, -25px -25px 100px 0 black inset;
    background-position: 50% 0;
    height: 75px;
    font-family: Roboto;
  }
  .logo {
    height: 60px;
  }
</style>
