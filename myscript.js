var btn_contacts = document.querySelector('a.contacts_bytton');
var contacts = document.querySelector("div.contacts");
contacts.style.display = "block"; 

// function noneOrBlock()
 
btn_contacts.addEventListener("click", function(){          
    // contacts.style.display = (contacts.style.display == "block") ? "none" : "block"; 
    if (contacts.style.display == "block"){
        contacts.style.display = "none";
    } else{
        contacts.style.display = "block";        
    }    
});

