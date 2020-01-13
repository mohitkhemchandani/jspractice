 const myTodos=[]


 myTodos.push('Complete your assignment')
 myTodos.push('Earn a certificate')
 myTodos.push('Go to Gym')

 myTodos.forEach(function(todo, index){
    console.log(`Task no. ${index+1} is: ${todo}`)
 });