var btn_contacts = document.querySelector('.contacts_bytton');
var contacts = document.querySelector(".contacts");
 
btn_contacts.addEventListener("click", function(){              
    if (!contacts.classList.contains('active')) {
        contacts.classList.add('active');  
    } else {
        contacts.classList.remove('active');
    }
});