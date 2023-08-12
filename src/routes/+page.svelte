<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="text-3xl text-center">Lost Terminal Podcast Categorizer</h1>

<p>
  Welcome to the Lost Terminal podcast categorizer. The goal of this small application is to provide everyone with
  distinct streams of RSS feeds, for each individual subcategory of Podcasts in the Lost Terminal Patreon Exclusives.
</p>

<p>To make use of this application follow these steps:</p>
<ul class="steps steps-vertical">
  <li class="step">Subscribe to the Lost Terminal Patreon. Go on. I'll wait</li>
  <li class="step">Copy the Patron-specific RSS Feed link from the patreon page.</li>
  <li class="step">
    Sign Up (or Log In) to your account on this web application. You can sign up with either a github account or a
    google account.
  </li>
  <li class="step">
    Once logged in, you will arrive at your Profile Page. You can add your unique RSS Feed URL there.
  </li>
  <li class="step">
    Once you've updated the RSS Feed URL, it will take a few minutes for the application to recreate the filtered feeds.
  </li>
  <li class="step">Once the feeds are ready, you can find them on the Feeds Page.</li>
</ul>
