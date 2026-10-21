document.write(`Press 1 for English <br>
Press 2 for Hindi <br>
Press 3 for Gujarati <br>`);

let choice = +prompt("");

switch (choice) {
    case 1:
        document.write(`<br>Press 1 for Internet Recharge <br>
        Press 2 for Top-up Recharge <br>
        Press 3 for Special Recharge`);

        let englishChoice = +prompt("");

        switch (englishChoice) {
            case 1:
                document.write("<br>Internet Recharge Selected");
                break;

            case 2:
                document.write("<br>Top-up Recharge Selected");
                break;

            case 3:
                document.write("<br>Special Recharge Selected");
                break;

            default:
                document.write("<br>Invalid Recharge Choice");
                break;
        }
        break;

    case 2:
        document.write(`<br>इंटरनेट रिचार्ज के लिए 1 दबाएं <br>
        टॉप-अप रिचार्ज के लिए 2 दबाएं <br>
        स्पेशल रिचार्ज के लिए 3 दबाएं`);

        let hindiChoice = +prompt("रिचार्ज विकल्प चुनें:");

        switch (hindiChoice) {
            case 1:
                document.write("<br>इंटरनेट रिचार्ज चुना गया");
                break;

            case 2:
                document.write("<br>टॉप-अप रिचार्ज चुना गया");
                break;

            case 3:
                document.write("<br>स्पेशल रिचार्ज चुना गया");
                break;

            default:
                document.write("<br>गलत विकल्प");
                break;
        }
        break;

    case 3:
        document.write(`<br>Internet Recharge mate 1 dabavo <br>
        Top-up Recharge mate 2 dabavo <br>
        Special Recharge mate 3 dabavo`);

        let gujaratiChoice = +prompt("Recharge option pasand karo:");

        switch (gujaratiChoice) {
            case value:
                
                break;
        
            default:
                break;
        }

    default:
        document.write("<br>Invalid Language Choice");
        break;
}