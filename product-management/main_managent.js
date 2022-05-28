// const deleteProduct = index => {
//     let data = JSON.parse(localStorage.getItem('DataProduct'));
//     // console.log(data[0]);

//     let confirmDeleteProduct = confirm(`Bạn có chắc chắn muốn xóa ${data[index].name} ?`);
//     if (confirmDeleteProduct) {
//         data.splice(index, 1);
//         // console.log(data);
//         localStorage.setItem('DataProduct', JSON.stringify(data));
//         // localStorage.removeItem('newArrayProduct');//Xóa all
//         ShowListProduct();
//     }
// }



function deleteAllProduct() {
    let confirmDeleteAll = confirm(`Bạn có chắc muốn xóa tất cả không?`);
    if (confirmDeleteAll) {
        localStorage.clear();
        showProduct();
    }
}

showProductDiv();
