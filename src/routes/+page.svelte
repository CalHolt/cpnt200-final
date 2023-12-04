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


<div class="card-container">
  {#each data.blog as post}
    <div class="card">
      <a href="/{post.slug}">
      <h1>{post.blog_title}</h1> 
      <h2>{post.blog_author}</h2>
      </a>
    </div>
  {/each}
</div>

<style>
  .hero-section-image {
    background-image: url("images/blog-hero-section-image.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    height: 80vh;
    width: 100%;

    margin: 0;

    border-bottom-left-radius: 50px 20px;
    border-bottom-right-radius: 50px 20px;
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

  .card-container {
    padding: .5rem;
    display:grid;
    justify-items: center;

    margin: auto;
  }

  @media (width > 60rem){
  .card-container{
    grid-template-columns: repeat(3, 1fr);
  }
}
  
  .card {
    display: flex;
    flex-wrap: wrap;
    background-color: cyan;

    font-family:'Courier New', Courier, monospace;

    transition: 400ms all;

    border: 5px solid black;
    border-radius: 25%;

    width: 45vw;
    height: 30vh;

    text-align: center;

    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-items: center;

    padding: 1.5rem;
    padding-top: 1rem;
  }

  h1, h2 {
    margin: auto;
    padding: 1.2rem;
  }

  .card:hover {
    transform: scale(1.1);
    
    box-shadow: 0 0 40px black;
  }

  a:active {
    color: orange;
  }  
  
  @media (width > 50rem) {
    .card {
      width: 20vw;
    }
  }

  a {
    text-decoration: none;
  }
</style>
<Footer />
