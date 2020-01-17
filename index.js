const panelData = [
    {
        title: "First Panel",
        content: "No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an idel and if they can't stop you then you become something else entirely. Legend, Mr Wayne.",
        subcontent: "this is subcontent"
    },
    
    {
        title: "Second Panel",
        content: "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
        subcontent: "this is subcontent"
    },
    {
        title: "Third Panel",
        content: "I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring. I've had a change of heart. I don't want Mr Reese spoiling everything but why should I have all the fun? Let's give someone else a chance. If Coleman Reese isn't dead in 60 minutes then I blow up a hospital.",
        subcontent: "this is subcontent"
    },
    {
        title: "Fourth Panel",
        content: "I'm here to  the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die.",
        subcontent: "this is subcontent"
    }
    ]

console.log(panelData);
// console.log(typeof 'love');

function createBox(title, content, subcontent) {
    // create elements
    const centerBox = document.createElement('div');
    const boxTitle = document.createElement('h2');
    const innerBox = document.createElement('div');
    const contentInfo = document.createElement('p');
    const subcontentInfo = document.createElement('p');
    const body = document.querySelector('body');

    
    // console.dir(body);
    // console.dir(innerBox);
    // console.dir(panelData);

    // setup the structure
    centerBox.append(boxTitle);
    centerBox.append(innerBox);
    innerBox.append(contentInfo);
    innerBox.append(subcontentInfo);

    // addd classes
    centerBox.classList.add('center-box');
    boxTitle.classList.add('box-title');
    innerBox.classList.add('inner-box');
    contentInfo.classList.add('content-info');
    subcontentInfo.classList.add('sub-content');

    // set text content
    boxTitle.textContent = title;
    contentInfo.textContent = content;
    subcontentInfo.textContent = subcontent;


    body.addEventListener('click', () => {
        body.style.backgroundColor = 'blue';

    })

    boxTitle.addEventListener('click', (e) => {
        boxTitle.style.color = "pink";
        e.stopPropagation();
    })

    subcontentInfo.addEventListener('click', (e) => {
        subcontentInfo.style.fontSize = "10rem";
        e.stopPropagation();
    })

    return centerBox
}

const container = document.querySelector('.container');
// console.log(container);

panelData.map(data => {
    container.append(createBox(data.title, data.content, data.subcontent))
})