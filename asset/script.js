  ///////////////////////hover img/////////////////////////
  const bgHover = document.querySelectorAll('.bg-click>figure')
  const bgImg = document.querySelectorAll('.bg-img>img')
  // console.log(bgHover);
  // console.log(bgImg);
  let nav = document.querySelector('nav')
  //////////////////////////////////date//////////////////////////
  const now = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = now.getDay()
  const month = now.getMonth()
  const year = now.getFullYear()
  const time = now.toLocaleTimeString()
  const divDate = document.querySelector('nav>div')
  divDate.innerHTML = `${day}${monthNames[month]}${year} <br> ${time}`

  ////////////////////////////////////////////////////////////
  bgHover.forEach((val, i) => {
    val.addEventListener('mouseleave', () => {
      bgImg.forEach(item => {
        // console.log(bgImg[1]);
        mouse.classList.remove('mouseenter')
        if (i == 0) {
          bgImg[0].style.transform = 'translateX(-2000px)'
        } else if (i == 1) {
          bgImg[1].style.transform = 'translateX(-2000px)'
        } else if (i == 2) {
          bgImg[2].style.transform = 'translateX(-2000px)'

        } else if (i == 3) {
          bgImg[3].style.transform = 'translateX(-2000px)'

        }
      })
    })
    val.addEventListener('mouseenter',()=>{
      mouse.classList.add('mouseenter')
    })
  })
  ///////////////////////////////////////////////////////////
  bgHover.forEach((val, i) => {
    val.addEventListener('mouseenter', () => {
      bgImg.forEach(item => {
        // console.log(bgImg[1]);

        if (i == 0) {
          bgImg[0].style.transform = 'translateX(0px)'
        } else if (i == 1) {
          bgImg[1].style.transform = 'translateX(0px)'
        } else if (i == 2) {
          bgImg[2].style.transform = 'translateX(0px)'

        } else if (i == 3) {
          bgImg[3].style.transform = 'translateX(0px)'

        }
      })
    })


    ///////////////////////////////////////////////////////////


    val.addEventListener('click', () => {
      // console.log(bgHover[0]);      
      // console.log(i);
      bgImg.forEach((item, index) => {
        if (i == 0) {
          bgImg[0].style.transform = 'translateX(0px)'
        }
        if (i == 1) {
          bgImg[1].style.transform = 'translateX(0px)'
        } else {
        }
        if (i == 2) {
          bgImg[2].style.transform = 'translateX(0px)'
        } else {
        }
        if (i == 3) {
          bgImg[3].style.transform = 'translateX(0px)'

        }
      })
    })
  })

















  ////////////////////////////////////////////////////////
  const div = document.querySelectorAll('#art1>div')
  const p = document.querySelectorAll('#art1>div>p')
  const box1 = document.querySelector('#first>#box1')
  // console.log(box1);
  const box = document.querySelector('#first')
  const box2 = document.querySelector('#box2')
  // console.log(art1[2]);
  // console.log(div[0].children[0]);
  const li = document.querySelectorAll('nav>ul>li')
  // console.log(li[0]);

  window.addEventListener('scroll', (e) => {
    let x = window.scrollY
    li[0].style.backgroundColor = 'skyblue'
    li[0].style.width = x / 30 + 'px'

    // console.log(x);
    if (x <= 300) {
      box1.style.opacity = '0'

    }
    else if (x <= 3000) {
      box1.style.opacity = '1'
      box1.style.height = x / 4 + 'px'
      box1.classList.add('z')
      box1.children[0].style.filter = 'blur(0px)'
      box1.children[0].classList.add('s')
      // nav.style.classList.remove('color')
      nav.style.backgroundColor = ''
      nav.style.color = 'black'

      li.forEach(val => {
        val.classList.remove('color')
      })
    }
    else {
      box1.style.height = '100vh'
      box1.classList.remove('z')
      box1.children[0].style.filter = 'blur(3px)'
      box1.children[0].style.transform = 'scale(2)'
      box1.children[0].style.transition = '5s'
      nav.style.color = 'white'
      nav.style.backgroundColor = '#191b20f8'

      li.forEach(val => {
        val.classList.add('color')
      })

    }
    // pictures////////////
    if (x >= 3300) {
      box2.children[0].style.width = '200px'
      li[0].style.backgroundColor = ''
      li[0].style.width = '0px'
      // console.log(li[1]);
      li[1].style.backgroundColor = 'skyblue'
      li[1].style.width = ((x / 30) - 110 + 'px')

      // console.log(li[1].style.width= ((x/30)-100 + 'px'));

    } else {
      box2.children[0].style.width = '0px'

    }
    if (x >= 3500) {
      box2.children[2].style.width = '150px'
    } else {
      box2.children[2].style.width = '0px'

    }
    //end pircures//////////////////////////////////////////////////



    ////articales children span h1 p /////////////////////////////////
    if (x >= 4000) {
      div[0].style.opacity = '1'
      // div[0].children.style.width=
      anime()
    } else {
      div[0].style.opacity = '0'

    }
    if (x >= 4200) {
      div[1].style.opacity = '1'
    } else {
      div[1].style.opacity = '0'

    }
    if (x >= 4300) {
      div[2].style.opacity = '1'
    } else {
      div[2].style.opacity = '0'

    }
    if (x >= 4500) {
      div[3].style.opacity = '1'
      box1.style.height = '100vh'
    } else {
      div[3].style.opacity = '0'
    }
    if (x >= 5200) {
      box1.style.opacity = '0'
      box.style.opacity = '0'
    } else if (x >= 300) {
      box1.style.opacity = '1'
      box.style.opacity = '1'
    }

    // picturesmove on//////////////////////////////////////////////////
    const fig = document.querySelector('#pic-fig')
    const para = document.querySelector('.lorem-pic')
    // console.log(fig);


    if (x >= 5100) {
      nav.style.opacity = '0.5'
      fig.style.opacity = '1'
      para.style.opacity = '1'
    } else {
      fig.style.opacity = '0'
      para.style.opacity = '0'
      nav.style.opacity = '1'
    }
    if (x >= 5600) {

      li[2].style.backgroundColor = 'skyblue'
      li[2].style.width = ((x / 28) - 200 + 'px')

      const img = document.querySelector('#pic-fig>img')
      
      img.style.transition = '1s'
      fig.innerHTML = `
      <img src="asset/img/art3.webp" alt="">
      `
      para.innerHTML = `
       <span>[02]</span>
       <h3>NeoCultural Couture</h3>
       <h2>Coded by Alikhazaei<br>
        frontend Developer</h2>
       `

    } else {
      fig.innerHTML = `
      <img src="asset/img/art2.webp" alt="">
      `
      para.innerHTML = `
       <span>[01]</span>
       <h3>codex</h3>
        <h2>Coded by Alikhazaei<br>
        frontend Developer</h2>`
    }
    if (x >= 6300) {
      li[1].style.backgroundColor = ''
      li[1].style.width = '0px'
      fig.innerHTML = `
      <img src="asset/img/art4.webp" alt="">
      `
      para.innerHTML = `
       <span>[03]</span>
       <h3>Sundown Studio</h3>
        <h2>Coded by Alikhazaei<br>
        frontend Developer</h2>`
    }
  
    if (x >= 6800) {
      fig.innerHTML = `
      <img src="asset/img/art7.webp" alt="">
      `
      para.innerHTML = `
       <span>[04]</span>
       <h3>Ruby Aro</h3>
        <h2>Coded by Alikhazaei<br>
        frontend Developer</h2>`

    }
    if (x >= 7500) {
      fig.innerHTML = `
      <img src="asset/img/art6.webp" alt="">
      `
      para.innerHTML = `
       <span>[05]</span>
       <h3>Sister Mary</h3>
        <h2>Coded by Alikhazaei<br>
        frontend Developer</h2>`

    } if (x >= 8300) {
      fig.style.opacity = '0'
      para.style.opacity = '0'
      li[2].style.backgroundColor = ''
      li[2].style.width = '0'
      li[3].style.backgroundColor = 'red'
      li[3].style.width = '90px'
    } else {
      li[3].style.backgroundColor = ''

    }
    if (x >= 8400) {
      spanFooter.style.transform = 'translateX(0px)'
      spanFooter.style.opacity = '.5'
    } else {
      // spanFooter.style.transform='translateX(-2000px)'
      spanFooter.style.opacity = '0'
    }
    function anime() {
      let flag = true
      if (x >= 4000 && x <= 4900) {
        const text = document.querySelectorAll('.fancy')
        // console.log(text);

        text.forEach(e => {
          const strText = e.textContent
          // console.log(strText);
          const splitText = strText.split('');
          // console.log(splitText);
          e.textContent = ''
          for (let s = 0; s < splitText.length; s++) {
            e.innerHTML += '<h6>' + splitText[s] + '</h6>';
            if (flag != true) {
              break;
            }
          }

          let char = 0;
          let timer = setInterval(onTick, 50);

          function onTick() {
            const span = e.querySelectorAll('h6')[char];
            // console.log(span);
            span.classList.add('fade')
            char++
            if (char === splitText.length) {
              end()
              return;
            }
          }
          function end() {
            clearInterval(timer)
            timer = null
          }

          ////////////////////////////////////////////////////////////////////////////


        })

      }

    }
    const img = document.querySelector('#pic-fig>img')
    fig.addEventListener('mousemove',(e)=>{
 
      const width = e.offsetX
      const height = e.offsetY
      
      // console.log(width+':'+height);
      img.style.transformOrigin = `${width}px ${height}px`
      img.style.transform='scale(1.2)'

    })
    fig.addEventListener('mouseleave',()=>{
      
      img.style.transformOrigin = 'center'
      img.style.transform='scale(1)'
    })
    if(x>=5000 && x<=8400){
      img.addEventListener('mouseenter',()=>{
      mouse.classList.add('mouseenter')
      mouse.style.transform='scale(1.5)'
      mouse.style.backgroundColor='white'
      mouse.style.opacity='.7'
      inMouse.style.opacity='1'
      inMouse.style.color='black'
      inMouse.innerHTML='zoom'
    })
    img.addEventListener('mouseleave',()=>{
      mouse.classList.remove('mouseenter')
      // inMouse.style.opacity='1'
      inMouse.innerHTML='view'
      mouse.style.transform='scale(1)'
      mouse.style.backgroundColor='black'
      mouse.style.opacity='.5'
      inMouse.style.opacity='1'
      inMouse.style.color='white'
    })
    }
  })
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////foooter////////////////////////////
  const ulFooter = document.querySelector('footer>ul')
  const h1Footer = document.querySelector('footer>h1')
  const spanFooter = document.querySelector('footer>span')
  spanFooter.style.transform = 'translateX(2000px)'

  // console.log(div);
  div.forEach((e) => {
    // console.log(div);
    e.addEventListener('mouseleave',()=>{
    mouse.style.transform='scale(1)'
    mouse.style.backgroundColor='black'
    mouse.style.opacity='0.5'
    inMouse.innerHTML='view'
    })
    e.addEventListener('mouseenter', () => {
    mouse.style.transform='scale(1.5)'
    mouse.style.backgroundColor='white'
    mouse.style.opacity='0.2'
    inMouse.innerHTML=''
      //          ///////////////////////////////animation///////////////////////
      //          const text = document.querySelectorAll('.fancy')
      // console.log(text);

      // text.forEach(e => {
      //   const strText = e.textContent
      //   console.log(strText);
      //   const splitText = strText.split('');
      //   console.log(splitText);
      //   e.textContent = ''
      //   for (let s = 0; s < splitText.length; s++) {
      //     e.innerHTML += '<h6>' + splitText[s] + '</h6>';
      //   }

      //   let char = 0;
      //   let timer = setInterval(onTick, 50);

      //   function onTick() {
      //     const span = e.querySelectorAll('h6')[char];
      //     console.log(span);
      //     span.classList.add('fade')
      //     char++
      //     if (char === splitText.length) {
      //       end()
      //       return;
      //     }
      //   }
      //   function end() {
      //     clearInterval(timer)
      //     timer = null
      //   }
      // })

      // ///////////////////////////////////////////////////////////


      const paras = document.querySelectorAll('.paras')
      console.log(paras[0]);

      paras.forEach(e => {
        const strText = e.textContent
        // console.log(strText);
        const splitText = strText.split('');
        // console.log(splitText);
        e.textContent = ''
        for (let s = 0; s < splitText.length; s++) {
          e.innerHTML += '<h5>' + splitText[s] + '</h5>';
        }

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick() {
          const span = e.querySelectorAll('h5')[char];
          // console.log(span);
          span.classList.add('paras')
          char++
          if (char === splitText.length) {
            end()
            return;
          }
        }
        function end() {
          clearInterval(timer)
          timer = null
        }
      })





    })
  })

  ///////////////////////////////////mouse design////////////
  const mouse = document.querySelector('.mouse')
  const inMouse = document.querySelector('.mouse>span')
  window.addEventListener('mousemove',(e)=>{
    let x = e.clientX
    let y = e.clientY
    // console.log('x'+ x);
    // console.log('y'+ y);
    mouse.style.top=y + 'px'
    mouse.style.left=x + 'px'
    
  })

  li.forEach(val=>{
    val.addEventListener('mouseenter',()=>{
      mouse.classList.add('mouseenter')
    })
    val.addEventListener('mouseout',()=>{
      mouse.classList.remove('mouseenter')
    })
  })
  // console.log(p);
  // p.forEach(val=>{
  //   val.addEventListener('mouseenter',()=>{
  //     mouse.classList.add('mouseenter')
  //   })
  //   val.addEventListener('mouseout',()=>{
  //     mouse.classList.remove('mouseenter')
  //   })
  // })
  
  const footerLi = document.querySelectorAll('footer>ul>li')
  footerLi.forEach(val=>{
    val.addEventListener('mouseenter',()=>{
      mouse.style.transform='scale(1.5)'
      inMouse.innerHTML='connect'
      val.style.transform='scale(1.2)'
      val.style.transition='0.4s'
    })
    val.addEventListener('mouseleave',()=>{
      mouse.style.transform='scale(1)'
      inMouse.innerHTML='view'
      val.style.transform='scale(1)'
    })
  })

  const email = document.querySelector('footer>h1>strong')

   // console.log(email);
   email.addEventListener('mouseenter', () => {
    mouse.style.transform = 'scale(1.5)'
    mouse.style.backgroundColor = 'white'
    mouse.style.backgroundColor.opacity = '1'
    mouse.style.opacity = '1'

    inMouse.style.color = 'black'
    inMouse.innerHTML = 'click'
  })
  email.addEventListener('mouseleave', () => {
    mouse.style.transform = 'scale(1)'
    mouse.style.backgroundColor = 'black'
    inMouse.style.color='white'
    inMouse.innerHTML = 'view'
    mouse.style.opacity = '0.5'

  })
  email.addEventListener('mousedown', () => {
    word()
  })

  function word() {
    const strText = email.textContent
    console.log(strText);
    const splitText = strText.split('');
    console.log(splitText);
    email.textContent = ''
    for (let s = 0; s < splitText.length; s++) {
      email.innerHTML += '<strong>' + splitText[s] + '</strong>';

    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      const span = email.querySelectorAll('strong')[char];
      // console.log(span);
      span.classList.add('fade')
      setTimeout(() => {
        span.classList.remove('fade')
      }, 200);
      char++
      if (char === splitText.length) {
        clearInterval(timer)
        timer = null
      }
    }
  }


  //////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////
