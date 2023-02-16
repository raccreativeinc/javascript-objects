const person = {
    name: 'Edward',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['Javascript', 'HTML', 'CSS']
};

person.nickname = 'Duke';
const message = `Hi, I'm ${person.name}. I live in ${person.city}. Most know me as ${person.nickname}. My age is ${person.age +1}. I have ${person.skills.length} skills: ${person.skills.join(', ')}.`;
console.log(message);