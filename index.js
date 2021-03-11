var btn_contacts = document.querySelector('a.contacts_bytton');
var contacts = document.querySelector("div.contacts");

 
btn_contacts.addEventListener("click", function(){          
    // contacts.style.display = (contacts.style.display == "block") ? "none" : "block"; 
    if (!contacts.classList.contains('active')) {
        contacts.classList.add('active');  
    } else {
        contacts.classList.remove('active');
    }
});