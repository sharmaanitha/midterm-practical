var wrap = document.body.querySelector(".wrap");
var counter=5;
var numberEle=document.body.querySelector(".count").innerHTML="Count: "+ 5+"";


var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

function counter_plus_one()
{
  counter=counter+1;
  var numberEle=document.body.querySelector(".count").innerHTML="Count: "+counter+"";
}


for(var i=0; i<list.length; i++)
  {  
    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var ageEle=document.createElement("h2");
    nameEle.innerHTML = "Name: " + list[i].name;
    ageEle.innerHTML = "Age: " + list[i].age;
    ele.appendChild(nameEle);
    wrap.appendChild(ele);
    if(list[i].age>25)
      {
        nameEle.style.color="green";
        ele.appendChild(nameEle);
        ageEle.style.color="green";
        ele.appendChild(ageEle);
      }
    else
      {
        nameEle.style.color="black";
        ele.appendChild(nameEle);
        ageEle.style.color="black";
        ele.appendChild(ageEle);
      }
  }

  document.body.querySelector(".counter").addEventListener("click", function()
  {
    counter_plus_one()
  })