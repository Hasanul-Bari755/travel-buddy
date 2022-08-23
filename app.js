var carObject = {
    vehicle: "Car",
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  
    farePerKilo: 3,
    capacity: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };

  var bikeObject = {
    vehicle: "Bike",
    imageUrl:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60",
  
    farePerKilo: 2,
    capacity: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };
  var busObject = {
    vehicle: "Bus",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  
    farePerKilo: 4,
    capacity: 33,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };

  const serviceArray = [bikeObject,busObject,carObject]

  function displayServices(service){
       
    const mainSection  = document.getElementById('main-section');
    const stringObj = JSON.stringify(service);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3 mx-auto mt-5" style="max-width: 800px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${service.imageUrl}" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
        <p class="card-text">${service.description}</p>
        <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo}. capacity ${service.capacity}</small></p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='handleBooking(${stringObj})'>
        Booking
   </button>
      </div>
    </div>
  </div>
</div>
    `;
    mainSection.appendChild(div);
  }

  function displayAllArticles(arr){
     for(let i =0 ; i< arr.length; i++){
        const element = arr[i];
        displayServices(element)
     }
  }

  displayAllArticles(serviceArray);


  function handleBooking(obj){
    const modalBody = document.getElementById('modal-body');
    const stringObj = JSON.stringify(obj);
    modalBody.innerHTML = `
          <div class="card mx-auto" style="width: 18rem;">
        <img src="${obj.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Vehicle mood:${obj.vehicle}</h5>
          <p class="card-text">${obj.description}</p>
          <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}. capacity ${obj.capacity}</small></p>
          <div class="d-flex flex-column" role="search">
          <p>Fare: <small class="text-muted" id="fare"></small></p>
          <p>Tax: <small class="text-muted" id="tax"></small></p>
          <p>Total-cost: <small class="text-muted" id=total-cost></small></p>
          <input id= "distance-input"} class="form-control m-2" type="number" placeholder="koto kilo jaba?" aria-label="Search">
          <input id= "quantity-input"} class="form-control m-2" type="number" placeholder="koyta gari lagbe" aria-label="Search">
          <button class="btn btn-outline-success" type="submit"  onclick='calculateCost(${stringObj})'>Submit</button>
        </div>
         
        </div>
      </div>
    `;

  }

  function calculateCost(obj){
   const distance = document.getElementById('distance-input').value;
   const quantity = document.getElementById('quantity-input').value;
  
  const fareDiv= document.getElementById('fare');
  const tax = document.getElementById('tax');
  const total = document.getElementById('total-cost');

  const totalFare = quantity * distance * obj.farePerKilo;
  const totalTax = totalFare * 0.1;
  const totalAdd = totalFare + totalTax;
  fareDiv.innerHTML = totalFare;
  tax.innerHTML = totalTax;
  total.innerHTML = totalAdd;
  }

  document.getElementById('search-btn').addEventListener('click',function(){
    const value = document.getElementById('search-value').value;
    for(let i = 0; i< serviceArray.length; i++){
      const element = serviceArray[i];
      if(value.toLowerCase() === element.vehicle.toLowerCase()){
        console.log("match")
        document.getElementById('main-section').innerHTML = '';
        displayServices(element);
        return;
      }
    }
  })

