

//題目 - 樂呵呵健身房

//樂呵呵健身房目前有 8 位會員
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];



//第一階段：新增課程購買記錄（優惠定價）

/*
記錄內容：
會員名稱 (name)：字串
購買課程數量 (courses)：數字
課程單價（自動計算）
總金額（courses × 單價）
*/

/*
功能要求：
使用陣列 purchaseRecords 儲存每筆記錄。
如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
成功新增後，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」
*/


let PurchaseRecord =[];

function addPurchaseRecord(name,courses){

    //如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
    if(!members.includes(name) || courses <=0 || isNaN(courses)){
        console.log("輸入錯誤，並不儲存該記錄。");
        return;
    }


    //課程單價判斷
    let price = 0;
    if (courses>1 && courses<=10){
        price = 1500;
    }else if(courses>=11 && courses<=20){
        price = 1300;
    }else{
        price = 1100;
    }

    //課程總金額計算

    let totalPrice = courses*price;


    //儲存資料

    const data = {
        name,
        courses,
        price,
        totalPrice
    }

    PurchaseRecord.push(data);

    //成功新增後，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元。`)
}


addPurchaseRecord("Alice", 4); 
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量"); 


//第二階段：計算目前的總營業額

function calculateTotalPrice(){
    let sumTotalPrice = 0;
    PurchaseRecord.forEach((item)=>{
        sumTotalPrice += item.totalPrice;
        console.log(`目前總營業額為 ${sumTotalPrice} 元`);
    })
}

calculateTotalPrice();


//第三階段：篩選出還沒有購課的會員
function filterNoPurchaseMember(){
    const purchaseMemberNames = [];
    PurchaseRecord.forEach(function(record){
        purchaseMemberNames.push(record.name)
    })


    const noPurchaseMembers = members.filter(function(member){
        return purchaseMemberNames.includes(member) === false
    });

    console.log(`未購買課程的會員有：${noPurchaseMembers}`);
}

filterNoPurchaseMember();