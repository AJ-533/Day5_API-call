fetch("https://fakestoreapi.com/products").then((data) =>{
  console.log(data);
  return data.json();
}).then((resp) =>{

  let tableData = "";
  resp.map((values) =>{
    tableData+=`<tr>
    <td>${values.id}</td>
    <td>${values.title}</td>
    <td>${values.description}</td>
    <td>${values.price}</td>
  </tr>`;
  });

  document.getElementById("table-body").
  innerHTML=tableData;
}).catch((err)=>{
  console.log(err);
});