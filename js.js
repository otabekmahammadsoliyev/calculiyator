
let calCount = document.querySelector(`.calCount`)
let amalCount = document.querySelector(`.amal`)
let history = document.querySelector(`.history`)
let btns = document.querySelectorAll(`.btn`)

amalCount.innerHTML = ``
calCount.innerHTML = ``
let a = ``
let b = ``

btns.forEach((e) => {
    e.addEventListener(`click`, () => {
        if (e.textContent / 2 >= 0 || e.textContent === `.`) {
            calCount.innerHTML += e.textContent
        }
        else if (e.textContent === `ac`) {
            calCount.innerHTML = ``
            amalCount.innerHTML = ``
        }
        else if (e.textContent ===` +/-`) {
            history.innerHTML = ``
        }
        else if (e.textContent === `+`) {
            a = calCount.innerHTML;
            history.innerHTML = `<h6>${calCount.innerHTML}</h6>`
            amalCount.innerHTML = `+`;
            calCount.innerHTML = ``;
        }
        else if (e.textContent === `-`) {
            a = calCount.innerHTML;
            history.innerHTML = `<h6>${calCount.innerHTML}</h6>`
            amalCount.innerHTML = `-`;
            calCount.innerHTML = ``;
        }
        else if (e.textContent === `x`) {
            a = calCount.innerHTML;
            history.innerHTML = `<h6>${calCount.innerHTML}</h6>`
            amalCount.innerHTML = `*`;
            calCount.innerHTML = ``;
        }
        else if (e.textContent === `/`) {
            a = calCount.innerHTML;
            history.innerHTML = `<h6>${calCount.innerHTML}</h6>`
            amalCount.innerHTML = `/`;
            calCount.innerHTML = ``;
        }
        else if (e.textContent ===`%`) {
            a = calCount.innerHTML;
            history.innerHTML = `<h6>${calCount.innerHTML}</h6>`
            amalCount.innerHTML =` %`;
            calCount.innerHTML = ``;
        }
        else if (e.textContent === `=`) {
            b = calCount.innerHTML;
            switch (amalCount.innerHTML) {
                case `+`: {
                    return (
                        history.innerHTML +=` <h6>${amalCount.innerHTML}</h6>`,
                        history.innerHTML += `<h6>${calCount.innerHTML}</h6>`,
                        calCount.innerHTML = Number(a) + Number(b),
                        a = ``,
                        b = ``,
                        amalCount.innerHTML = ``
                    )
                }
                    break
                case `-`: {
                    return (
                        history.innerHTML += `<h6>${amalCount.innerHTML}</h6>`,
                        history.innerHTML += `<h6>${calCount.innerHTML}</h6>`,
                        calCount.innerHTML = Number(a) - Number(b),
                        a = ``,
                        b = ``,
                        amalCount.innerHTML = ``
                    )
                }

                    break
                case `/`: {
                    return (
                        history.innerHTML += `<h6>${amalCount.innerHTML}</h6>`,
                        history.innerHTML += `<h6>${calCount.innerHTML}</h6>`,
                        calCount.innerHTML = Number(a) / Number(b),
                        a = ``,
                        b = ``,
                        amalCount.innerHTML = ``
                    )
                }
                    break
                case   `*`: {
                    return (
                        history.innerHTML +=` <h6>${amalCount.innerHTML}</h6>`,
                        history.innerHTML += `<h6>${calCount.innerHTML}</h6>`,
                        calCount.innerHTML = Number(a) * Number(b),
                        a = ``,
                        b = ``,
                        amalCount.innerHTML = ``
                    )
                }

break
                case `% `: {
                    return (
                        history.innerHTML += `<h6>${amalCount.innerHTML}</h6>`,
                        history.innerHTML += `<h6>${calCount.innerHTML}</h6>`,
                        calCount.innerHTML = Number(a)/100*Number(b),
                        a = ``,
                        b = ``,
                        amalCount.innerHTML = ``
                    )
                }
                    break
                default:return `not found...`

            }
        }



    })
});