import {gettankTips} from '../fish/database.js'

export const TipList = () => {
    // Invoke the function that you imported from the database module
    let tips = gettankTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tip__card">
            
            <div class="tip__name">${tip.title}</div>
            <div class="tip__description">${tip.description}</div>
           
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}