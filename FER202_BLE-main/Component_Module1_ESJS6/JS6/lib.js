function listProduct(productData = [], categoryDate = []){
    console.log("Đây là danh sách sản phẩm");
    if(productData.length > 0){
        console.log("Danh sách sản phẩm sau khi đúng điều kiện");
        for (const {id, name, price, cat} of productData) {                
            const filterCategory = categoryDate.find(c => c.id == cat)
            if(filterCategory){
                console.log(`id: ${id}\t name: ${name}\tprice: ${price}\tcategory: ${filterCategory?.name}`);
            } else{
                console.log(`id: ${id}\t name: ${name}\tprice: ${price}\tcategory: Not Found`);
            }
        }
    } else{
        console.log("Điều kiện không phù hợp");
    }
}

export default listProduct;