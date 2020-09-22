// promise 结构
new Promise((resolve, reject)=>{
    $.ajax({
        url : 'http://happymmall.com/user/get_user_info.do',
        type: 'post',
        success(res){
            resolve(res);
        },
        error(err){
            reject(err);
        }
    });
}).then((res)=>{
    console.log('success:', res);
},(err) => {
    console.log('error:', err);
});

// 链式promise
var promiseFn1 = new Promise((resolve, reject)=>{
    $.ajax({
        url : 'http://happymmall.com/user/get_user_info.do',
        type: 'post',
        success(res){
            resolve(res);
        },
        error(err){
            reject(err);
        }
    });
});

var promiseFn2 = new Promise((resolve, reject)=>{
    $.ajax({
        url : 'http://happymmall.com/cart/get_cart_product_count.do',
        type: 'post',
        success(res){
            resolve(res);
        },
        error(err){
            reject(err);
        }
    });
});


promiseFn1.then(()=>{
    console.log('promiseFn1 success');
    return promiseFn2;
}).then(()=>{
    console.log('promiseFn2 success');
});



