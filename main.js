const loadPhone= async(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res=await fetch(url)
    const data=await res.json()
    displayPhone(data.data);
}


const displayPhone=phone=>{
    const phonesContainer=document.getElementById('phones-container');
    phonesContainer.innerText='';

    // display 10 phones 
    const showall=document.getElementById('showall');
    if(phone.length > 10){
        phone=phone.slice(0,10);
        showall.classList.remove('d-none');

    }else{
        showall.classList.add('d-none');

    }

    // display no found message
    const noFoundMsg=document.getElementById('no-found-msg'); 
    if(phone.length === 0){
        noFoundMsg.classList.remove('d-none');
    }else{
        noFoundMsg.classList.add('d-none');
    }


    
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
          <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
      </div>
        `
        phonesContainer.appendChild(div);
    })
    // stop spinner 
    toggleSearch(false);
}


document.getElementById('btn-search').addEventListener('click',function(){
    toggleSearch(true);
    const phoneSearch=document.getElementById('phone-search');
    const searchText=phoneSearch.value;
    loadPhone(searchText)
})
const toggleSearch=loading=>{
    const loader=document.getElementById('loader');
    if(loading){
        loader.classList.remove('d-none')
    }else{
        loader.classList.add('d-none');
    }
}

document.getElementById('phone-search').addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        toggleSearch(true);
    const phoneSearch=document.getElementById('phone-search');
    const searchText=phoneSearch.value;
    loadPhone(searchText)
    }
})

const loadPhoneDetails=async id=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`;
    const res=await fetch(url);
    const data=await res.json();

}

loadPhone()