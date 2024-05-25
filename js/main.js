
var ProductNameInput = document.getElementById("exampleInputproductName1");
var ProductProductInput = document.getElementById("exampleInputproductCategory1");
var productNameValid = document.getElementById("productName");
var productCategoryValid = document.getElementById("productCategory");
var addBtn = document.getElementById("addBtn");
var updateMode = false;
var mainIndex ; 
var productArr=[];
if(JSON.parse(localStorage.getItem("product"))!= null)
  {productArr=JSON.parse(localStorage.getItem("product"))
  displayProduct();
  }
  



function addSite(){
  var product = {
    name : ProductNameInput.value,
    category : ProductProductInput.value,
  }

  vaildationAlert()

  if(isProductDataValid()){
    productArr.push(product);
    productArr.splice(mainIndex,1,product);
    addBtn.innerHTML="Add product";
    updateMode= false; 
    onDataChange()
    clearInput();
  }
}

function displayProduct(){

  var trAsign = "";

  for(var i=0; i<productArr.length; i++){
    trAsign += `
    <tr>
      <th scope="row">${i}</th>
      <td>${productArr[i].name}</td>
      <td><button onclick= "visit(${i})" class="btn btn-outline-warning">Visit</button></td>
      <td><button onclick= "deleteItem(${i})" class="btn btn-outline-danger">Delete</button></td>
    </tr>
  `
  }
  document.getElementById("Tbody").innerHTML = (trAsign);
}

function clearInput(){
  ProductNameInput.value = "";
  ProductProductInput.value = "";
}


function onDataChange()
{

  localStorage.setItem("product",JSON.stringify(productArr));
  displayProduct();
}

function deleteItem(index)
{
  productArr.splice(index,1)
  
  onDataChange()

}

function visit(index){
  
  var url = productArr[index].category;
        url = 'http://' + url;
        window.location.href = url ;
}

function isProductDataValid()
{
  return (/^[a-zA-Z]{1,18}$/.test(ProductNameInput.value))&&/^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/.*)?$/.test(ProductProductInput.value);
}

function vaildationAlert(){
  if(/^[a-zA-Z]{1,18}$/.test(ProductNameInput.value))
  {
    productNameValid.classList.add("d-none")
    ProductNameInput.classList.add("is-valid")
    ProductNameInput.classList.remove("is-invalid")
  }
  else
  {
    productNameValid.classList.remove("d-none")
    ProductNameInput.classList.add("is-invalid")
    ProductNameInput.classList.remove("is-valid")
    
  }
  
  if(/^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/.*)?$/.test(ProductProductInput.value))
  {
    productCategoryValid.classList.add("d-none")
    ProductProductInput.classList.add("is-valid")
    ProductProductInput.classList.remove("is-invalid")
  }
  else
  {
    productCategoryValid.classList.remove("d-none")
    ProductProductInput.classList.add("is-invalid")
    ProductProductInput.classList.remove("is-valid")
    
  }
  
}