import {db} from "./firebase.js";


import {


collection,

getDocs,

addDoc,

serverTimestamp


}

from

"https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";







// =========================
// MEMBER COUNT
// =========================


async function loadMembers(){


try{


const snap = await getDocs(

collection(db,"members")

);



let count=document.getElementById(
"memberCount"
);



if(count){

count.innerHTML=snap.size;

}



}

catch(error){

console.log(error);

}


}







// =========================
// EVENT SECTION
// =========================


async function loadEvents(){



let box=document.getElementById(
"homeEvents"
);



if(!box)
return;




box.innerHTML="";



try{


const snap=await getDocs(

collection(db,"events")

);




if(snap.empty){


box.innerHTML=`

<p>
सध्या कोणतेही कार्यक्रम उपलब्ध नाहीत.
</p>

`;

return;

}




snap.forEach((item)=>{


let event=item.data();



box.innerHTML+=`

<div class="event">


<div>


<h3>

${event.title}

</h3>


<p>

📅 ${event.date}

</p>


<p>

📍 ${event.location}

</p>


<p>

${event.description}

</p>



</div>



<button>

सहभाग घ्या

</button>


</div>


`;



});



}

catch(error){

console.log(error);

}


}








// =========================
// CONTACT FORM
// =========================



window.sendMessage = async function(){



let name=document.getElementById(
"name"
).value;


let mobile=document.getElementById(
"mobile"
).value;


let email=document.getElementById(
"email"
).value;


let message=document.getElementById(
"message"
).value;




if(
name=="" ||
mobile=="" ||
message==""
){


alert(
"कृपया आवश्यक माहिती भरा"
);


return;

}





try{


await addDoc(

collection(db,"messages"),

{


name:name,


mobile:mobile,


email:email,


message:message,


createdAt:serverTimestamp()


}

);



alert(
"आपला संदेश यशस्वीरित्या पाठवला"
);



// Clear


document.getElementById(
"name"
).value="";


document.getElementById(
"mobile"
).value="";


document.getElementById(
"email"
).value="";


document.getElementById(
"message"
).value="";




}


catch(error){


alert(error.message);


}



}







// START


loadMembers();

loadEvents();