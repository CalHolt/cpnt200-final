<script>
  export let data;
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<Header />
<slot />

<ul>
  {#each data.blog as post}
   <h1>{post.blog_title}</h1> 
  {/each}
</ul>

<Footer />
