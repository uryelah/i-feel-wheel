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

feelingsLayer0.forEach((feel, i) => {
    switch(feel) {
        case "a":
            feelings0[`${feel}0`] = { subFeels: ["Playful", "Content", "Interested", "Proud", "Accepted", "Powerful", "Peaceful", "Trusting", "Optimistic"]}
        break;
        case "b":
            feelings0[`${feel}0`] = { subFeels: ["Lonely", "Vulnerable", "Despair", "Guilty", "Depressed", "Hurt"]}
        break;
        case "c":
            feelings0[`${feel}0`] = { subFeels: ["Repelled", "Awful", "Disappointed", "Disapproving"]}    
            console.log(feelings0)
        break;
        case "d":
            feelings0[`${feel}0`] = { subFeels: ["Critical", "Distant", "Frustrated", "Agressive", "Mad", "Bitter", "Humiliated", "Let down"]} 
        break;
        case "e":
            feelings0[`${feel}0`] = { subFeels: ["Threatened", "Rejected", "Weak", "Insecure", "Anxious", "Scared"]} 
        break;
        case "f":
            feelings0[`${feel}0`] = { subFeels: ["Bored", "Busy", "Stressed", "Tired"]} 
        break;
        case "g":
            feelings0[`${feel}0`] = { subFeels: ["Startled", "Confused", "Amazed", "Excited"]} 
        break;
    }

    document.getElementById(feel + `0`).addEventListener("click", e => {
        secondLayer.classList.toggle("show-layer-1")
        if (curretLayer2 === e.target.textContent) {
            curretLayer2 = ""
            secondLayer.innerHTML = ""
            thirdLayer.innerHTML = ""
            center.classList.remove(...feels0)
            center.classList.remove("filled-center")
            center.classList.add("shrinkly-max");
            blockClicksFor(center, 1)
            setTimeout(() => {
                center.classList.remove("shrinkly-max");
            }, 600)
            Array.from(firstLayer.children).forEach(f => {
                f.classList.remove("unselected-feel")
                f.classList.remove("selected-feel")
            })
            return;
        }

        curretLayer2 = e.target.textContent

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
            if (f.textContent === curretLayer2) {
                blockClicksFor(f, 0.35)
                setTimeout(() => {
                    f.classList.add("selected-feel")
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
            console.log("#110 ", index, " ",angle * index)
            let left = Math.cos(angle * index) * 200;
            let top = Math.sin(angle * index) * 200;
            secondLayer.innerHTML += `<button class="feel-1 ${curretLayer2.toLowerCase()}" id="${alphabeth[index]}1" type="button" style="left:${left}px; top:${top}px;">${f}</button>`
        })
        // Add event listener to layer 2 of buttons
        Array.from(secondLayer.children).forEach((subFeel, ind) => {
            // Show layer 2 feel
            subFeel.classList.toggle("open-1")
                subFeel.style.backgroundColor = "red"
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
                // Clean the inner HTML of the layer from the last click
                thirdLayer.innerHTML = ""
                //
                switch(subFeel.textContent) {
                    case "Playful":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Aroused", "Cheeky"] }
                    break;
                    case "Content":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Free", "Joyful"] }
                    break;
                    case "Interested":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Curious", "Inquisitive"] }
                    break;
                    case "Proud":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Successfull", "Confident"] }
                    break;
                    case "Accepted":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Respected", "Valued"] }
                    break;
                    case "Powerful":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Courageous", "Creative"] }
                    break;
                    case "Peaceful":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Loving", "Thankful"] }
                    break;
                    case "Trusting":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Sensitive", "Intimate"] }
                    break;
                    case "Optimistic":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Hopeful", "Inspired"] }
                    break;
                    case "Lonely":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Isolated", "Abandoned"] }
                    break;
                    case "Vulnerable":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Victimized", "Fragile"] }
                    break;
                    case "Despair":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Grief", "Powerless"] }
                    break;
                    case "Guilty":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Ashamed", "Remorseful"] }
                    break;
                    case "Depressed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Inferior", "Empty"] }
                    break;
                    case "Hurt":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Disappointed", "Embarrassed"] }
                    break;
                    case "Repelled":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Hesitant", "Horrified"] }
                    break;
                    case "Awful":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Detestable", "Nauseated"] }
                    break;
                    case "Disappointed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Revolted", "Appalled"] }
                    break;
                    case "Disapproving":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Judgemental", "Embarassed"] }
                    break;
                    case "Critical":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Dismissive", "Skeptical"] }
                    break;
                    case "Distant":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Numb", "Withdrawn"] }
                    break;
                    case "Frustrated":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Annoyed", "Infuriated"] }
                    break;
                    case "Aggressive":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Provoked", "Hostile"] }
                    break;
                    case "Mad":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Furious", "Jealous"] }
                    break;
                    case "Bitter":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Violated", "Indignant"] }
                    break;
                    case "Humiliated":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Disrespected", "Ridiculed"] }
                    break;
                    case "Let down":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Resentful", "Betrayed"] }
                    break;
                    case "Threatened":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Exposed", "Nervous"] }
                    break;
                    case "Rejected":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Persecuted", "Excluded"] }
                    break;
                    case "Weak":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Insignificant", "Worthless"] }
                    break;
                    case "Insecure":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Inferior", "Inadequate"] }
                    break;
                    case "Anxious":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Worried", "Overwhelmed"] }
                    break;
                    case "Scared":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Frightened", "Helpless"] }
                    break;
                    case "Bored":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Indifferent", "Apathetic"] }
                    break;
                    case "Busy":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Pressured", "Rushed"] }
                    break;
                    case "Stressed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Overwhelmed", "Out of control"] }
                    break;
                    case "Tired":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Sleepy", "Unfocussed"] }
                    break;
                    case "Startled":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Shocked", "Dismayed"] }
                    break;
                    case "Confused":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Disillusioned", "Perplexed"] }
                    break;
                    case "Amazed":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Astonished", "Awe"] }
                    break;
                    case "Excited":
                        feelings1[`${alphabeth[ind]}2`] = { subFeels: ["Eager", "Energetic"] }
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
                Array.from(thirdLayer.children).forEach((feelPage) => {
                    feelPage.classList.add("open-2")
                    feelPage.addEventListener("click", eve => {
                        //window.location.href += `${curretLayer2}/${curretLayer3}/${feelPage.textContent}`.toLowerCase()
                        document.getElementById("modal-full").classList.remove("invisible")
                        document.getElementById("modal-full").classList.add(`${curretLayer2.toLowerCase()}`) 
                        document.getElementById("mofull-h1").textContent = `${curretLayer2}/${curretLayer3}/${feelPage.textContent}`
                        document.getElementById("cover").classList.add("cover")
                    })
                })
                thirdLayer.classList.add("show-layer-2")
            })
        })
    })
}) 

let feelsLayer0 = document.getElementsByClassName("feel-0")
center.addEventListener("click", e => {
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