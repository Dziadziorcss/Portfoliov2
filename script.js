var typed = new Typed('.pisz', {
    strings: ["", "Web Desginerem!", "Administratorem IT!", "Samoukiem!"],
    typeSpeed:60,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector('.nav'),
        navlist = nav.querySelectorAll('li'),
        totalNavList = navlist.length;
        allSection = document.querySelectorAll('section'),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++) {
            const a= navlist[i].querySelector('a');
            a.addEventListener('click', function() {
                removePowrot();
                for(let i=0; i<totalSection; i++) {
                    allSection[i].classList.remove('powrot');
                }
                for(let j=0; j<totalNavList; j++) {
                    if(navlist[j].querySelector('a').classList.contains('aktywny')) {

                        addPowrot(j);
                        // allSection[j].classList.add('powrot');
                    }
                    navlist[j].querySelector('a').classList.remove('aktywny')
                }
                this.classList.add('aktywny')
                showSection(this);
                if(window.innerWidth < 1200) {
                    pierwszaSectionTogglerBtn();
                }
            })
        }
        function removePowrot() {
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.remove('powrot');
        }
        }
        function showSection(element) {
            for(let i=0; i<totalSection; i++) {
                allSection[i].classList.remove('aktywny')
            }
            const target=element.getAttribute('href').split('#')[1];
            document.querySelector('#' + target).classList.add('aktywny')
        }
    function addPowrot(num) {
        allSection[num].classList.add('powrot');
    }
    function updateNav(element) {
        for(let i=0; i<totalNavList; i++ ) {
            navlist[i].querySelector('a').classList.remove('aktywny');
            const target=element.getAttribute('href').split('#')[1];
            if(target === navlist[i].querySelector('a').getAttribute('href').split('#')[1]) {
                navlist[i].querySelector('a').classList.add('aktywny');
            }
        }
    }
    document.querySelector('.btn.zat').addEventListener('click', function() {
        const sectionIndex = this.getAttribute('data-section-index');
        // console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removePowrot();
        addPowrot(sectionIndex);
    })
    const navWlaczBTN = document.querySelector('.nav-wlacz'),
        pierwsza = document.querySelector('.pierwsza');
        navWlaczBTN.addEventListener('click', () => {
            pierwszaSectionTogglerBtn();
        })
        function pierwszaSectionTogglerBtn() {
            pierwsza.classList.toggle('open');
            navWlaczBTN.classList.toggle('open');
            for(let i=0; i<totalSection; i++ ) {
                allSection[i].classList.toggle('open');
            }
        }