// This funciton was supposed to be in the helpers.js but require did not work
let blockClicksFor = (element, time) => {
    element.classList.add("pointer-none")

    setTimeout(() => {
        element.classList.remove("pointer-none")
    }, time * 1000)
}

window.onload = () => {
    if (window.location.pathname != "/") {
        return null
    }

let feelingsLayer0 = ["a", "b", "c", "d", "e", "f", "g"];
let alphabeth = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "x", "w", "y", "z"]
let feels0 = ["happy", "sad", "disgusted", "angry", "fearful", "bad", "surprised"]
let center = document.getElementById("center");
let firstLayer = document.getElementById("layer-0");
let secondLayer = document.getElementById("layer-1");
let curretLayer2 = "";
let thirdLayer = document.getElementById("layer-2");
let curretLayer3 = "";
let selectedColor = null;

let feelings0 = {}
let feelings1 = {}
let feelText = {}

feelingsLayer0.forEach((feel, i) => {
    switch(feel) {
        case "a":
            feelings0[`${feel}0`] = { subFeels: ["Playful", "Content", "Interested", "Proud", "Accepted", "Powerful", "Peaceful", "Trusting", "Optimistic"]}
            feelText[`${feel}0`] = { text: `
            <p>Joy, or happiness, is our brain’s way of telling us that something – be it the feeling of sun on the face, or the company of a loved one – is good for us, encouraging us to seek it out, just as sadness and disgust encourage us to avoid the unhealthy or dangerous. We might experience joy as a result of events such as being reunited with an old friend, or finding a sentimental letter we thought was long gone.</p>
            <p>When we feel joy when the neurotransmitters dopamine and serotonin are released into our body.</p>
            <p>The health benefits of experiencing joy include:</p>
            <ul>
                <li>Boosting the immune system</li>
                <li>Reducing stress</li>
                <li>Managing pain</li>
            </ul>
            <a href="https://www.scienceofpeople.com/emotions-list/#sop-joy" target="_blank">Read more at <strong>Science for People</strong></a>
            `}
            break;
        case "b":
            feelings0[`${feel}0`] = { subFeels: ["Lonely", "Vulnerable", "Despair", "Guilty", "Depressed", "Hurt"]}
            feelText[`${feel}0`] = { text: `
            <p>Humans depend on each other to survive. Sadness is the emotion that makes us remember that fact.</p>
            <p>Young children feel sad when they are separated from their parents. It’s that sadness that prompts them to cry and/or find their parents, potentially saving their lives. As people grow older, or if we drift from our loved ones, the sadness that accompanies separation is what drives people to continuously invest in relationships.</p>
            <p>As painful as sadness is, it’s not all bad. Psychologists have discovered some surprising benefits of sadness that can help us make light of the emotion and its circumstances.</p>
            <p>According to Joseph Paul Forgas, Ph.D., sadness reduces two key judgement biases that affect how we view people.</p>
            <ul>
                <li>
                <strong>The Fundamental Attribution Error: </strong>
                This is the tendency to believe that people are intentional when they make mistakes or say something wrong. When you’re sad, you’re less likely to think the worst of people.
                </li>
                <li>
                <strong>The Halo Effect: </strong>
                On the opposite end of the spectrum, people also believe that certain people–whether it’s because they’re attractive, successful, or family members–can do no wrong. Sadness gives you a less biased view of people so you also don’t exaggerate their goodness.
                </li>
                <li>Managing pain</li>
            </ul>
            <p>Studies show sadness can be a powerful motivational tool. When you’re happy you tend to want to stay where you are, and may not feel as driven to improve because you don’t feel the need to. That’s not the case with sadness.</p>
            <p>While you shouldn’t go out of your way to make yourself sad if you are lacking motivation, allowing yourself to embrace the sadness of not being where you want to be in life, whether it’s with your relationships, career, physical health, etc. can motivate you to put in the effort to get to a happier place.</p>
            <strong>How to Be Less Sad</strong>
            <p>Despite its short-term benefits, frequently feeling sad lowers your quality of life. Luckily, how you deal with sadness has a huge effect on how powerful it is. According to Deepak Chopra, the best way to cope is to be proactive.</p>
            <p>Here are some of his tips: </p>
            <ul>
                <li>Instead of focusing on your sadness, take actions to be happier.</li>
                <li>Share your feelings with a friend/loved one</li>
                <li>Focus on improving your well-being. Plenty of research has shown that exercise and eating healthy boosts your mood</li>
                <li>Recognize what’s making you sad and don’t obsess over the feeling. Everyone experiences sadness and throwing yourself a pity-party isn’t going to help.</li>
            </ul>
            <a href="https://www.scienceofpeople.com/emotions-list/#sop-disgust">Read more at <strong>Science for People</strong></a>
            `}
            break;
        case "c":
            feelings0[`${feel}0`] = { subFeels: ["Repelled", "Awful", "Disappointed", "Disapproving"]}    
            feelText[`${feel}0`] = { text: `
            <p>If I asked you to list some things that are disgusting, what would you say? My list (and I imagine yours too) would include:</p>
            <ul>
                <li>Vomit</li>
                <li>Rotting food</li>
                <li>Feces</li>
                <li>And lots of other stereotypically disgusting things.</li>
            </ul>
            <p>We’re disgusted by things we think are bad, whether it is rotting food or cockroaches in the bathroom. In pre-modern civilizations, this was a great trait because it prevented people from eating poisonous food and doing things that could make them sick.</p>
            <strong>Everyone has a different threshold for what triggers their disgust.</strong>
            <p>The more disgustable you are, the more judgmental you are. Using these findings, psychologist David Pizarro discovered that people’s threshold for disgust directly correlates with where they stand on the political spectrum. Extreme conservatives are easily disgusted while it is challenging to gross out a fierce liberal.</p>
            <a href="https://www.scienceofpeople.com/emotions-list/">Read more at <strong>Science for People</strong></a>
            `}
        break;
        case "d":
            feelings0[`${feel}0`] = { subFeels: ["Critical", "Distant", "Frustrated", "Agressive", "Mad", "Bitter", "Humiliated", "Let down"]} 
            feelText[`${feel}0`] = { text: `
            <p>Psychological studies have identified three causes of anger: when our desires, goals or expectations are not met, when we feel threatened, and/or when we are using anger to mask other emotions.</p>
            <strong>Are you familiar with that feeling as if your blood is boiling? That is your body releasing adrenaline in response to stress.</strong>
            <p>One of the first things that happens when you feel angry is that you go into the fight or flight response. If you’re a non-confrontational person or in a position, such as being at work, where you don’t feel comfortable showing anger, your instinct will tell you to get away from the source of your problem.</p>
            <p>Otherwise, your body picks the fight response, which is how we typically see anger. You raise your voice, make accusations, become defensive and show negative body language. These behaviors are harmful and irrational, yet we do them anyways because when we’re angry our perception of risk and danger is lowered.</p>
            <strong>While anger, or rather the stress it causes, is known to be bad for us, there are actually some benefits of experiencing this ancient emotion.</strong>
            <ul>
                <li><strong>Anger Makes Us Focus More on Rewards. </strong>
                We get angry when something isn’t going the way we wanted it to and the feeling reinforces our desire for whatever it is we’re struggling to get whether it’s a job promotion we feel like we deserve or the satisfaction of winning an argument. Psychologist Simon Laham says this is why anger is a critical part of overcoming adversity. When you’re upset because nothing is going right and you feel like the world is against you, anger is the fuel that drives you to prove everyone wrong. It’s why people feel so motivated to prove their haters wrong.
                /li>
                <li>
                <strong>When We’re Angry, We’re More Optimistic. </strong>
                It sounds contradictory, but being angry makes us think more positively about the future. This is because when we’re angry, we feel like we’re in control. Researchers put people in fearful and angry moods, and then asked them questions about accomplishing goals. The angry participants took up the challenge because they focused on how to achieve the reward, while the fearful participants were held back by the possibility of failure.
                </li>
                <li>
                <strong>Anger Boosts Creativity. </strong>
                Next time you’re angry, invest your energy in working on a difficult task. Studies show that when you’re angry, you experience heightened energy levels and your thought process becomes more flexible, allowing you to come up with more and more original ideas than you can in your neutral state.
                </li>
            </ul>
            <a href="https://www.scienceofpeople.com/emotions-list/">Read more at <strong>Science for People</strong></a>
            `}
            break;
        case "e":
            feelings0[`${feel}0`] = { subFeels: ["Threatened", "Rejected", "Weak", "Insecure", "Anxious", "Scared"]} 
            feelText[`${feel}0`] = { text: `
            <p>We become afraid when we encounter things and situations that we don’t understand, we can’t control, and/or we suspect will cause harm to us. In our modern world, many of our fears don’t seem logical. Is there any sense in fearing a money spider curled up in the corner of our bedroom? Or the social anxiety you may feel when you enter a party?</p>
            <p>These days, probably not, but like all of your emotions fear has developed to keep you safe. Your tiny arachnid roommate won’t pose much threat here, but that would have been very different if you were hunting in a tropical forest with venomous spiders.</p>
            <strong>How to Be Less Fearful</strong>
            <p>Just because fear is a natural response doesn’t mean you can’t limit its power. Here’s how to be less fearful:</p>
            <ul>
                <li>
                <strong>Preparation: </strong>
                If you’re scared of activities that you know roughly what to expect such as job interviews, going to the dentist and confronting people, the best way to overcome it is to prepare. Practicing or thinking through what is going to happen prior to the event itself removes much of the uncertainty that causes fear.
                </li>
                <li>
                <strong>Take Action: </strong>
                Fear stems from a lack of control so focusing on things that you can control can help reduce your feelings. If you’re fearful of something major that you don’t have much control over, find one small thing that you can take action on and focus your attention on that so fear doesn’t overwhelm you.
                </li>
                <li>
                <strong>Relax: </strong>
                Research shows that it is easier to let go of your fear by engaging in a self-soothing behavior that relaxes you than it is to try to talk yourself out of being afraid. Find the self-soothing behavior that distracts you from your fear whether it’s prayer, meditation, yoga, a hobby etc. and put more time into this practice when you’re afraid.
                </li>
            </ul>
            <a href="https://www.scienceofpeople.com/emotions-list/#sop-fear">Read more at <strong>Science for People</strong></a>
            `}
            break;
        case "f":
            feelings0[`${feel}0`] = { subFeels: ["Bored", "Busy", "Stressed", "Tired"]} 
            feelText[`${feel}0`] = { text: `
            <p>Did you ever wonder why we sometimes experience emotions and can’t identify what caused us to experience them? We’re just going through our day and suddenly feel depressed, or anxious, but nothing significant happened. </p>
            <p>Usually, but not always, we feel emotions as a result of some experience, whether it is happening now or is a memory of a past experience. Feeling them is not something we have control over but interpreting them is. The thought process that takes place around the experience of an emotion quite possibly can increase or decrease its intensity and influence our behaviors that follow. </p>
            <p>Our judgement of the thought process that follows an emotion can influence whether we accept the emotion and interpretation or whether we adjust the interpretation and try to influence the emotion being experienced. When we struggle with depression or anxiety it’s difficult to restructure our thinking to have a positive outcome. There are areas of our brain that remember emotional experiences, whether positive or negative, and these memories have both a conscious and unconscious effect on future experiences.</p>
            <a href="https://www.psychologytoday.com/intl/blog/rethinking-normal/201712/feeling-bad">Read more at <strong>Psychology Today</strong></a>
            `}
            break;
        case "g":
            feelings0[`${feel}0`] = { subFeels: ["Startled", "Confused", "Amazed", "Excited"]} 
            feelText[`${feel}0`] = { text: `
            <p>Surprise is our instant reaction whenever we face something unexpected, whether that’s a piece of good news like your first grandchild, or the shock of your car suddenly skidding on the ice. It begins with being frozen or stunned, followed by an attempt to understand the new experience, then a reaction to it – all of which can take as little time as a few seconds, or as long as a week – followed by a need to share that experience with others.</p>
            <p>Neurologists have discovered that surprise stimulates the hippocampus, the part of the brain that stores and processes memories, which is why we can often remember pivotal moments from our childhoods in incredible detail. Psychologists believe that this is most likely a survival instinct that helps us to learn from new events and pass that learning on.</p>
            <p>According to Tania Luna and Leeann Renninger, authors of the book Surprise: Embrace the Unpredictable and Engineer the Unexpected, surprise unravels in four stages.</p>
            <ul>
                <li>
                <strong>Freeze: </strong>
                We’re stunned by the unexpected. This often comes with a gasp.
                </li>
                <li>
                <strong>Find: </strong>
                We try to figure it out.
                </li>
                <li>
                <strong>Shift: </strong>
                The surprise begins to change our perspective because it introduces us to something new.
                </li>
                <li>
                <strong>Share: </strong>
                We often feel compelled to tell others about our novel experiences.
                </li>
            </ul>
            <a href="https://www.scienceofpeople.com/emotions-list/#sop-surprise">Read more at <strong>Science for People</strong></a>
            `}
            break;
    }

    Array.from(document.getElementsByClassName("fa-caret-down")).forEach(drop => {
        drop.addEventListener("click", e => {
            if (Array.from(drop.parentNode.classList).includes("selected-feel")) {
                console.log("Drop menu now")
            }
        })
    })

    document.getElementById(feel + `0`).addEventListener("click", e => {
       // if (!e.target.getElementsByClassName("more-0")[0].classList.contains("shrinkedUp")) {
        if (e.target.nodeName === "BUTTON") {
            e.target.children[0].classList.remove("white")
            e.target.children[1].classList.add("shrinkedUp")
            if (e.target.classList.contains("selected-feel")) {
                e.target.childNodes[0].textContent = curretLayer2
            }
            secondLayer.classList.toggle("show-layer-1")
            console.log("WTF????  ", curretLayer2)

        if (Array.from(e.target.classList).includes("selected-feel")) {
            curretLayer2 = ""
            secondLayer.innerHTML = ""
            thirdLayer.innerHTML = ""
            center.classList.remove(...feels0)
            center.classList.remove("filled-center")
            center.classList.add("shrinkly-max");
            e.target.classList.remove("selected-feel-more")
            blockClicksFor(center, 1)
            setTimeout(() => {
                center.classList.remove("shrinkly-max");
            }, 600)
            Array.from(firstLayer.children).forEach(f => {
                f.classList.remove("unselected-feel")
                f.classList.remove("selected-feel")
            })
            if (curretLayer2.length > 1) {
                e.target.childNodes[0].textContent = curretLayer2;
            }
            return;
        }

        curretLayer2 = e.target.childNodes[0].textContent.match(/\w+/)[0]

        if (center.classList.length > 2) {
            center.classList.remove(...feels0)
            Array.from(firstLayer.children).forEach(f => {
                f.classList.remove("unselected-feel")
                f.classList.remove("selected-feel")
                center.classList.remove("filled-center")
            })
           console.log("WTF?")

        } else {
            center.classList.toggle(curretLayer2.toLowerCase())
            center.classList.add("filled-center")
           Array.from(firstLayer.children).forEach((f, i) => {
            if (f.childNodes[0].textContent.match(/\w+/)[0] === curretLayer2) {
                blockClicksFor(f, 0.35)
                setTimeout(() => {
                    f.classList.add("selected-feel")
                    console.log(curretLayer2)
                    f.classList.remove("unselected-feel")
                    selectedColor = window.getComputedStyle(document.getElementById("center"), null).getPropertyValue("background-color")
                }, 350)
            } else {
                f.classList.remove("selected-feel");
                f.classList.add("unselected-feel");
            }
            }) 

        }
        // Clean the inner HTML of the layer from the last click
        secondLayer.innerHTML = ""
        thirdLayer.innerHTML = ""
        //
        let blobNumber = feelings0[`${feel}0`].subFeels.length;
        let angle = (360 + (10.008 * blobNumber)/ blobNumber);

        feelings0[`${feel}0`].subFeels.forEach((f, index) => {
            let left = Math.cos(angle * index) * 200;
            let top = Math.sin(angle * index) * 200;
            secondLayer.innerHTML += `<button class="feel-1 ${curretLayer2.toLowerCase()}" id="${alphabeth[index]}1" type="button" style="left:${left}px; top:${top}px;">${f}</button>`
        })
        // Add event listener to layer 2 of buttons
        Array.from(secondLayer.children).forEach((subFeel, ind) => {
            // Show layer 2 feel
            subFeel.classList.toggle("open-1")
                subFeel.style.backgroundColor = selectedColor // window.getComputedStyle(document.getElementsByClassName("selected-feel")[0], null).getPropertyValue("background-color")
            //
            subFeel.addEventListener("click", ev => {
                subFeel.classList.add("shrinkly")
                if (curretLayer3 === ev.target.textContent) {
                    curretLayer3 = ""
                    thirdLayer.innerHTML = ""
                    return;
                }

                subFeel.classList.add("shrinkly");
                blockClicksFor(subFeel, 0.8)
                setTimeout(() => {
                    subFeel.classList.remove("shrinkly");
                }, 700)
        
                curretLayer3 = ev.target.textContent
                e.target.childNodes[0].textContent = ev.target.textContent
                // STOPED HERE
                e.target.children[1].innerHTML = (ev.target.textContent + " ").repeat(100)
                console.log("HEREEEEE")
                // Clean the inner HTML of the layer from the last click
                thirdLayer.innerHTML = ""
                //
                switch(subFeel.textContent) {
                    case "Playful":
                        feelings1[`${alphabeth[ind]}2`] = { 
                            subFeels: ["Aroused", "Cheeky"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ] 
                        }
                    break;
                    case "Content":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Free", "Joyful"],
                        feelsContent: [
                            `
                            <p>If you mean psychological freedom, then freedom is to have inner independence. It means to psychologically not depend on, or be attached to, anything. Psychologically you can only be attached to an idea, such as the idea of a spouse, a job, money, possessions, a religious belief, a political ideal, and so on. Therefore to be free means to have no psychological attachment to any idea, thought, or mental image at all. It means to belong to no political party or religious group. It means to live without an ounce of jealousy in relationship with a spouse, boyfriend, girlfriend, or any other person. It means to live with ambition at a job, including the ambition for success, authority, prestige, and so on. It means if you loss all your money and possessions, then it does not touch you. It means all that and more. More deeply it means to have no attachment to anything stored in memory, and therefore time. </p>
                            <p>Memory is the past, and the past means time. To have no attachment to time is to discover what it means to psychologically step outside the field of time. It means to not value the past or any projection of the future, and therefore it is the discovery of what it is to be immersed in the present. To be immersed in the present means to die to all yesterdays and tomorrow's from moment to moment, and thereby live wholly and entirely in the present. As a result every form of inner hurt, struggle, and sorrow ends. That is what freedom feels like. It feels like a life without any inner hurt or sorrow at all, and therefore a life with an inner contentment that depends on nothing. Real contentment depends on nothing, because any form of dependence implies fear. There is fear to lose whatever is the dependence, and fear denies contentment. Find out what ...</p>
                            <p>Read more at <a href="https://www.quora.com/How-does-freedom-feel">quora</a></p>`,

                            `
                            <p>
                            Joyfulness is a state of being extremely happy. The joyfulness of a bunch of little kids in a bouncy castle is hard to beat.                            </p>
                            <p>
                            Anything that gives you a sense of deep pleasure or excited happiness produces joyfulness, from being surprised by an old friend you haven't seen in years to watching your favorite team finally win a big competition. When you're experiencing true joyfulness, you can't help but smile. We can trace joyfulness back to a root that means "to rejoice."                            </p>
                            <p>Read more at <a href="https://www.vocabulary.com/dictionary/joyfulness">vocabulary.com</a></p>
                            `
                        ]  }
                    break;
                    case "Interested":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Curious", "Inquisitive"],
                            feelsContent: [
                                `
                                <p>Curiosity is a familiar feeling among people.</p>
                                <p>But as soon as we scrutinize that feeling, curiosity reveals itself to be a complex emotion indeed. Just ask yourself: Is curiosity a positive feeling or a negative feeling? Is it more like frustration or more like anticipation? Is it a painful reminder of what we don't (yet) know, or a thrilling beacon towards what we might soon discover?</p>
                                <p>Actually, curiosity can be all of these things — and more. Like lust, curiosity has positive and negative faces: one pointed (with happy anticipation!) towards what we desire, one pointed (with cruel frustration!) towards what we have not yet obtained — and may never obtain.</p>
                                <p>But unlike lust, the object of curiosity's desire is information. Curiosity is all about learning what we do not (yet) know.</p>
                                <p>Of course, not all feelings of curiosity are the same. Curiosity can be more or less pleasurable, more or less aggravating. So what accounts for this variation? Do some situations elicit more pleasurable forms of curiosity than others?</p>
                                <p>Read more at <a href="https://www.npr.org/sections/13.7/2017/09/25/553443078/is-curiosity-a-positive-or-negative-feeling">npr - culture</a></p>`,

                                `
                                <p>
                                Inquisitive is also considered as a synonym to curious. However, it is mainly [Inquisitive] concerned with the enquiry that is made in order to solve the curiosity.  An enquiry is a part of the investigation in order to reach the answers. An inquisitive person is involved in reoccurring questions.                                </p>
                                <p>
                                It is also defined as an intellectual curiosity, as it may include learning about the things that are not of immediate use.
                                </p>
                                <p>
                                Sometimes, inquisitive is also associated with prying in an annoying way. Thus, the word can also be used with a negative connotation. Thus, we can also refer it to as a attribute of curiosity. Curiosity can be described as a combination of creativity, inquisitiveness and openness to experience.
                                </p>
                                <p>
                                Therefore, curiosity can be defined as the eagerness to explore and investigate the unknown, whereas inquisitive can be particularly related with the intellectual curiosity or the curiosity marked by various enquiries.
                                </p>
                                <p>Read more at <a href="http://www.differencebetween.info/Difference-between-inquisitive-and-curious">differencebetween.com</a></p>
                                `
                            ]  }
                    break;
                    case "Proud":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Successful", "Confident"],
                            feelsContent: [
                                `
                                <p>Love what you do. Live for what you do. Pour your heart, soul and all you’ve got into it. But for goodness sake, celebrate yourself when it’s merited and deserved.</p>
                                <p>Many people are so immersed on their journey toward stardom and greatness that they’re losing the small battles along the way. Day-by-day and inch-by-inch, they’re losing encouragement and hope. The road to success for most people is a long one. Forget what our media and instant-gratification society try shovel-feeding you — you won’t become a star overnight.</p>
                                <p>Even the people that we admire so much — superstars like Oprah Winfrey, Beyonce, Ed Sheeran, LeBron James — all of these successful multi-millionaires needed to take the long, winding road to success. And all of them needed to celebrate every win along the way.</p>
                                <p>Which is why it’s so important to find something that you love. Find something that you love so much, it will sustain you even when you can barely muster the strength to pull yourself out of bed and slink down on the couch to watch Netflix. But by all means, celebrate what you’ve accomplished. Don’t get self-conscious. Don’t get into the whole false-humility thing. Celebrate yourself when you’ve done something great.</p>
                                <p>Because you should always be proud of your biggest and boldest accomplishments.</p>
                                <p>Read more at <a href="https://medium.com/the-mission/the-feeling-of-achievement-10-ways-celebrating-success-improves-your-life-41532a964ff3">medium</a></p>`,

                                `
                                <p>
                                When you believe in yourself, you’ll be more willing to try new things. Whether you apply for a promotion or sign up for a cooking class, believing in yourself is key to putting yourself out there.
                                </p>
                                <p>
                                When you feel confident in yourself, you’re able to devote your resources to the task at hand. Rather than waste time and energy worrying that you aren't good enough, you can devote your energy to your efforts. So ultimately, you'll perform better when you feel confident. 
                                </p>
                                <p>
                                For example, if you feel confident about a presentation you’re going to make, you’ll focus on delivering your message to your audience. If however, you lack confidence in your ability to communicate, you may worry that no one is listening to you or you might be preoccupied with messing up. Consequently, you might struggle to concentrate and you may stumble over your words—which may reinforce your belief that you are bad at giving presentations.
                                </p>
                                <p>
                                Fortunately, there are things you can do to boost your self-confidence. Whether you lack confidence in one specific area or you struggle to feel confident about anything, these strategies can help.
                                </p>
                                <p>Read more at <a href="https://www.verywellmind.com/how-to-boost-your-self-confidence-4163098">verywell mind</a></p>
                                `
                            ]  }
                    break;
                    case "Accepted":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Respected", "Valued"],
                            feelsContent: [
                                `
                                <p>
                                What is important to our well-being?
                                </p>
                                <p>
                                This question was raised in a recent symposium on well-being organised by the School of Arts and Social Sciences, SIM University.
                                </p>
                                <p>
                                Feeling respected was the strongest predictor of positive feelings, or affective well-being.
                                </p>
                                <p>
                                The research shows that respect is important to feelings of happiness across the world, from the most affluent to the most impoverished nations.
                                </p>
                                <p>
                                Whether or not a person feels respected is a universal predictor of affective well-being, regardless of wealth.
                                </p>
                                <p>
                                Respect, autonomy and social support are fundamental psychological needs. Being respected is conducive to feelings of competence, an innate psychological need. The need for respect can thus be said to be a basic human need.
                                </p>
                                <p>Read more at <a href="https://www.straitstimes.com/opinion/its-all-about-feeling-respected">straitstimes</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Powerful":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Courageous", "Creative"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Peaceful":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Loving", "Thankful"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Trusting":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Sensitive", "Intimate"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Optimistic":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Hopeful", "Inspired"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Lonely":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Isolated", "Abandoned"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Vulnerable":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Victimized", "Fragile"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Despair":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Grief", "Powerless"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Guilty":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Ashamed", "Remorseful"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Depressed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Inferior", "Empty"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Hurt":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Disappointed", "Embarrassed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Repelled":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Hesitant", "Horrified"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Awful":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Detestable", "Nauseated"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Disappointed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Revolted", "Appalled"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Disapproving":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Judgemental", "Embarassed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Critical":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Dismissive", "Skeptical"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Distant":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Numb", "Withdrawn"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Frustrated":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Annoyed", "Infuriated"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Agressive":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Provoked", "Hostile"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Mad":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Furious", "Jealous"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Bitter":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Violated", "Indignant"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Humiliated":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Disrespected", "Ridiculed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Let down":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Resentful", "Betrayed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Threatened":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Exposed", "Nervous"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Rejected":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Persecuted", "Excluded"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Weak":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Insignificant", "Worthless"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Insecure":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Inferior", "Inadequate"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Anxious":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Worried", "Overwhelmed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Scared":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Frightened", "Helpless"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Bored":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Indifferent", "Apathetic"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Busy":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Pressured", "Rushed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Stressed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Overwhelmed", "Out of control"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Tired":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Sleepy", "Unfocussed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Startled":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Shocked", "Dismayed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Confused":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Disillusioned", "Perplexed"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Amazed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Astonished", "Awe"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                    case "Excited":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Eager", "Energetic"],
                            feelsContent: [
                                `
                                <p>Arousal is important in regulating consciousness, attention, and information processing. It is crucial for motivating certain behaviors, such as mobility, the pursuit of nutrition, the fight-or-flight response and sexual activity (see Masters and Johnson's human sexual response cycle, where it is known as the arousal phase). Arousal is also an essential element in many influential theories of emotion, such as the James-Lange theory of emotion or the Circumplex Model. According to Hans Eysenck, differences in baseline arousal level lead people to be either extraverts or introverts. Later research suggests that extroverts and introverts likely have different arousability. Their baseline arousal level is the same, but the response to stimulation is different.</p>
                                <p>The Yerkes–Dodson law states that there is a relationship between arousal and task performance, essentially arguing that there is an optimal level of arousal for performance, and too little or too much arousal can adversely affect task performance. One interpretation of the Yerkes–Dodson law is the Easterbrook cue-utilisation theory. It predicted that high levels of arousal will lead to attention narrowing, during which the range of cues from the stimulus and the environment decreases.[6] According to this hypothesis, attention will be focused primarily on the arousing details (cues) of the stimulus, so that information central to the source of the emotional arousal will be encoded while peripheral details will not.</p>
                                <p>In positive psychology, arousal is described as a response to a difficult challenge for which the subject has moderate skills.</p>
                                <p>Read more at <a href="https://en.wikipedia.org/wiki/Arousal">wikipedia</a></p>`,

                                `
                                <p>
                                If you're being cheeky you're being brash or irreverent. If you're a cheeky child, you're probably just being impudent and disrespectful — and you're probably going to get in trouble.
                                </p>
                                <p>
                                Cheeky has shades of meaning according to the degree of offense taken, and this may vary between British and American English. At the offensive end are the synonyms rude, disrespectful, and insulting. Less offensive are sassy, arrogant, and shameless. Rounding out the cheeky spectrum are bold, assertive, and daring, which are about getting noticed but without causing injury.
                                </p>
                                <p>Read more at <a href="https://www.vocabulary.com/dictionary/cheeky">vocabulary.com</a></p>
                                `
                            ]  }
                    break;
                }

                // if (ev.target.style.top === "0px" && ev.target.textContent === feelings0[`${feel}0`].subFeels[0]) {
                //    thirdLayer.innerHTML += `<button class="feel-2" id="a2" type="button" style="top: 0px; left: ${parseInt(ev.target.style.left.substring(0, ev.target.style.left.length -3)) * 15}px;">${feelings1[`${alphabeth[ind]}2`].subFeels[0]}</button>`
                //    thirdLayer.innerHTML += `<button class="feel-2" id="b2" type="button" style="top: 0px; left: ${parseInt(ev.target.style.left.substring(0, ev.target.style.left.length -3)) * 20}px;">${feelings1[`${alphabeth[ind]}2`].subFeels[1]}</button>`
                //style="left:${Math.cos((360 + (10 * feelings0[`${feel}0`].subFeels.length)/(feelings0[`${feel}0`].subFeels.length)) * index) * 200}px; top:${Math.sin((360 + (10 * feelings0[`${feel}0`].subFeels.length)/(feelings0[`${feel}0`].subFeels.length)) * index) * 200}px;"
                let left1 = Math.cos(0.25 + ((360 + (10 * feelings0[`${feel}0`].subFeels.length)/(feelings0[`${feel}0`].subFeels.length))) * feelings0[`${feel}0`].subFeels.indexOf(curretLayer3)) * 285;
                let top1 = Math.sin(0.25 + ((360 + (10 * feelings0[`${feel}0`].subFeels.length)/(feelings0[`${feel}0`].subFeels.length))) * feelings0[`${feel}0`].subFeels.indexOf(curretLayer3)) * 285;
                let left2 = Math.cos(-0.25 + ((360 + (10 * feelings0[`${feel}0`].subFeels.length)/(feelings0[`${feel}0`].subFeels.length))) * feelings0[`${feel}0`].subFeels.indexOf(curretLayer3)) * 285;
                let top2 = Math.sin(-0.25 + ((360 + (10 * feelings0[`${feel}0`].subFeels.length)/(feelings0[`${feel}0`].subFeels.length))) * feelings0[`${feel}0`].subFeels.indexOf(curretLayer3)) * 285;
                thirdLayer.innerHTML += `<button class="no-trans feel-2 ${curretLayer2.toLowerCase()}" id="a2" type="button" style="transform: translate(${left1}px, ${top1}px);">${feelings1[`${alphabeth[ind]}2`].subFeels[0]}</button>`
                thirdLayer.innerHTML += `<button class="no-trans feel-2 ${curretLayer2.toLowerCase()}" id="b2" type="button" style="transform: translate(${left2}px, ${top2}px);">${feelings1[`${alphabeth[ind]}2`].subFeels[1]}</button>`

                blockClicksFor(thirdLayer.children[0], 0.1)
                blockClicksFor(thirdLayer.children[1], 0.1)
                setTimeout(() => {
                    thirdLayer.children[0].classList.remove("no-trans")
                    thirdLayer.children[1].classList.remove("no-trans")
                }, 100)

                console.log("#233 top:", ev.target.style.top, " left:", ev.target.style.left)
                Array.from(thirdLayer.children).forEach((feelPage, i) => {
                    feelPage.classList.add("open-2")
                    feelPage.addEventListener("click", eve => {
                        //window.location.href += `${curretLayer2}/${curretLayer3}/${feelPage.textContent}`.toLowerCase()
                        document.getElementById("modal-full").classList.remove("invisible")
                        document.getElementById("modal-full").classList.add(`${curretLayer2.toLowerCase()}`) 
                        document.getElementById("mofull-h1").textContent = `${curretLayer2}/${curretLayer3}/${feelPage.textContent}`
                        document.getElementById("mofull-content").innerHTML = feelings1[`${alphabeth[ind]}2`].feelsContent[i];
                        document.getElementById("cover").classList.add("cover")
                    })
                })
                thirdLayer.classList.add("show-layer-2")
            })
        })
// if click on dropdown menu
    } else {
        //e.target.nextElementSibling.textContent = feelText[feel + 0]
        //e.target.nextElementSibling.appendChild(feelText[feel + 0])
        e.target.nextElementSibling.innerHTML = feelText[feel + 0].text
        e.target.classList.toggle("white")
        if (!e.target.classList.contains("white")) {
            e.target.parentNode.childNodes[0].textContent = curretLayer2
        }
        e.target.nextElementSibling.classList.toggle("shrinkedUp")
        e.target.parentNode.classList.toggle("selected-feel-more")
    }
    })

}) 

let feelsLayer0 = document.getElementsByClassName("feel-0")
center.addEventListener("click", e => {
    document.getElementById("click-tip").classList.toggle("invisible")
    Array.from(feelsLayer0).forEach(feel => {
        feel.classList.toggle("open-0")
    })
    center.classList.toggle("buble")
    center.classList.toggle("shrinkly")
})

//

let closeButton = document.getElementsByClassName("close")[0]

closeButton.addEventListener("click", (e) => {
    document.getElementById("modal-full").classList.add("invisible");
    document.getElementById("cover").classList.remove("cover");
})

}