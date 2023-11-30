<script>
  export let data;
</script>

<ul>
  {#each data.blog as post}
   <h1>{post.blog_title}</h1> 
  {/each}
</ul>
