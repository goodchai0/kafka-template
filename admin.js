const {kafka}=require("./client")

async function init(){
    const admin=kafka.admin();
    console.log('Admin connecting')
    admin.connect();
    console.log('Admin Connection Success')

    console.log("Creating topic [rider updates]")
    admin.createTopics({
        topics:[
            {
                topic:'rider-updated',
                numPartitions:2,
            }
        ]
    })
    console.log('topic created success');
    console.log('Disconnecting Admin');
    await admin.disconnect();
}

init();