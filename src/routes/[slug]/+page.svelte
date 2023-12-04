<script>
  export let data;
  import Header from '../../lib/components/Header.svelte';
  import Footer from '../../lib/components/Footer.svelte';
</script>

<Header />

<div class="slug">
  <h1>{data.title}</h1>
  <h2>{data.author}</h2>
  <p>{data.content}</p>
</div>
<Footer />
<style>
  h1 {
    text-align: center;
    padding: 1rem;

    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 50px;
    font-weight: bolder;

    box-shadow: 0 0 10px 0 black;
  }

  h2 {
    text-align: center;

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    font-weight: bold;
  }

  p {
    text-align: left;

    margin: auto;

    width: 50%;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
    line-height: 1.8;
  }
  </style>