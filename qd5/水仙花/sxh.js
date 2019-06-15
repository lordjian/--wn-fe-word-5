for(var i=100;i<1000;i++)
{
   var hundreds=Math.floor(i/100);
   var decade=Math.floor(i%100/10)
   var unit=i%10;
   var a=hundreds*hundreds*hundreds;
   var b=decade*decade*decade;
   var c=unit*unit*unit;
   if(i==a+b+c)
   {
    document.write(i);
    document.write(" ");
   }
}