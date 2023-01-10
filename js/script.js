/* 
 * Main scripts file for the timetable website.
 * Assignment 4, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */


//Selecting the main container to add content from the javascript object.
var mainContainer=document.querySelector(".container");
for(i=0;i<courseInfo.length;i++){
    //Accessing all the values from the javascript object by iterating through a loop 
    var infoSection=document.createElement("div");
    let code=courseInfo[i].code;
    let name=courseInfo[i].name;
    let maxEnroll=courseInfo[i].maxEnroll;
    let currentEnroll=courseInfo[i].currEnroll;
    let professor=courseInfo[i].prof;
    let term=courseInfo[i].term;
    let location=courseInfo[i].location;
    let schedule=courseInfo[i].schedule;
    let info=courseInfo[i].info;
    let infoHeading=code+":"+name;
    let indexHtml="";
    //Adding all the values to a new variable indexHtml
    indexHtml+="<h3 class=codeName>"+infoHeading+"</h3>";
    indexHtml+="<h4 class=prof>"+professor+"</h4>";
    indexHtml+="<i class=enrollment> Current Enrollment: "+currentEnroll+"( max: "+maxEnroll+") </i>  " ;
    indexHtml+="<i class=locationSchedule> Location: "+location+"<br>(schedule: "+schedule+") </i>  ";
    indexHtml+="<p class=info-para>"+info+"</p>";
    indexHtml+="<button class=btn>"+"Sign-up for course"+"</button>";
    //Adding the values from the varaiable indexHtml to the div we created
    infoSection.innerHTML+=indexHtml;
    //Appending the div into the main container present in index.html and giving it the classname course-info
    mainContainer.appendChild(infoSection).className="course-info";
}
//Adding onclick event to all the buttons and  making a function to add the selected courses to the course-selection-bag when user clicks on the button
const button1=document.getElementsByClassName("btn")[0];
button1.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[0].code+":"+courseInfo[0].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})

const button2=document.getElementsByClassName("btn")[1];
button2.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[1].code+":"+courseInfo[1].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})
const button3=document.getElementsByClassName("btn")[2];
button3.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[2].code+":"+courseInfo[2].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})

const button4=document.getElementsByClassName("btn")[3];
button4.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[3].code+":"+courseInfo[3].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})

const button5=document.getElementsByClassName("btn")[4];
button5.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[4].code+":"+courseInfo[4].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})

const button6=document.getElementsByClassName("btn")[5];
button6.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[5].code+":"+courseInfo[5].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})

const button7=document.getElementsByClassName("btn")[6];
button7.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[6].code+":"+courseInfo[6].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})

const button8=document.getElementsByClassName("btn")[7];
button8.addEventListener("click",function(){
    let bagContent=document.createElement("p");
    bagContent.innerHTML=courseInfo[6].code+":"+courseInfo[6].name;
    document.querySelector(".course-selection-bag").appendChild(bagContent); 
})






var i =5;
function myfunction(){
    i=3;
    return;
}
console.log(i);
