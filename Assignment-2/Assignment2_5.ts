function chkString(sentence:string,str:string):boolean
{
    var words:string[] = sentence.split(" ");
    var icnt:number = 0;

    for(var i:number = 0; i < words.length; i++)
    {
        if(str == words[i])
        {
            break;
        }
    }  

    if(i != words.length)
    {
        return true;
    }
    else
    {
        return false;
    }
  
}


var sentence:string = "Pune Kothrud Marvellous Infosystems";
var str:string = "Marvellous";

if(chkString(sentence, str))
{
    console.log("String contains " + str + " in it.");
}
else
{
    console.log("String does not contains " + str + " in it.");
}