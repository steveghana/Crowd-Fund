//Selectors
let bookmark = document.querySelector('.btn')
let bookmarked = document.querySelector('.btnremove')
let rewardButtons = document.querySelectorAll('.rewardbtn')
let popup = document.querySelector('.popup')
let main = document.getElementById('main')
let thanksbutton = document.querySelector('.thanksbtn')
let selection = document.querySelector('.mainbacking')
// let radio = document.querySelectorAll('.radio')
// let boxes = document.querySelectorAll('.backbox')
let radio1 = document.querySelector('.radio1')
let radio2 = document.querySelector('.radio2')
let radio3 = document.querySelector('.radio3')
let lateButtons1 = document.querySelector('.latebtns1')
let lateButtons2 = document.querySelector('.latebtns2')
let lateButtons3 = document.querySelector('.latebtns3')
let backThisProject = document.querySelector('.backproject')
let svgclose = document.querySelector('.close')
let continuebtn = document.querySelectorAll('.continue')
//Events
backThisProject.addEventListener('click', ()=>{
    selection.classList.add('mainbackingactive')
    selection.classList.remove('mainbacking')
    main.classList.add('mainblur')
    main.style.pointerEvents = 'none'  
})

continuebtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        selection.classList.remove('mainbackingactive')
        selection.classList.add('mainbacking')
        popup.classList.add('popactive')
        popup.classList.remove('popup')
        main.classList.add('mainblur')
        main.style.pointerEvents = 'none'
            
    })
})



thanksbutton.addEventListener('click', ()=>{
           
    popup.classList.add('popup')
    popup.classList.remove('popactive')
    main.classList.remove('mainblur')
    main.style.pointerEvents = 'all'

})

bookmark.addEventListener('click', ()=>{
    bookmarked.classList.add('btn1')
    bookmark.classList.remove('btn')
    bookmarked.classList.remove('btnremove')
    bookmark.classList.add('btnremove')
    selection.classList.add('mainbackingactive')
    selection.classList.remove('mainbacking')
if(selection.classList.contains('mainbackingactive')){
    main.classList.add('mainblur')
    main.style.pointerEvents = 'none'

}

})

bookmarked.addEventListener('click', ()=>{
    bookmark.classList.add('btn')
    bookmarked.classList.remove('btn1')
    bookmark.classList.remove('btnremove')
    bookmarked.classList.add('btnremove')
   
    
})

svgclose.addEventListener('click', ()=>{
    main.classList.remove('mainblur')
    main.style.pointerEvents = 'all'
    selection.classList.remove('mainbackingactive')
    selection.classList.add('mainbacking')
popup.classList.remove('popactive')
popup.classList.add('popup')

})


let parent1 = radio1.parentNode.parentNode

    radio1.addEventListener('click', ()=>{
        lateButtons1.classList.add('lateactivate')
        parent1.classList.add('border') 
        parent2.classList.remove('border')
        parent3.classList.remove('border')
        lateButtons2.classList.remove('lateactivate')
        lateButtons3.classList.remove('lateactivate')
})
let parent2 = radio2.parentNode.parentNode

radio2.addEventListener('click', ()=>{
    lateButtons2.classList.add('lateactivate')

        // radio1.parentNode.parentNode.classList.remove('border')
        parent2.classList.add('border') 
        parent1.classList.remove('border')
        lateButtons1.classList.remove('lateactivate')
        lateButtons3.classList.remove('lateactivate')
        parent3.classList.remove('border')
})
let parent3 = radio3.parentNode.parentNode

radio3.addEventListener('click', ()=>{
        // radio2.parentNode.parentNode.classList.remove('border')
        lateButtons3.classList.add('lateactivate')

        parent3.classList.add('border')  
        parent1.classList.remove('border')
        parent2.classList.remove('border')
        lateButtons1.classList.remove('lateactivate')
        lateButtons2.classList.remove('lateactivate') 
})


  


