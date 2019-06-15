var a=prompt()
var b=a-1;
function fqbn(n)
{
    if(n==0||n==1)
    return 1
    else
    return fqbn(n-2)+fqbn(n-1);
}
var i=fqbn(b);
document.write(i);
