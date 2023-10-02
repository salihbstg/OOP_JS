class Storage{

    static setStorageItems(newItem){
        let arr=this.getStorageItems();
        arr.push(newItem);
        localStorage.setItem("items",JSON.stringify(arr));
    }



    static getStorageItems(){
        let arr;
        if(localStorage.getItem("items")===null){
            arr=[];
        }
        else{
            arr=JSON.parse(localStorage.getItem("items"));
        }
        return arr;
    }
    static removeItem(elements){
       let content=elements.parentElement.children[0].textContent;
       let arr=this.getStorageItems();
       arr.forEach((element,index) => {
        if(element.header===content){
           arr.splice(index,1);
        }
       });
       localStorage.setItem("items",JSON.stringify(arr));
    }
}