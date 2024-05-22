import {data} from "./data.js";
  const root = document.querySelector('#root')
const search = document.createElement("input");
let s = '';
    search.placeholder = 'Search...'
    search.type = 'search';
    search.style = `
        width: 200px;
        height: 30px;
        position: absolute;
            top: 30px;  
            left: 300px;
    `
  

       search.addEventListener("keyup", (evt)=>{
            //evt.preventDefault()

            s = evt.target.value;
            container.innerHTML = '';
            Render()
        }) 
   root.append(search)

let countDel = 0;
function Render (){
    root.innerHTML = ''
data.filter((val)=>{
   return  val.name.indexOf(s)  !== -1 
}).map((item)=>{
        let user = document.createElement("div");
        let userImg = document.createElement("img");
        let checkbox = document.createElement("input");
        const text = document.createElement("p");
        const online = document.createElement("div");
   


        userImg.style = `
            width: 45px;
        `
        userImg.src = `${item.img}`
        
        text.innerHTML = `${item.name} ${item.lastName}`

        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', ()=>{
            item.check = true;
            countDel++;


       
            del.addEventListener('click', ()=>{
                data.forEach((val)=>{
                    
                    if (val.check == true) {
                        request.style.display = 'flex';
                        document.body.style.backgroundColor = '#2DD54338'
            
                        reqYes.addEventListener("click", ()=>{
                            request.style.display = 'none';
                            document.body.style.backgroundColor = '#FFFFFF'
                            user.style.display = 'none';
                            val = {};
                            setTimeout(()=>{
                                backTime.style.display = "none";
                            }, 9000);
                            backTime.style.display = "flex";
                            const butcancel = document.querySelector(".butcancel");
                            butcancel.addEventListener("click", ()=>{
                                user.style.display = 'flex';
                                backTime.style.display = 'none';
                            })


                        });
                        reqNo.addEventListener("click", ()=>{
                            request.style.display = 'none';
                            document.body.style.backgroundColor = '#FFFFFF'
                        });

                    }
                })
            })
        })

        online.className = 'online'
        if(item.online == true){
            online.style.backgroundColor = 'greenyellow';
        }else{
            online.style.backgroundColor = 'red';

        }
        user.className = 'itemStyle';
        
        container.append(user);
        user.append(userImg);
        user.append(text)
        user.append(checkbox);
        user.append(online);
      return item
    })
    
}

    const header = document.createElement("header");
        header.style = `
            width: 100%;
            height: 100px;
            background-color: #5CDB94;
            display: flex;
        `
        const title = document.createElement("h1");
            title.innerHTML = 'PersonsDATA';
            title.style = `
                color: white;
                font-style: italic;
            `

            
                    
            // search.addEventListener('change',()=>{
            //     console.log(data.filter((val)=>{
            //         return val.name === search.value;
            //     })); 
                
            // })


        const delDiv = document.createElement("div");
            delDiv.style = `
                width: 80px;
                height: 80px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
                border-radius: 0.5rem;
                background-color: #2DD543;
                position: absolute;
                    top: 20px;
                    right: 20px;
            `
            const del = document.createElement("img");
            del.src = 'img/bin.png'
            del.style = `
                width: 50px;
                height: 80px;
            `
            const delCount = document.createElement("span");
            delCount.innerHTML =  `${countDel}`
            console.log(countDel);
            delDiv.appendChild(delCount)
            delDiv.appendChild(del);


            const addPerson = document.createElement("div");
            addPerson.style = `
                width: 50px;
                height: 30px;
                background-color: #FFFFFF;
                border: 1px solid;
                position: absolute;
                    top: 30px;
                    left: 600px;
            `
            addPerson.innerHTML = `
                <sapn>Add+</span>
            `
        const addDiv = document.createElement("div");
        const addName = document.createElement("input");
        const addLastName = document.createElement("input");
        const addGenderMale = document.createElement("input");
        const addGenderFmale = document.createElement("input");
        const addOk = document.createElement("button");
            addOk.innerText = 'add+'
            addOk.style = `
                width: 50px;
            `
        addName.className = "inputAdd";
        addLastName.className = "inputAdd";
        addGenderMale.type = 'radio';
        addGenderFmale.type = 'radio';
        addName.placeholder = 'First name';
        addLastName.placeholder = 'Last name';
        addGenderMale.name = 1;
        addGenderFmale.name = 1;


        addPerson.addEventListener("click", ()=>{
            addDiv.style.display = 'flex';
        })

        addOk.addEventListener('click', ()=>{
            addDiv.style.display = 'none';
            Add(addName.value, addLastName.value, "male");
            container.innerHTML = '';
            Render();
        })

        
        addDiv.style =  `
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            background-color:#FFFFFF;
            width: 400px;
            height: 200px;
            border: 1px solid;
            border-radius: 1rem;
            position: absolute;
                right: 30%;
                top: 25%;
            display: none;
        `
    const container = document.createElement("div");
        container.style = `
            margin: 50px auto;
            max-width: 1300px;
            height: 800px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        `

    const request = document.createElement("div");
        request.style = `
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            width: 400px;
            height: 200px;
            background-color: #95BE98; 
            border-radius: 1rem;
            position: absolute;
                right: 30%;
                top: 25%;
                display: none;
        `
    
        const reqText = document.createElement("span");
            reqText.innerText = "Վստա՞հ եք որ ուզում եք հեռացնել";
            reqText.style = `
                width: 90%;
            `

        const reqYes = document.createElement("button");
            reqYes.innerText = "YES"
            reqYes.style = `
                width: 100px;
                height: 30px;
            `
        const reqNo = document.createElement("button");
            reqNo.innerText = "NO"
            reqNo.style = `
                width: 100px;
                height: 30px;
            `
function Add (name, lname, sex) {
    return data.push({
        id: data.length+1,
        img: sex == "male"?"img/user.png":"img/feUser.png",
        name: `${name}`,
        lastName: `${lname}`,
        delete: "img/bin.png",
        check: false,
        online: false
    })
}


const backTime = document.createElement("div");
backTime.className = 'backTime';
backTime.innerHTML = `

    <div class="numero_counting_wrapper">
        <div class="numero_shape"></div>
    </div>
    <button class="butcancel">Cancel</button>
`


document.body.append(header);
    header.appendChild(title);
    header.appendChild(search);
    header.appendChild(addPerson);
    header.appendChild(backTime);
    header.appendChild(delDiv);


document.body.append(container);

document.body.append(request);
    request.appendChild(reqText);
    request.appendChild(reqNo);
    request.appendChild(reqYes);
    Render()

document.body.append(addDiv);
    addDiv.appendChild(addName);
    addDiv.appendChild(addLastName);
    addDiv.appendChild(addGenderMale);
    addDiv.appendChild(addGenderFmale);
    addDiv.appendChild(addOk);



    // function sortArray(arr) {
    //     let newarr = arr.sort((a, b) => {
    //       return a-b;
    //     });
    //     return newarr;
    //   }

    //   console.log(sortArray([21,3,41,1,3,4,2,0]));

