
function wait(waittime)
{
    return new Promise((resolve , reject) => {
    
        if(isNaN(waittime))
        {
            reject (new Error ("WAITTIME MUST BE A NUMBER"));
        }
        else{
            setTimeout(() => {
            resolve(`you have waited ${waittime} millisecond`);
            },waittime);
        } 
    });
}
async function Program() {
    
    // let myresult = wait(1000).then((response)=> {
    //     console.log(response);
    // }).catch((error) => {
    //     console.log(error.message);
    // });

    let myresult = await wait(1000); 
    console.log(myresult);
}

Program().then(() => {
    process.exit(0);
});


