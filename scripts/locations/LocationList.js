import {getlocations} from '../fish/database.js'

export const locationList = () => {
    // Invoke the function that you imported from the database module
    let locations = getlocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationList">'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location__card">
            
            <div class="tip__name">${location.location}</div>
           
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}