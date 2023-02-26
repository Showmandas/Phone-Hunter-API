const loadPhone= async()=>{
    const url='https://openapi.programming-hero.com/api/phones?search=iphone'
    const res=await fetch(url)
    const data=await res.json()
    displayPhone(data.data);
}


const displayPhone=phone=>{
    const phonesContainer=document.getElementById('phones-container');
    phone.forEach(phone=>{
        const div=document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top img-fluid w-50 mx-auto" alt="...">
        <div class="card-body mt-4 text-center">
          <h4 class="card-title">${phone.brand}</h4>
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        phonesContainer.appendChild(div);
    })
}

loadPhone()