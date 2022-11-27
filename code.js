var box = undefined

function init()
{
    box = document.getElementById('box')

}

function sum()
{
    var num = parseInt(box.value);

    if(isNaN(num))
    {
        alert("Please Enter Valid Number !")
    }else
    {
        var total = 0;
        for(var x=1; x<=num; x++)
        {
            var value = parseFloat(prompt("Number : "))
            total = total + value;
        }
        document.getElementById('add').innerText = total
        
    }
}
 
function fact()
{
    var num = parseInt(box.value);

    if(isNaN(num))
    {
        alert("Please Enter Valid Number !")
    }else
    {
        var result = 1;
        for(var x =num;x>1;x--)
        {
            result = x*result;
        }
        document.getElementById('factres').innerText = result
    }
}

function prime()
{
    var num = parseInt(box.value);
    var res = document.getElementById('primres');
    if(isNaN(num))
    {
        alert("Please Enter Valid Number !")
    }else
    {
        var flag = true;
        for(var x = 2 ; x<num; x++)
        {
            if(num%x==0)
            {
                res.innerText = "Not a Prime Number !"
                flag = false;
                break;

            }
        }

        if(flag)
        {
            res.innerText = "Prime Number !"
        }
    }
}