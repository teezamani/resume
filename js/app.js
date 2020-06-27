   //  activate scrollspy 
   $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
    /* Set the width of the side navigation to 250px */
        function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        }
  
    /* Set the width of the side navigation to 0 */
        function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        }

    // TYPEWRITER
//     let typeString = [
//       "I Live",
//       "I learn",
//       "To Relearn",
//       "What I learn't",
//       "And I Love to Code",
//       "I am theBeardedDeveloper ",
//       "Teezamani"
//   ];
//   let i = 0;
//   let count = 0;
//   let selectedText = "";
//   let text = "";
//   (type = () => {
//       if (count == typeString.length) {
//           count = 0;
//       }
//       selectedText = typeString[count];
//       text = selectedText.slice(0, ++i);
//       document.getElementById("typing").innerHTML = text;
//       if (text.length === selectedText.length) {
//           count++;
//           i = 0;
//       }
//       setTimeout(type, 250);
//   })();