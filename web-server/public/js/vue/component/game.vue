<template>
  <b-container fluid class="mt-3">
    <b-row>
      <b-col v-for="(card, index) in cards" :key="index">
        <b-card border-variant="dark" :title="card.title" :sub-title="card.author" :img-src="card.img" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>{{ card.description }}</b-card-text>
              <b-button :to="'/comment/' + card.id" class="fa fa-comment" variant="outline-primary"></b-button>
              <b-button v-b-modal="card.id" class="fa fa-share" variant="outline-success"></b-button>
              <b-modal :id="card.id" centered title="Share To Your Friend!">
                <p class="my-4">Vertically centered modal!</p>
              </b-modal>
            <input id="test" type="button" value="Test Game Server" onclick="show()"/>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
module.exports = {
  data(){
    return{
      cards:[
        { id:'1', img: 'https://picsum.photos/250/250/?image=58', title:'Running Man', author:'me', description:'It is a running game'},
        { id:'2', img: 'https://picsum.photos/250/250/?image=54', title:'Shooting Man', author:'you', description:'It is a shooting game'},
        { id:'3', img: 'https://picsum.photos/250/250/?image=59', title:'Escaping Man', author:'he', description:'It is a escapting game'},
      ]
    }
  }
}
</script>

<style></style>