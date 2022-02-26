<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript</title>
    <script>
      var a=   prompt("what is your name=");
        function check()
        {
            if(a){
                alert('thanks');
                var b=prompt("enter the password=");
        
                if(b=='deepu123')
                {  document.write("<a href=table1.html>go to link</a>")
                }
            }
            else{
                alert("not a problem");
            }
        }

        check();

    </script>
</head>
<body>
    
</body>
</html>