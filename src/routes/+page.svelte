<script>
  export let data;
  import Header from '../lib/components/Header.svelte';
</script>

<Header />
<slot />

<!--Hero Section Image-->
<body>
  <span>
    <h3>BLOG</h3>
  </span>
</body>

<ul>
  {#each data.blog as post}
   <h1>{post.blog_title}</h1> 
  {/each}
</ul>

<style>
  body {
    background-image: url("images/blog-hero-section-image.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    height: 80vh;
    width: 100%;

    margin: 0;
  }

  h3 {
    z-index: -1;

    font-family: fantasy;
    font-size: 7rem;

    color: white;

    text-align: center;
    margin: auto;

    padding-top: 13rem;
  }
</style>
