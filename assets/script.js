const topic = ['HTML', 'CSS', 'Git','Javascript'];

const randomTopic = topic[Math.floor(Math.random()* topic.length)];



function listTopics(){
    for(x=0; x<topic.length; x++) {
        console.log(topic[x]);
    }
}
console.log('Here are the topics we learned through Prework:');
listTopics();



function selectTopic(){
    
    if(randomTopic === 'HTML') console.log ("Let's study HTML");

    else if (randomTopic === 'CSS') console.log ("Let's study CSS");

    else if (randomTopic === 'Git') console.log ("Let's study Git");

    else if (randomTopic === 'JavaScript') console.log ("Let's study JavaScript");

    else console.log ('Please try again!');

}

console.log('Which topic should we study first?');
selectTopic();
