let title = document.createElement("h1")
title.setAttribute("id","title")
title.innerHTML = "PAGINATION"
document.body.append(title)

let description=document.createElement("p")
description.setAttribute('id', 'description')
description.innerText = "This is a Pagination using HTML, CSS, Javascript "
document.body.append(description)


let data = document.createElement("div")
data.setAttribute('class', 'table-responsive')
document.body.append(data)

let table = document.createElement("table")
table.setAttribute('class', 'table table-bordered table-striped')
data.append(table)

// let table2=document.createElement("table")
// table2.setAttribute('class', 'table')
// table.append(table2)

let head = document.createElement('thead')
let row1 = document.createElement('tr')
let head1 = document.createElement('th')
head1.innerText = "ID"
row1.append(head1)
head.append(row1)
table.append(head)

let head2 = document.createElement('th')
head2.innerText = "Name"
row1.append(head2)

let head3 = document.createElement('th')
head3.innerText = "Email"
row1.append(head3)

let body = document.createElement('tbody')
body.setAttribute('id', 'body')
table.append(body)


let page = document.createElement("div")
page.setAttribute('class', 'd-flex justify-content-center ')
page.setAttribute('id', 'buttons')

document.body.append(page)

let list = document.createElement("ul")
list.setAttribute('class', "pagination-buttons")
page.append(list)

let l3 = document.createElement("li")
let first = document.createElement("button")
first.setAttribute('id', 'btn')
first.setAttribute('onclick', 'firstBTN()')
first.innerHTML = "First"
l3.append(first)
list.append(l3)

let l1 = document.createElement("li")
let prev = document.createElement("button")
prev.setAttribute('id', 'btn')
prev.setAttribute('onclick', 'backBtn()')
prev.innerHTML = "<<"
l1.append(prev)
list.append(l1)

let num1 = document.createElement("li")
num1.setAttribute("class", 'pagination-numbers active')
num1.setAttribute('onclick', 'activeLink()')
num1.innerHTML = "1"
list.append(num1)

let num2 = document.createElement("li")
num2.setAttribute("class", 'pagination-numbers')
num2.setAttribute('onclick', 'activeLink()')
num2.innerHTML = "2"
list.append(num2)

let num3 = document.createElement("li")
num3.setAttribute("class", 'pagination-numbers')
num3.setAttribute('onclick', 'activeLink()')
num3.innerHTML = "3"
list.append(num3)

let num4 = document.createElement("li")
num4.setAttribute("class", 'pagination-numbers')
num4.setAttribute('onclick', 'activeLink()')
num4.innerHTML = "4"
list.append(num4)

let num5 = document.createElement("li")
num5.setAttribute("class", 'pagination-numbers')
num5.setAttribute('onclick', 'activeLink()')
num5.innerHTML = "5"
list.append(num5)

let num6 = document.createElement("li")
num6.setAttribute("class", 'pagination-numbers')
num6.setAttribute('onclick', 'activeLink()')
num6.setAttribute('id', 'pageButtons')
num6.innerHTML = "6"
list.append(num6)

let num7 = document.createElement("li")
num7.setAttribute("class", 'pagination-numbers')
num7.setAttribute('onclick', 'activeLink()')
num7.setAttribute('id', 'pageButtons')
num7.innerHTML = "7"
list.append(num7)

let num8 = document.createElement("li")
num8.setAttribute("class", 'pagination-numbers')
num8.setAttribute('onclick', 'activeLink()')
num8.setAttribute('id', 'pageButtons')
num8.innerHTML = "8"
list.append(num8)

let num9 = document.createElement("li")
num9.setAttribute("class", 'pagination-numbers')
num9.setAttribute('onclick', 'activeLink()')
num9.setAttribute('id', 'pageButtons')
num9.innerHTML = "9"
list.append(num9)

let num10 = document.createElement("li")
num10.setAttribute("class", 'pagination-numbers')
num10.setAttribute('onclick', 'activeLink()')
num10.setAttribute('id', 'pageButtons')
num10.innerHTML = "10"
list.append(num10)

