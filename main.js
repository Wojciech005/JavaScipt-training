
        const sectionFirst = document.querySelector('section.first')
        const sectionSecond = document.querySelector('section.second')
        const div = document.querySelector('div')

        const allImages = [{
                img: 'url(photo1.jpg)'
            },
            {
                img: 'url(photo2.jpg)'
            },
            {
                img: 'url(photo3.jpg)'
            },
            {
                img: 'url(photo4.jpg)'
            },
            {
                img: 'url(photo5.jpg)'
            }
        ]

            const allColors = ['green', 'black', 'pink', 'red', 'blue']

        


        const start = () => {
            const moveNumber = event.clientX;
            
            
            
            // console.log(randomImages)
            if (moveNumber < 200){
            sectionFirst.style.backgroundImage = allImages[0].img;
            sectionSecond.style.backgroundColor = 'red'
            sectionSecond.textContent = '  MY';
            }

            if(moveNumber > 200 ) {
            sectionFirst.style.backgroundImage = allImages[1].img;
            sectionSecond.style.backgroundColor = 'blue';
            sectionSecond.textContent = 'PROJECTS';
            }
            
            if(moveNumber > 400) {
            sectionFirst.style.backgroundImage = allImages[2].img;
            sectionSecond.style.backgroundColor = 'green';
            sectionSecond.textContent = 'ARE';
            }
            if(moveNumber > 600) {
            sectionFirst.style.backgroundImage = allImages[3].img;
            sectionSecond.style.backgroundColor = 'pink';
            sectionSecond.textContent = 'THE BEST';
            }
            if(moveNumber > 750) {
                sectionFirst.style.backgroundImage = allImages[4].img;
                sectionSecond.style.backgroundColor = 'orange';
                sectionSecond.textContent = '!!!!'
                }
            div.textContent = `Mouse index:  ${moveNumber}`;
            div.style.textAlign = 'center'
            
        }


        div.addEventListener('mousemove', start);