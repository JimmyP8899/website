
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.isIntersecting){
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            });
            const hiddenElements = document.querySelectorAll('.hidden');
            hiddenElements.forEach((el) => observer.observe(el));
            


            document.getElementById("redirect-home").addEventListener("click", function() {
              window.location.replace("home.html");
            });


            document.getElementById("redirect-experience").addEventListener("click", function() {
              window.location.replace("experience.html");
            });


            document.getElementById("redirect-education").addEventListener("click", function() {
              window.location.replace("education.html");
            });

            document.getElementById("redirect-certifications").addEventListener("click", function() {
              window.location.replace("certifications.html");
            });

            document.getElementById("redirect-blog").addEventListener("click", function() {
              window.location.replace("blog.html");
            });

            document.getElementById("redirect-linkedin").addEventListener("click", function() {
              window.open("https://www.linkedin.com/in/jimmy-peng-43bb89218/");
            });
 
            document.getElementById("redirect-github").addEventListener("click", function() {
                window.open("https://github.com/JimmyP8899");
              
            });

            document.getElementById("redirect-instagram").addEventListener("click", function() {
              window.open("https://www.instagram.com/jimmypeng_xd/");
            });
