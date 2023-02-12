

let del = body.querySelectorAll('.delete-btn')
let update = body.querySelectorAll('.update-btn')
async function display(){
    let html=``
     await fetch("http://localhost:3000/houses")
      .then(res=>res.json())
      .then(data=>{
          data.forEach(element => {
            console.log(data)
              html+=`
              
          <tr >

            
              <td><form id="form${element._id}" required><input class='input' type="text" name='name' required disabled value="${element.name}"></form></td>
              <td><input form="form${element._id}" class='input' type="text" name='price' required disabled value="${element.price}"></td>
              <td><form id="form${element._id}" required><input class='input' type="text" name='name' required disabled value="${element.bathroom}"></form></td>
              <td><form id="form${element._id}" required><input class='input' type="text" name='name' required disabled value="${element.salon}"></form></td>
              <td><form id="form${element._id}" required><input class='input' type="text" name='name' required disabled value="${element.bedroom}"></form></td>
            <td><a  href="${element.picturePath}" target='_blank'>Image</a></td>
              <td scope="row" id="${element._id}"><button class="update-btn">Update</button></td>
              <td scope="row" id="${element._id}"><button class="delete-btn">Delete</button></td>
            
          </tr>
          
          `  
          });
          
      })
      let body=document.getElementById('body')
      body.innerHTML=html
      
      let del = body.querySelectorAll('.delete-btn')
      let update = body.querySelectorAll('.update-btn')
      
      
    if (del){
      del.forEach(btn=>{
      btn.addEventListener('click',deleteRow)
       
      } )
    }
    if (update){
      update.forEach(btn=>{
      btn.addEventListener('click',updateRow)
       
      } )
    }
}
display()

async function deleteRow(){
    const id =this.parentElement.id
    await fetch(`http://localhost:3000/houses/${id}`,{method:'DELETE'})
    .then(res=>res.json())
    display()
    
    }


    // function updateRow(){

    //     let tableData=this.parentElement.parentElement.querySelectorAll('.input')
    //     const id =this.parentElement.parentElement.childNodes[1].id
    //     tableData.forEach(element=>{
    //         element.disabled=false
    //     })
    
    
    //     this.parentElement.innerHTML=`<button form="form${id}" type="submit" class="save-btn">save</button>`
    //     let save = body.querySelectorAll('.save-btn')
    //     if (save){
    //         save.forEach(btn=>{
    
    //         btn.addEventListener('click',saveRow)
            
    //         } )
    //     }
    
    // }
    // async function saveRow(e){
    //     e.preventDefault()
    //     const form=this.parentElement.parentElement.querySelector('form')
    
    //     const id =this.parentElement.parentElement.childNodes[1].id
    
    //     const formData= new FormData(form)
    
    //     let data={}
    //     for (let [key,val] of formData){
    //         data[key]=val
    //     }
       
        
    
    
    //     await fetch(`http://localhost:3000/houses/${id}`,{
    //         method:'PATCH',
    //         body:JSON.stringify(data),
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    
    //         let tableData=this.parentElement.parentElement.querySelectorAll('.input')
    //         let dataValue=[]
    //         for (let key in data){
    //             dataValue.push(data[key])
    //         }
    //         let i=1
    //         for (; i< dataValue.length-2;i++){
    //             tableData[i-1].value=dataValue[i]
    
    //         }
    //         this.parentElement.parentElement.querySelector('a').href=dataValue[i]
    //         tableData.forEach(element=>{
    //             element.disabled=true
    //         })
        
    //     })
    //     .catch(err=>console.log(err))
    
    //     this.parentElement.innerHTML=`<button class="update-btn">update</button>`
    
    //     let update = body.querySelectorAll('.update-btn')
    //     if (update){
    //         update.forEach(btn=>{
    //         btn.addEventListener('click',updateRow)
            
    //         } )
    //     }
    // }






function updateRow(){

    let tableData=this.parentElement.parentElement.querySelectorAll('.input')
    const id =this.parentElement.parentElement.childNodes[1].id
    tableData.forEach(element=>{
        element.disabled=false
    })


    this.parentElement.innerHTML=`<button form="form${id}" type="submit" class="save-btn">save</button>`
    let save = body.querySelectorAll('.save-btn')
    if (save){
        save.forEach(btn=>{

        btn.addEventListener('click',saveRow)
        
        } )
    }

}
async function saveRow(e){
    e.preventDefault()
    const form=this.parentElement.parentElement.querySelector('form')

    const id =this.parentElement.parentElement.childNodes[1].id

    const formData= new FormData(form)

    let data={}
    for (let [key,val] of formData){
        data[key]=val
    }
   
    


    await fetch(`http://localhost:3000/houses/${id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(res=>res.json())
    .then(data=>{

        let tableData=this.parentElement.parentElement.querySelectorAll('.input')
        let dataValue=[]
        for (let key in data){
            dataValue.push(data[key])
        }
        let i=1
        for (; i< dataValue.length-2;i++){
            tableData[i-1].value=dataValue[i]

        }
        this.parentElement.parentElement.querySelector('a').href=dataValue[i]
        tableData.forEach(element=>{
            element.disabled=true
        })
    
    })
    .catch(err=>console.log(err))

    this.parentElement.innerHTML=`<button class="update-btn">update</button>`

    let update = body.querySelectorAll('.update-btn')
    if (update){
        update.forEach(btn=>{
        btn.addEventListener('click',updateRow)
        
        } )
    }

}


const newHome= document.getElementById('testForm')
console.log(newHome)
if (newHome){
    newHome.addEventListener('submit',addHouse)
}

async function addHouse(e){
 e.preventDefault()
 
   const name = document.querySelector('.name');
   const price = document.querySelector('.price');
   const bedroom = document.querySelector('.bedroom');
   const bathroom = document.querySelector('.bathroom');
   const salon = document.querySelector('.salon');
 

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('name', name.value);
formData.append('price', price.value);
formData.append('bedroom', bedroom.value);
formData.append('salon', bathroom.value);
formData.append('bathroom', salon.value);
formData.append('file', fileField.files[0]);

fetch('http://localhost:3000/houses/create', {
  method: 'POST',
  body: formData
})
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
}