let l2 = document.createElement("li")
let next = document.createElement("button")
next.setAttribute('onclick', 'nextBTN()')
next.setAttribute('id', 'btn')
next.innerHTML = ">>"
l2.append(next)
list.append(l2)


let l4 = document.createElement("li")
let last = document.createElement("button")
last.setAttribute('onclick', 'lastBTN()')
last.setAttribute('id', 'btn')
last.innerHTML = "Last"
l4.append(last)
list.append(l4)


var url = "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
var records = [];


var currentPage = 1;
var contentPerPage = 10;



async function renderTable(){
    await getData()
    var startIndex = (currentPage - 1) * contentPerPage
    var endIndex = startIndex + contentPerPage
    var output = " ";
    
    if(currentPage == 1){
        first.style.visibility = "hidden"
        prev.style.visibility = "hidden"
        
    }
    else{
        first.style.visibility = "visible"
        prev.style.visibility = "visible"
    }
        
    if(currentPage == numberOfPages()){
        last.style.visibility = "hidden"
        next.style.visibility = "hidden"
    }
    else{
        last.style.visibility = "visible"
        next.style.visibility = "visible"
    }


    
    if(currentPage <= 5){
        num6.style.display = "none"
        num7.style.display = "none"
        num8.style.display = "none"
        num9.style.display = "none"
        num10.style.display = "none"
    }
    else{
        num6.style.display = ""
        num7.style.display = ""
        num8.style.display = ""
        num9.style.display = ""
        num10.style.display = ""
    }

    if(currentPage > 5){
        num1.style.display = "none"
        num2.style.display = "none"
        num3.style.display = "none"
        num4.style.display = "none"
        num5.style.display = "none"
    }
    else{
        num1.style.display = ""
        num2.style.display = ""
        num3.style.display = ""
        num4.style.display = ""
        num5.style.display = ""
    }

    
    
    for(i = startIndex; i < endIndex; i++){
        output +="<tr>"
        output+= `<td> ${records[i].id} </td>`
        output+= `<td> ${records[i].name}</td>`
        output+= `<td> ${records[i].email}</td>`+
        "</tr>"
        }
    document.getElementById('body').innerHTML = output
}
renderTable();

async function getData(){
    const response = await fetch(url)
    const datas = await response.json()
    records = datas;
    
}
getData()



var link = document.getElementsByClassName("pagination-numbers")

function activeLink(){
    for(e of link){
        e.classList.remove("active")
    
    }
    event.target.classList.add("active")
}

    
   
function firstBTN(){
    if(currentPage!=1){
     currentPage = 1;
     renderTable();
    }
}



function backBtn(){
    if(currentPage > 1){
        for(e of link){
            e.classList.remove("active")
        }
        currentPage--;
        renderTable();
        link[currentPage-1].classList.add("active")
        
    }
}

function nextBTN(){
    if((currentPage * contentPerPage) < records.length){
        for(e of link){
            e.classList.remove("active")
        }
        currentPage++;
        renderTable();
        link[currentPage-1].classList.add("active")
    }
}

function lastBTN(){
    currentPage = numberOfPages();

    renderTable();
}

function numberOfPages(){
    return Math.ceil(records.length/contentPerPage)
}

num1.addEventListener('click', ()=>{
    currentPage = 1;
    renderTable();
})

num2.addEventListener('click', ()=>{
    currentPage = 2;
    renderTable();
})
num3.addEventListener('click', ()=>{
    currentPage = 3;
    renderTable();
})
num4.addEventListener('click', ()=>{
    currentPage = 4;
    renderTable();
})

num5.addEventListener('click', ()=>{
    currentPage = 5;
    renderTable();
})
num6.addEventListener('click', ()=>{
    currentPage = 6;
    renderTable();
})

num7.addEventListener('click', ()=>{
    currentPage = 7;
    renderTable();
})

num8.addEventListener('click', ()=>{
    currentPage = 8;
    renderTable();
})
num9.addEventListener('click', ()=>{
    currentPage = 9;
    renderTable();
})

num10.addEventListener('click', ()=>{
    currentPage = 10;
    renderTable();
})