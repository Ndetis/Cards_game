// function Stopwatch(){
//     let startTime,endTime,running,duration =0
//     this.resetwatch = function(){
//             startTime = null
//             endTime = null
//             running = false
//     };
//     this.startwatch = function(){
//         if (running) {
//             throw new Error('Already running !!');
//         }else{
//             running = true
//             startTime = new Date();
//         }
//     };
//     this.stopwatch = function(){
//         if (!running) {
//             throw new Error('Can stop Not  running !!');
//         }else{
//             running = false
//             endTime = new Date();
//         }
//         const second =(endTime.getTime() - startTime.getTime()) / 1000
//         duration += second  
//     };
//     Object.defineProperty(this , 'duration' , {
//         get : function(){
//             return duration
//         }
//     })
// }
