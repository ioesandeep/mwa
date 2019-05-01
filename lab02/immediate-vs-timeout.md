**setTimeout()** schedules a callback to be executed after a certain threshold time has elapsed (**in ms**) in the **timers phase** of the event loop.
<br/>
***setImmediate()*** schedules a callback to be executed immediately in the **check phase** of the event loop once the current **poll** completes.
<br/>

**setTimeout()** and ***setImmediate()*** are similar but behave differently depending on the context they are executed. If they are called within the main module, their order of execution cannot be known (or it depends on performance of the process which can be impacted by other applications running on the machine). However, if they are executed within an I/O cycle, ***setImmediate()*** will always be executed first.

`ex: main.js`

`setTimeout(() => { `<br/>
    `   console.log('timeout');`<br/>
 `   }, 0);`   
 
 `   setImmediate(() => {`   
    `   console.log('immediate');`   
 `   });`

`$ node main.js`<br/>
`timeout`<br/>
`immediate`<br/>

`$ node main.js`<br/>
`immediate`<br/>
`timeout`<br/>
