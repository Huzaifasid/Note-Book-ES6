let div1 = document.querySelector('.div1')
const addNote = () => {
    let input1 = document.querySelector('.inp1');
    let input2 = document.querySelector('.inp2');

    div1.setAttribute("id", "mainDiv");
    
    if (input1.value.length >= 3 && input2.value.length >= 3) {

        // create heading 
        let heading = document.createElement('h4');
        heading.setAttribute("id", "mainH1");
        heading.setAttribute("class", "myH1 animate__animated animate__fadeInBottomLeft");
        let headtext = document.createTextNode(input1.value);
        heading.appendChild(headtext);
       
        // create div  

        let div = document.createElement('div');
        div.setAttribute("class", "textWork animate__animated animate__backInUp ");
        div.appendChild(heading);
        div1.appendChild(div)


        // create para 

        let para = document.createElement('p');
        para.setAttribute("id", "mainP");
        para.setAttribute("class", "myP animate__animated animate__fadeInBottomRight");
        let paratext = document.createTextNode(input2.value);
        para.appendChild(paratext);
        div.appendChild(para);
        div1.appendChild(div)



        //    btns 
        let btnDiv = document.createElement('div');
        btnDiv.setAttribute("class", "myFont")
        let Btn1 = document.createElement('i');  
        let Btn2 = document.createElement('i');
        heading.appendChild(Btn1)
        heading.appendChild(Btn2)
        para.appendChild(Btn1)
        para.appendChild(Btn2)
        Btn1.setAttribute("onclick", "delbtn()");
        Btn1.setAttribute("class", "fas fa-minus-circle animate__animated animate__fadeInTopRight");
        Btn2.setAttribute("onclick", "editbtn()");
        Btn2.setAttribute("class", "fas fa-pen-square animate__animated animate__fadeInTopLeft");
        btnDiv.appendChild(Btn2);
        btnDiv.appendChild(Btn1);
        div.appendChild(btnDiv)


        input1.value = '';
        input2.value = '';

    }

    else {
        alert("Please Fill both input & enter minimum 3 value")
    }


}


const delbtn = () => {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.remove()
}
const editbtn = () => {
    let mainH1 = document.getElementById('mainH1');
    let mainP = document.getElementById('mainP');
    let editH1txt = prompt("enter your heading");
    let editPtxt = prompt("enter your text");
    mainH1.innerHTML = editH1txt
    mainP.innerHTML = editPtxt
}

const delNote = () => {
    div1.innerHTML = ''
}