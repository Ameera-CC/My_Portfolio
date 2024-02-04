
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
