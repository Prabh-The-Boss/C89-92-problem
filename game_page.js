pla1_n = localStorage.getItem("p1_n");
pla2_n = localStorage.getItem("p2_n");

pla1_s = 0 ;
pla2_s = 0 ; 

document.getElementById("pl1_n").innerHTML = pla1_n + " : " ;
document.getElementById("pl2_n").innerHTML = pla2_n + " : " ;

document.getElementById("p1_s").innerHTML = pla1_s ;
document.getElementById("p2_s").innerHTML = pla2_s ;
 
document.getElementById("p_q").innerHTML = "Question Turn - " + pla1_n ;
document.getElementById("p_a").innerHTML = "Answer Turn - " + pla2_n ;

w = "";

function send()
{
    g_w = document.getElementById("w").value ;
    w = g_w.toLowerCase();
    console.log("the Word has been Transformed into Lower-Case and is : " + w);

    charAt1 = w.charAt(1);
    console.log(charAt1);

    l_d_2 = Math.floor(w.length/2);
    charAt2 = w.charAt(l_d_2);
    console.log(charAt2);

    l_m_1 = w.length - 1;
    charAt3 = w.charAt(l_m_1);
    console.log(charAt3);

    r_c1 = w.replace(charAt1, "_");
    r_c2 = r_c1.replace(charAt2, "_");
    r_c3 = r_c2.replace(charAt3, "_");
    console.log(r_c3);

    q_w = "<h4 id='w_d'> ?. "+r_c3+"</h4>";
    i_b = "<br>Answer : <input type='text' id='i_c_b'>";
    c_b = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = q_w + i_b + c_b ;
    document.getElementById("output").innerHTML = row ; 
    document.getElementById("w").value = " ";
}  

q_t = "pla1" ;
a_t = "pla2" ;

function check()
{
    g_a = document.getElementById("i_c_b").value ;
    a = g_a.toLowerCase();
    console.log("answer in lower case - " + a);
    console.log("the actual word is: " + w);
    if(a == w)
    {
        console.log("inside the if condition")
        if(a_t == "pla1")
        {
            pla1_s = pla1_s +1 ;
            document.getElementById("p1_s").innerHTML = pla1_s ;
            console.log("The Score 4 player 1 is: " + pla1_s);
        }
        else
        {
            pla2_s = pla2_s +1 ;
            document.getElementById("p2_s").innerHTML = pla2_s ;
            console.log("The Score 4 player 2 is: " + pla2_s);
        }

    }
    
    
    if(q_t == "pla1")
    {
        q_t = "pla2" ;
        document.getElementById("p_q").innerHTML = "Question Turn - " + pla2_n ;
    }
    else
    {
        q_t = "pla1" ;
        document.getElementById("p_q").innerHTML = "Question turn -" + pla1_n ;
    }

    if(a_t == "pla1")
    {
        a_t = "pla2" ;
        document.getElementById("p_a").innerHTML = "answer Turn - " + pla2_n ;
    }
    else
    {
        a_t = "pla1" ;
        document.getElementById("p_a").innerHTML = "Answer turn -" + pla1_n ;
    }

    document.getElementById("output").innerHTML = "";
}