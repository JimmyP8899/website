
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

    $(document).ready(function () {
      const textArray = textString.split("");
      const textElem = $(".hacking-animation__text");

      let count = 0;
      let intervalId;

      function animateText() {
        intervalId = setInterval(() => {
          if (textArray[count] === "\n") {
            textElem.append("<br>");
          } else {
            textElem.append(
              `<span class="hacking-animation__character">${textArray[count]}</span>`
            );
          }

          count++;
          if (count === textArray.length) {
            clearInterval(intervalId); // Stop the animation when finished writing text
          }
        }, 10); // Adjust interval duration as needed for animation speed
      }

      // Start animation when the document is ready
      animateText();
    });

    var textString = `
C:\\Users>

Hello, I'm Jimmy!

I'm a Computer Science student at California State Polytechnic Pomona, passionate 
about cybersecurity and software development. As an active member of Students With 
an Interest in the Future of Technology (SWIFT), I'm constantly seeking 
opportunities to expand my knowledge and skills in cybersecurity. My journey 
includes participating in both red teaming and blue teaming competitions like 
the Collegiate Cyber Defense Competition (CCDC), Hivestorm, and the National Centers 
of Academic Excellence in Cybersecurity Competition (NCAE-C). These experiences 
have not only sharpened my technical abilities but also instilled in me a deep 
commitment to staying at the forefront of cybersecurity innovation.
`;
