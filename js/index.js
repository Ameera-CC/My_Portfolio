
    function displayContent(clickedTab){
        console.log(clickedTab)
        if(clickedTab === 'skills'){
            document.querySelector('.skills-tab').classList.add('active-link')
            document.querySelector('.exp-tab').classList.remove('active-link')
            document.querySelector('.edu-tab').classList.remove('active-link')

            document.querySelector('.experience-content').classList.remove('active-tab')
            document.querySelector('.education-content').classList.remove('active-tab')
            document.querySelector('.skills-content').classList.add('active-tab')

        }
        else if(clickedTab === 'experience'){
            document.querySelector('.edu-tab').classList.remove('active-link')
            document.querySelector('.skills-tab').classList.remove('active-link')
            document.querySelector('.exp-tab').classList.add('active-link')

            document.querySelector('.skills-content').classList.remove('active-tab')
            document.querySelector('.experience-content').classList.add('active-tab')
            document.querySelector('.education-content').classList.remove('active-tab')


        }
        else if(clickedTab === 'education'){
            document.querySelector('.skills-tab').classList.remove('active-link')
            document.querySelector('.exp-tab').classList.remove('active-link')
            document.querySelector('.edu-tab').classList.add('active-link')

            document.querySelector('.skills-content').classList.remove('active-tab')
            document.querySelector('.experience-content').classList.remove('active-tab')
            document.querySelector('.education-content').classList.add('active-tab')

        }


    }


    var sideMenu = document.getElementById('side-menu');

    function openMenu(){
        console.log('opentab')
        sideMenu.style.right= '0';

    }


    function closeMenu(){
        console.log('close tab')
        sideMenu.style.right= '-200px';

    }




    const scriptURL = 'https://script.google.com/macros/s/AKfycbzQkggmgb1y5eS8UpSQMp7BlMXASf2ydeZDm9qZ14iewX0gcDiOI4S07DSM3iEYlYwC/exec'
    const form = document.forms['submit-to-google-sheet']
  
    const succesMsg = document.getElementById('submit-success');

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            succesMsg.innerHTML ='Message sent succesfully';
            setTimeout(() => {
                succesMsg.innerHTML ='';
            }, 3000);
            form.reset();
        })

        .catch(error => console.error('Error!', error.message))
    })

    