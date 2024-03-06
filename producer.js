const {kafka}=require('./client');
const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
async function init(){
    const producer = kafka.producer();
    console.log('connecting to producer');
    await producer.connect()
    
    console.log('connected to producer')

    rl.setPrompt('> ')
    rl.prompt();
    rl.on('line',async function(line){
        const [riderName,Location]=line.split(' ')
        await producer.send({
            topic: 'rider-updated',
            messages: [
                {   partition:Location.toLowerCase()==='north'?0:1,
                    key: 'Location-update',
                    value: JSON.stringify({name:riderName,Location}) },
            ],
        })
    }).on('close',async ()=>{
        await producer.disconnect();
    })
   
}
init();