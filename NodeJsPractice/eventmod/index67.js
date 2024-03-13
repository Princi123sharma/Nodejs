const EventEmitter=require('events');
const event =new EventEmitter();
event.on("syyourname",(sc,msg)=>{
    console.log(`your status code is ${sc} and your msg is ${msg}`);
})

event.emit("syyourname",200,"ok");