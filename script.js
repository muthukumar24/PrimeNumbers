function primeFunction()
{
    var x = Number(document.getElementById("limitinput").value)
    document.write("Prime Numbers within " + x)
    document.write("<br>")
    for(i = 2; i <= x; i++)
    {
        var primeNum = true

        for (j = 2; j <= x; j++)
        {
            if(i % j == 0 && i != j)
            {
                primeNum = false
            }
        }

        if(primeNum == true)
        {    
            document.write(i,"<br>");
        }
    }
}