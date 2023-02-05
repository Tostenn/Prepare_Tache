
function couleurs(){
    const x = Math.round(Math.random()*254)
    const y = Math.round(Math.random()*254)
    const z = Math.round(Math.random()*254)
    const opp = [0.5,0.6,0.7,0.8,0.9,1]
    const op = Math.round(Math.random()*5)
    const color = 'rgba('+x+','+y+","+z+','+opp[op]+")"
    return color
}
const data = document.querySelector('#ch')
function recu(data) {
    let datas = data.value 
    if (datas.length){
        return datas
    }
    else{
        return undefined
    }
}
const tache = document.querySelector('.tache')
function taches(tache= tache,text = ''){
    const div = document.createElement('div')
    div.classList.add('tache1')
    tache.append(div)
    div.innerHTML = '<input type="checkbox" id="id'+i+'">'
    div.innerHTML += '<img src="istockphoto-1223505692-612x612.jpg" alt="">'
    const lab = document.createElement('label')
    lab.classList.add('lb')
    lab.setAttribute('for','id'+i)
    div.appendChild(lab)
    lab.innerText = text

    // div.innerText += '<label for="id'+i+'" class="lb">'+text+'</label>'
}

const img = document.querySelectorAll('.tache img')
function sup (){

    for(let j in img){
        img[j].onclick = ()=>{
            img[j].parentElement.style.opacity = '0'
            setTimeout(() => {
                img[j].parentElement.remove()
                i--
            }, 500);
            console.log(i)
        }
    }
}

function veris(){
    const tache1 = document.querySelectorAll('.tache1')
    for(let i in tache1){
        tache1[i].onclick = ()=> {

            if(veri(tache1,i)) {
                chk.checked = false
                tache1[i].style.backgroundColor = 'white'
                tache1[i].style.color = 'black'

            }
            else {
                chk.checked  = true
                // const color = couleurs()
                tache1[i].style.backgroundColor = 'rgba(121, 99, 85, 0.9)'
                tache1[i].style.color = 'white'
            }
        
        }
    }
}

function veri(tache,i){
    chk = tache[i].querySelector('input')
    
    chk.checked == true ? ver = true :  ver = false
    return ver
}

let i = 0
let compte = 0
const valider = document.querySelector('.val')
valider.onclick = ()=>{
    const res = recu(data)
    if (res){
        data.value = ''
        taches(tache,text = res)
        i++
        compte ++
    }
}

window.onclick = ()=> {
    sup()
    veris()
}
function veri_color(cle,color){
    const t_cle = [tout,afaire,faire]
    for(let  i in t_cle){
        t_cle[i].style.backgroundColor = 'white'
        t_cle[i].style.color = 'black'
    }
    t_cle[cle].style.backgroundColor = color
    t_cle[cle].style.color = 'white'
}

const tout = document.getElementById('tout')
tout.onclick = ()=>{
    veri_color(0,'rgba(32, 134, 194, 0.952)')
    const tache1 = document.querySelectorAll('.tache1')
    for(let i in tache1){
        try {
            tache1[i].style.display = 'block'
        } catch (error) {
            
        }
    }
    try {
        tache1[0].style.borderTopLeftRadius = '15px'
        tache1[tache1.length-1].style.borderBottomRightRadius = '15px'
    } catch (error) { }
}

const afaire = document.getElementById('a-faire')
function veri_f(etat){
    const tache1 = document.querySelectorAll('.tache1')
    
    for(let i in tache1){
        try {
            tache1[i].style.display = 'block'
            
        } catch (error) {
            
        }
    }
    
    let xx = 0
    if (etat == 0){
        veri_color(2,'rgba(121, 99, 85, 0.9)')
        for(let i in tache1){
            try {
                if (!veri(tache1,i)){
                    tache1[i].style.display = 'none'
                    if(xx == 0) {
                        tache1[i].style.borderTopLeftRadius = '15px'
                        xx = tache1[i]
                    }
                    else{
                        xx = tache1[i]
                        xx.borderBottomRightRadius = '0'
                        xx.borderTopLeftRadius = '0'
                    }
                }
            } catch (error) {}
            
        }
    }
    else{
        veri_color(1,'rgba(39, 204, 233, 0.952)')
        for(let j in tache1){
            try {
                if (veri(tache1,j)){
                    tache1[j].style.display = 'none'
                    if(xx == 0) {
                        xx = tache1[j]
                        tache1[j].style.borderTopLeftRadius = '15px'}
                    else{
                        xx = tache1[j]
                        xx.borderBottomRightRadius = '0'
                        xx.borderTopLeftRadius = '0'
                    }
                }
            } catch (error) { }
            
        }
    }
    xx.style.borderBottomRightRadius = '15px'
}
afaire.onclick = ()=> veri_f(1)

const faire = document.getElementById('faire')
faire.onclick = ()=> veri_f(0)


const pop = document.querySelector('.pop')
const pop_img = pop.querySelectorAll('img')
setInterval(() => {
    const h = innerHeight
    const w = innerWidth -355
    if (w > 1200){
        pop.style.left = ''+w+'px'
        pop.style.top = ''+h-450+'px'
        if (compte % 2 == 0){
            pop.style.display = 'block'
            setTimeout(() => {
                pop.style.opacity = '1'
                for(let i in pop_img){
                    pop_img[i].style.opacity = '1'
                }
            }, 1500);
        }

    }
    console.log(h,w)
    
}, 1000);