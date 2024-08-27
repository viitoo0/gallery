<template>
  <div class="home">
    <div class="container-fluid">
        <ListaProdutos/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaProdutos from '@/components/ListaProdutos.vue'

export default {
  name: 'HomeView',
  components: {
    ListaProdutos
  }
}
</script>
