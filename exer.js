function run() {

    let str = document.getElementById('input_argument').value;
    let results;

    let repeated = () => {

        for (var i = 0; i < str.length; i++) {

            if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
                console.log(str.charAt(i));
                results = (str.charAt(i))
                document.getElementById('output').innerHTML = results;
                break;
            }
        }
    }
    repeated()
}
