/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function defaultDemo(anchor,alpha='get a job')
{
    $(anchor).text(alpha);
    
}

//should do something
defaultDemo('#example1');
defaultDemo('#example2','get another job,baby!!!');


let itemSample= ['bonzo',"dog","band"];

allSorts('#allList',"Snort",itemSample[0],itemSample[1],itemSample[2]);

function allSorts(anchor,title,...items)
{
    $('#allTitle').html(title);
    $.each(items,function(idx,d){
        
        $(anchor).append('<li>'+d+'</li>');
    });
    
}



$('#writeSomething').html(writeSomething('hello there ','John','Smith'));

function writeSomething(message,...args)
{
    
    return  message + args[1]+", "+args[0];
    
    
}

$('#destrucParam1').html(destructParam('Message',{'last':'Smith','first':'John'}));
    
function destructParam(msg,{last:lastName,first:firstName})
{
   return msg + " ho ho "+lastName+", "+firstName;
}

/////////////////////////////////////////////////

let numbers = [10,20,30,40,50];
 
$('#destrucArray1').append(destructArray(numbers));

function destructArray([first,second,...remainder])
{
    let val = "<ol>";
    val += "<li>"+first+'</li>'
    val += "<li>"+second+'</li>';
    
    for (let item of remainder)
    {
         val += "<li style='color:blue'>"+item+' from for loop</li>';
    }
    
    remainder.forEach((item)=>{
        val += "<li style='color:red'>"+item+'</li>';
        
    })
    
    
    val += "<li>rest has length of "+remainder.length+'</li>'
    
    val = val +"</ol>"
    return val;
}

let sample = {'last':'Smith','first':'John'};
$('#templateItem').append(templateDemo(sample));



function templateDemo(thing)
{
    //requires backtick to get the interpolation
    let templateString = `<h3>This is for ${thing.first} ${thing.last}</h3>`;
    return templateString;
}


