

let choice = +prompt(`Press 1 for English\nPress 2 for Hindi\nPress 3 for Gujarati`);

switch (choice) {
    case 1:

        let englishChoice = +prompt("Press 1 for Internet Recharge\nPress 2 for Top-up Recharge\nPress 3 for Special Recharge");

        switch (englishChoice) {
            case 1:
                document.write("Internet Recharge Selected");
                break;

            case 2:
                document.write("Top-up Recharge Selected");
                break;

            case 3:
                document.write("Special Recharge Selected");
                break;

            default:
                document.write("Invalid Recharge Choice");
                break;
        }
        break;

    case 2:
        document.write();

        let hindiChoice = +prompt("इंटरनेट रिचार्ज के लिए 1 दबाएं\nटॉप-अप रिचार्ज के लिए 2 दबाएं\nस्पेशल रिचार्ज के लिए 3 दबाएं");

        switch (hindiChoice) {
            case 1:
                document.write("इंटरनेट रिचार्ज चुना गया");
                break;

            case 2:
                document.write("टॉप-अप रिचार्ज चुना गया");
                break;

            case 3:
                document.write("स्पेशल रिचार्ज चुना गया");
                break;

            default:
                document.write("गलत विकल्प");
                break;
        }
        break;

    case 3:

        let gujaratiChoice = +prompt("Internet Recharge mate 1 dabavo\nTop-up Recharge mate 2 dabavo\nSpecial Recharge mate 3 dabavo");

        switch (gujaratiChoice) {
            case 1:
                document.write(`Tame safaltapurvak Internet Recharge karyu chhe.`);
                break;
            case 2:
                document.write(`Tame safaltapurvak Top-up Recharge karyu chhe.`);
                break;
            case 3:
                document.write(`Tame safaltapurvak Special Recharge karyu chhe.`);
                break;
            default:
                document.write(`Tame galat choice chuniyo chhe.`)
                break;
        }

    default:
        document.write("Invalid Language Choice");
        break;
}