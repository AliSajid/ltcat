<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
</script>

<div class="card card-bordered">
  <div class="card-body">
    <img src={image} alt="Title of the Podcast" class="image-full" />
    <div class="p-4">
      <h2 class="card-title">{title}</h2>
      <p class="card-body">{description}</p>
    </div>
  </div>
</div>
