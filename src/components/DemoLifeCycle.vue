<!-- <template>
  <h1>Demo LifeCycle</h1>
  <input ref="myInput" type="text" />
  <p>{{ count }}</p>
  <button class="btn btn-success" @click="handleIncrement()">Increment</button>
  <child-life-cycle v-if="count %2 === 0"></child-life-cycle>
</template>

<script>
import ChildLifeCycle from "./ChildLifeCycle.vue";
export default {
  components: {
    ChildLifeCycle,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleIncrement() {
      this.count++;
    },
  },
  //beforeCreate chỉ có tác dụng là khởi tạo
  beforeCreate() {
    console.log("beforeCreate", this.count);
  },
  //created sẽ được thực thi khi các data,methods,watch,computed được khởi tạo
  created() {
    console.log("created", this.count);
    this.count = 5;
  },
  beforeMount() {
    console.log("beforeMount", this.$refs.myInput);
  },
  mounted() {
    console.log("mounted", this.$refs.myInput);
    this.$refs.myInput.focus(); //cứ mỗi lần tải trang nó sẽ focus chuột vào ô input
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style>
</style> -->