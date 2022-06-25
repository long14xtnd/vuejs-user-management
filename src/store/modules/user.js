import { getAllUserApi } from "../../apis/user";
import { createUserApi } from "../../apis/user";
import { removeUserApi } from "../../apis/user";
import { updateUserApi } from "../../apis/user";
const state = () => {
    return {
        userList: [],
        searchName: "",
    };
};
const getters = {
    userListByBoy(state) {
        return state.userList.filter((user) => user.gender === "Nam");
    },
    /**
     *
     * tìm kiếm user theo Tên
     * đầu tiên từ biến state hệ thống ta lấy ra được searchName và userList
     * tiếp theo kiểm tra xem searchName có nằm trong userList hay không,sử dụng includes
     * toLowercase chỉ có tác dụng là biến chữ hoa thành chữ thường
     *
     */
    userListBySearchName(state) {
        const { userList, searchName } = state;
        return userList.filter((user) =>
            user.name.toLowerCase().includes(searchName.toLowerCase())
        );
    },
};
const mutations = {
    setUserListMutation(state, payload) {
        state.userList = payload;
    },
    setSearchNameMutation(state, payload) {
        state.searchName = payload;
    },
    addUserMutation(state, payload) {
        // state.userList = [...state.userList, payload];

        state.userList.push(payload);
    },
    removeUserMutation(context, payload) {
        // Hàm findIndex sẽ trả về key của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra(được truyền vào như một hàm).
        const index = context.userList.findIndex((user) => user.id === payload);
        if (index !== -1) {
            context.userList.splice(index, 1);
        } else {
            alert("Không tìm thấy id phù hợp");
        }
    },
    updateUserMutation(context, payload) {
        const index = context.userList.findIndex((user) => user.id === payload.id);
        if (index !== -1) {
            context.userList[index] = payload;
        } else {
            alert("Không tìm thấy user phù hợp");
        }
    },
};
const actions = {
    async getAllUserAction(context) {
        const payload = await getAllUserApi();
        context.commit("setUserListMutation", payload);
    },
    setSearchNameAction(context, payload) {
        //context ở đây hiểu như $this.store.state vậy
        setTimeout(() => {
            context.commit("setSearchNameMutation", payload);
        }, 200);
    },

    async addUserAction(context, payload) {
        // console.log(context);
        // console.log(payload);
        const res = await createUserApi(payload);
        console.log(res);
        // const newUser = {...payload, id: Math.random() }
        // context.commit("addUserMutation", newUser);
        context.dispatch("getAllUserAction"); //chỗ này sau khi thêm user xong thì dữ liệu trên server lúc này là một cái mảng mới vậy nên ta cần gọi lại cái actions getAllUserAction để lấy dữ liệu mới nhất rồi hiển thị ra màn hình
    },
    async removeUserAction(context, payload) {
        await removeUserApi(payload);
        context.dispatch("getAllUserAction");
        // console.log(context);
        // console.log(payload);
        // context.commit("removeUserMutation", res);
    },
    async updateUserAction(context, payload) {
        await updateUserApi(payload);
        context.dispatch("getAllUserAction");
        // context.commit("updateUserMutation", payload)
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};