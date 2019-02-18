function sorting(str)          //sorting function
{

 var arr=[];
 for(var i=0;i<str.length;i++)
 {
     arr.push(str[i]);              //to push elements onto array one by one
 }
    
    for(var i=0;i<arr.length;i++)         //upto size of an array
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {                                //for swapping elements in ascending order
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
   for(var i=0;i<arr.length;i++)
   {
       var str2=str2 + arr[i];             //to join
   }
   return str2;
}
    
        var result=sorting("cab");             //sorting function called
        var result2=sorting("abc");
    
        if(result==result2)
        {
            console.log("Strings are 'Anagram'");                   
        }
        else
        {
            console.log("String are not an 'Anagram'");
        }
        

    
