let myVar = "Kunal";
let number = 123;

let fullName = () => {
  return "Kunal Gupta";
};

function Hello() {
  return (
    <p>
      message no.{number} - This is the {fullName()} speaking.
    </p>
  );
}

export default Hello;
