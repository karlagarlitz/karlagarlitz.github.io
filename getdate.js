let daynames= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let months= ["January", "February", "March", "April", "May","June","July","August","September","Obtober","November","December"];

let d = new Date();
let dayName = daynames[d.getDate()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = monthName + " " + d.getDate() + ", " + year;

document.getElementById("currentdate").textContent = fulldate;

document.getElementById('currentyear').textContent = year;

// ************ 
    let lastModified = document.lastModified;
    document.getElementById("updated").innerHTML= lastModified;
