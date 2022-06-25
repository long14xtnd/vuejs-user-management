import axios from "axios"; //gọi thư viện axios để sử dụng

//promise,callback function,async/await
//export ở đây có tác dụng để các thằng khác có thể import vào để sử dụng
//LẤY RA DANH SÁCH USER
export const getAllUserApi = async() => {
    //ở đây muốn dùng được await thì phải thêm thằng async,đây là cú pháp của ES7
    //await ở đây có nghĩa là phải chờ,mày phải chờ tao load xong dữ liệu rồi mới được gán
    const res = await axios({
        //res là tên biến hay được dùng,viết tắt của respon là lấy dữ liệu từ api
        method: "GET", //GET,POST,PUT,DELETE   //phương thức lấy dữ liệu
        //GET : lấy dữ liệu về
        // POST : sử dụng khi để gửi dữ liệu lên server(add)
        //PUT : cập nhật lại dữ liệu
        // DELETE : xóa
        url: "https://621ddfe3849220b1fc87e492.mockapi.io/user", //đường dẫn
    });
    return res.data;
};
//thêm user
export const createUserApi = async(user) => {
    const res = await axios({
        method: "POST",
        url: "https://621ddfe3849220b1fc87e492.mockapi.io/user",
        data: user,
    });
    return res.data;
};
//xóa user
export const removeUserApi = async(id) => {
    const res = await axios({
        method: "DELETE",
        url: `https://621ddfe3849220b1fc87e492.mockapi.io/user/${id}`,

    });
    return res;
};
//update user
export const updateUserApi = async(user) => {
    const res = await axios({
        method: "PUT",
        url: `https://621ddfe3849220b1fc87e492.mockapi.io/user/${user.id}`,
        data: user,

    });
    return res;
};