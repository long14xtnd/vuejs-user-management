<template>
  <tbody>
    <user-item
      v-for="(user, index) in userListBySearchName"
      :key="index"
      :user="user"
    ></user-item>
    <!-- <user-item></user-item>
    <user-item></user-item>
    <user-item></user-item>
    <user-item></user-item> -->
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapActions } = createNamespacedHelpers("user");

export default {
  components: {
    UserItem,
  },
  // computed:{
  //   userList(){
  //     return this.$store.state.userLis
  //   }
  // }
  //====Cách viết mapState theo kiểu mảng ====
  // computed: mapState(["userList"]),
  //=======Cách viết mapState hay được sử dụng nhất======
  computed: {
    loading() {
      return false;
    },
    userListByBoy() {
      return this.$store.getters.userListByBoy;
    },
    ...mapGetters({
      userListFilterBoy: "userListByBoy",
      userListBySearchName: "userListBySearchName",
    }),
    //*** viết có dấu ... như này để phân biệt mapState và có thể viểt các computed khác do người dùng tự tạo */
    ...mapState({
      //trong vuejs nó khuyên chúng ta hạn chế cách dùng là this.$store để gọi dữ liệu vì store dữ liệu rất lớn truy cập kiểu như thế là ko nên
      //chính vì thế nó mới sinh ra một thằng có tên là mapState để ta truy xuất dữ liệu
      //(state) chỗ này tương đương với this.$store.state
      userList: (state) => state.userList,
      // userList : "userList" //Đây là cách viết khác nhưng ko nên dùng
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: "getAllUserAction",
    }),
  },
  
  /**tại sao lại dùng lifecycle created
   * vì khi chúng ta dùng created thì những cái data,state,vuex component nó đã tồn tại rồi thì code tại đây sẽ hạn chế 
   * hết mức có thể và sau này có cập nhật nó vào cái biến gì đó nó cũng ko bị lỗi
   */
  created() {
    this.getAllUser();
  },
};
</script>

<style></style>
