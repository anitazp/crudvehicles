//CRUD Create, Read, Update, Delete.
const vehicle = [
    {
        id: 0,
        brand : "ford",
        model:"figo",
        color: "negro",
        year: "2018",
        price:"$ 160,000",
        
    },
    {
        id: 2,
        brand : "ford",
        model:"mustang",
        color: "rojo",
        year: "2019",
        price:"$ 460,000",
        
    },  
];

function printVehicle() {
    // 1. Obtengo el elemento html en el que quiero poner los usuarios
    // 2. Genero el html de los usuarios
    // 3. Pongo el html en el elemento obtenido
    const container = document.getElementById("container-vehicle");
    let html = '';
    vehicle.forEach((element) => {
        html += `<tr>
                    <td>${element.id}</td>
                    <td>${element.brand}</td>
                    <td>${element.model}</td>
                    <td>${element.color}</td>
                    <td>${element.year}</td>
                    <td>${element.price}</td>
                    <td>                                   
                    <button onclick="deleteVehicle(${element.id})" class="btn btn-warning">Delete</button>                            
                    </td>                
                </tr>`
    });
    container.innerHTML = html;
}


function deleteVehicle(id) {

    // Como elimino un valor de un arreglo? 1. pop -> shift -> splice
    // necesito el índice -> ¿cómo obtengo el índice del elemento si lo que yo recibo es el id? -> findIndex
    const index = vehicle.findIndex((vehicle) => vehicle.id === id );
    vehicle.splice(index, 1);

    printVehicle();
}

function addVehicle() {

    // obtner el valor del input
    // agregar el usuario al arreglo
    // imprimo nuevamente los usuarios
    const inputBrand = document.getElementById('brand');
    const brand = inputBrand.value;

    const inputModel= document.getElementById('model');
    const model = inputModel.value;

    const inputColor = document.getElementById('color');
    const color = inputColor.value;

    const inputYear = document.getElementById('year');
    const year = inputYear.value;
    
    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;       

    if(vehicle.length) {
        id = vehicle[vehicle.length -1].id + 1;
    }

   

    const newVehicle = {
        id,
        brand,
        model, 
        color, 
        year,
        price,
    
    }
    vehicle.push(newVehicle);
    printVehicle();

    // limpiamos el formulario
    document.getElementById("form-vehicle").reset();
}




printVehicle();




