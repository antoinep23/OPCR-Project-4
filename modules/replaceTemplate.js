module.exports = (temp, restaurant) => { 
    let output = temp.replace(new RegExp("\\{\\$IMAGE\\$\\}", "g"), restaurant.image)
    output = output.replace(new RegExp("\\{\\$NAME\\$\\}", "g"), restaurant.name)
    output = output.replace(new RegExp("\\{\\$LOCATION\\$\\}", "g"), restaurant.location)
        
    if (!restaurant.new) output = output.replace(new RegExp("\\{\\$IS_NEW\\$\\}", "g"), 'nouveau--hide')

    return output
}