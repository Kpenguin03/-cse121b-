const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = [] // this is my array
//let itemsOwned = {}

function startGame() {
    state = []
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex) //sets the id
    textElement.innerText = textNode.text //makes text the name as the options I write later.
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => { // this is my array method
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text //My buttons should show the correct text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option)) //This is my DOM interaction
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "You finally turned 18 and are old enough to move out of your parents house! Will you...",
        options: [
            {
                text: 'go off to colledge',
                setState: {education: true },
                nextText: 2
            },
            {
                text: 'leave to the military',
                nextText: 3
            },
        ]
    },
    {
        id: 2,
        text: ( state + "College turns out to be really expensive. You could get a part time job or wait till you graduate to pay for your schooling"),
        options: [
            {
                text: 'Work part time',
                nextText: 4
            },
            {
                text: 'Focus on school for now.',
                nextText: 5
            },
        ]
    },
    {
        id: 3,
        text: "You survive basic training only to learn that bears from another planet are invading Earth and all members of the military are required to engage in space combat to push back the space bears.",
        options: [
            {
                text: 'Go to space',
                nextText: 6
            },
            {
                text: 'Run away, space bears are scary',
                nextText: 7
            },
        ]
    },
    {
        id: 4,
        text: "You decide to work part time and go to school. Both are too time consuming. ",
        options: [
            {
                text: 'Endure because your hard work will pay off',
                nextText: 8
            },
            {
                text: 'Never mind I am joining the military',
                nextText: 3
            },
        ]
    },
    {
        id: 5,
        text: "You finally graduate but now how a mountain to pay off in student loans. Luckily because you studied so hard you were able to get your dream job",
        options: [
            {
                text: 'Click to Restart',
                nextText: 1
            },
        ]
    },
    {
        id: 6,
        text: "In space you discover you happen to be the best piolet and end up becoming a world hero for using your dog fighting skills to win the war against the bears",
        options: [
            {
                text: 'Consider this a happy ending',
                nextText: 9
            },
            {
                text: 'Continue to become a space lord and rule the universe',
                nextText: 10
            },
        ]
    },
    {
        id: 7,
        text: "You run away and in the confusion of the bear invasion they nobody ever notices.",
        options: [
            {
                text: 'Consider this a happy ending',
                nextText: 9
            },
            {
                text: 'Go to college',
                nextText: 2
            },
        ]
    },
    {
        id: 8,
        text: "You were right, You graduate debt free and are offered your dream job!",
        options: [
            {
                text: 'Click to Restart',
                nextText: 1
            },
        ]
    },
    {
        id:9 ,
        text: "The End",
        options: [
            {
                text: 'Click to Restart',
                nextText: 1
            },
        ]
    },
    {
        id: 10,
        text: "You conquer the universe successfully. Everyone fears you, The end",
        options: [
            {
                text: 'Click to Restart',
                nextText: 1
            },
        ]
    },

]

startGame()

