<template>
  <div class="main-page container-fluid">
    <div class="row">
      <div class="col-9 offset-1">
        <h1>List of bugs</h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-2">
        <CreateBug>Create bug button not made.</CreateBug>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "main-page",
  data() {
    return {};
  },
  mounted() {},
  computed: {
    bugs() {}
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>