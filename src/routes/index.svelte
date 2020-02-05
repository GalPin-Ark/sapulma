<script>
import { request } from 'graphql-request'
 
const query = `{
characters{
   results {
	 name
	 species
	 gender
	 image
	 origin {
		 name
	 }
	 location {
		 name
	 }
   }
 }
}`
 
        const res =  request('https://rickandmortyapi.com/graphql/', query).then((data)=>{return data; }).catch(function (e) { console.log(e)});
		

</script>
<svelte:head>
  <title>Home Page</title>
</svelte:head>


  <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into
        <strong>sections</strong>
        , like the one you're currently reading
      </h2>



      <div class="columns is-multiline is-desktop">
        
		{#await res}
  <p>...waiting</p>
{:then data}

  {#each data.characters.results as resu} 
 
 

	
		<div class="column is-multiline is-full-mobile
is-one-third-tablet
is-one-quarter-desktop 
is-one-third-widescreen
is-one-quarter-fullhd">
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
				<img src={resu.image} alt="Placeholder image">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
					<img src={resu.image} alt="Placeholder image">
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{resu.name}</p>
					<p class="subtitle is-6">{resu.species} ({resu.gender})</p>
				</div>
				</div>

				<div class="content">
					From {resu.origin.name} <br>
					Last known location: {resu.location.name}

				<br>

				</div>
			</div>
			</div>
		</div>
  {/each}
{/await}
      </div>
    </div>
  </section>

