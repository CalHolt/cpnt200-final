<script>
  export let data;
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<Header />
<!-- <slot /> -->

<!--Hero Section Image-->
<div class="hero-section-image">
  <span>
    <h3>BLOG</h3>
  </span>
</div>


<ul>
  {#each data.blog as post}
  <a href="/{post.slug}">
   <h1>{post.blog_title}</h1> 
  </a>
  {/each}
</ul>

<style>
  .hero-section-image {
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

    font-family: 'Courier New', Courier, monospace;
    font-size: 7rem;

    color: white;

    text-align: center;
    margin: auto;

    padding-top: 13rem;
  }
</style>
<Footer />
