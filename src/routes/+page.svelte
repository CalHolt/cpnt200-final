<script>
  export let data;
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<Header />

<!--Hero Section Image-->
<div class="hero-section">
  <img src="../images/blog-hero-section-image.jpg" alt="" class="hero-section-image">
  <span>
    <h3>BLOG</h3>
  </span>
</div>


<div class="card-container">
  {#each data.blog as post}
    <div class="card">
      <a href="/{post.slug}">
      <h1>{post.blog_title}</h1>
      <img src="../images/{post.blog_image}" alt="">
      <h2>{post.blog_author}</h2>
      <p>{post.blog_summary}</p>
      </a>
    </div>
  {/each}
</div>

<style>
  .hero-section {
    height: 80vh;
    width: 100%;

    margin: 0;

    border-bottom-left-radius: 50px 20px;
    border-bottom-right-radius: 50px 20px;
  }

  .hero-section-image {
    width: 97.9vw;
    height: 80vh;
  }

  h3 {
    z-index: -1;

    font-family: 'Courier New', Courier, monospace;
    font-size: 7rem;

    color: white;

    text-align: center;
    margin: auto;

    padding-top: 13rem;

    margin-top: -35rem;
  }

  .card-container {
    padding: .5rem;
    display: grid;
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
    background-color: whitesmoke;

    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    transition: 400ms all;

    border: 5px solid black;

    width: 66vw;
    height: 61vh;

    text-align: center;

    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-items: center;

    padding: 1rem;
  }

  h1, h2, p {
    margin: auto;
    padding: 10px;
    text-align: center;
  }

  .card:hover {
    transform: scale(1.1);
    
    box-shadow: 0 0 40px black;
  }

  a:active {
    color: orange;
  }  
  
  @media (width > 60rem) {
    .card {
      width: 24vw;
      height: 61vh;
    }
    
    img {
      height: 100px;
      width: 270px;
      margin: auto;
    } 
   }

  a {
    text-decoration: none;
    color: black;
  }
  
 img {
    height: 140px;
    width: 250px;
    margin: auto;
    }
</style>
<Footer />
