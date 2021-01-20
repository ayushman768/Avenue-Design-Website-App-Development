  
        var navigation = document.querySelector('nav');
        navigation.classList.add('dis');

        function my_tab() {

            var navigation = document.querySelector('nav');
            if (navigation.style.display === "block") {
              navigation.style.display = "none";
                navigation.classList.remove('dis');;
            } else {
                navigation.style.display = "block";
            }

        }
        //