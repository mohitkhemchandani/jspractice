let serieOne ={
        title: 'Stranger Things',
        rating: 8.8
    }
let seriesTwo ={
        title: 'YOU',
        rating: 7.8
    }
/*let changeTitle= function(myObject){
    console.log(`Series is ${myObject.title}.`)
}*/
let changeTitle = function(myObject){
    return {
        formatOne: `The title is ${myObject.title}`,
        formatTwo: `The title is ${myObject.title}`
    }
}
let newTitle = changeTitle(seriesTwo);
console.log(newTitle.formatOne);