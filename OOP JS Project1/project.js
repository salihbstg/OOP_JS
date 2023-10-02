const imgUrl = document.getElementById("src");
const header = document.getElementById("header");
const detail = document.getElementById("detail");
const addBtn = document.getElementById("addBtn");
const prntElmnt=document.getElementById("prntElmnt");
const btn=document.getElementById("delete");
addBtn.addEventListener("click", e => {
   const newItem=new Items(imgUrl.value,header.value,detail.value);
   if(imgUrl.value!="" && header.value!="" && detail.value!=""){
    Storage.setStorageItems(newItem);
    UI.addItem(newItem);
    UI.clearElements(imgUrl,header,detail);
    location.reload();
   }
   else{
    alert("Lütfen tüm kutucukları doldurun");
   }
   
});
document.addEventListener("DOMContentLoaded",UI.loaderDoc());
prntElmnt.addEventListener("click",e=>{
   if(e.target.id==="delete"){
      UI.removeItem(e.target);
      Storage.removeItem(e.target);
   }
   
});