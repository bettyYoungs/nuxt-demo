<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/article"><i class="ion-compose"></i>&nbsp;New Article </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/settings"><i class="ion-compose"></i>&nbsp;Settings</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/login">Sign in</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/register">Sign up</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/profile/123">
              <img src="" class="user-pic" />
              Eric Simons
            </NuxtLink>
          </li>
       
        </ul>
      </div>
    </nav>
    <NuxtPage />
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp;
          design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>
<script setup>

</script>