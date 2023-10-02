class UI{
    static addItem(newItem){
        const addingDiv=document.getElementById("prntElmnt");
        let innerText=`
        <div class="col-lg-3 mt-2">
                <div class="card" style="width: 100%; height: 100%;">
                    <img src="${newItem.url}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${newItem.header}</h5>
                        <p class="card-text">${newItem.details}</p>
                        <a href="#" class="btn btn-primary">Kaldır</a>
                    </div>
                </div>
            </div>
        `;
        addingDiv.innerHTML+=innerText;
    }

    static loaderDoc(){
        const addingDiv=document.getElementById("prntElmnt");
        let innerText=JSON.parse(localStorage.getItem("items"));
        innerText.forEach(element => {
        addingDiv.innerHTML+=`
                 <div class="col-lg-3 mt-2">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="${element.url}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.header}</h5>
                            <p class="card-text">${element.details}</p>
                            <a id="delete" href="#" class="btn btn-primary">Kaldır</a>
                        </div>
                    </div>
                </div>
            `;
        });

    }
    static clearElements(...elements){
        elements.forEach(element => {
            element.value="";
        });
    }
    static removeItem(element){
        element.parentElement.parentElement.parentElement.remove();
    }
}