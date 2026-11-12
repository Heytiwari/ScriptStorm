
let choice = +prompt(`Press 1 for English
Press 2 for Hindi`);

switch (choice) {
    case 1:
        document.write(`Welcome to Indian Railways Booking System <br>`);

        let english = +prompt(`Press 1 for General Ticket.
Press 2 for Sleeper Class.
Press 3 for 3AC.
Press 4 for 2AC.
Press 5 for 1AC.`);

        switch (english) {
            case 1:
                document.write(`Welcome to General Ticket Booking System. <br>`);
                let personCount = +prompt(`Press 1 for 1 Person.
Press 2 for 2 Person.
Press 3 for 3 Person.
Press 4 for 4 Person.
Press 5 for 5 Person.
Press 6 for 6 Person.`);

                switch (personCount) {
                    case 1:
                        document.write(`Ticket Amount for 1 Person is Rs. 485.`);
                        break;
                    case 2:
                        document.write(`Ticket Amount for 2 Person is Rs. 970.`);
                        break;
                    case 3:
                        document.write(`Ticket Amount for 3 Person is Rs. 1455.`);
                        break;
                    case 4:
                        document.write(`Ticket Amount for 4 Person is Rs. 1940.`);
                        break;
                    case 5:
                        document.write(`Ticket Amount for 5 Person is Rs. 2425.`);
                        break;
                    case 6:
                        document.write(`Ticket Amount for 6 Person is Rs. 2910.`);
                        break;
                    default:
                        document.write(`Please Enter Valid Choice`);
                        break;
                }
                break;

            case 2:
                document.write(`Welcome to Sleeper Class Booking System. <br>`);
                let sleeper = +prompt(`Enter Number of Persons (1-6):`);

                switch (sleeper) {
                    case 1: document.write(`Ticket Amount: Rs. 600`); break;
                    case 2: document.write(`Ticket Amount: Rs. 1200`); break;
                    case 3: document.write(`Ticket Amount: Rs. 1800`); break;
                    case 4: document.write(`Ticket Amount: Rs. 2400`); break;
                    case 5: document.write(`Ticket Amount: Rs. 3000`); break;
                    case 6: document.write(`Ticket Amount: Rs. 3600`); break;
                    default: document.write(`Please Enter Valid Choice`); break;
                }
                break;

            case 3:
                document.write(`Welcome to AC 3 Tier Booking System. <br>`);
                let ac3 = +prompt(`Enter Number of Persons (1-6):`);

                switch (ac3) {
                    case 1: document.write(`Ticket Amount: Rs. 1000`); break;
                    case 2: document.write(`Ticket Amount: Rs. 2000`); break;
                    case 3: document.write(`Ticket Amount: Rs. 3000`); break;
                    case 4: document.write(`Ticket Amount: Rs. 4000`); break;
                    case 5: document.write(`Ticket Amount: Rs. 5000`); break;
                    case 6: document.write(`Ticket Amount: Rs. 6000`); break;
                    default: document.write(`Please Enter Valid Choice`); break;
                }
                break;

            case 4:
                document.write(`Welcome to AC 2 Tier Booking System. <br>`);
                let ac2 = +prompt(`Enter Number of Persons (1-6):`);

                switch (ac2) {
                    case 1: document.write(`Ticket Amount: Rs. 1500`); break;
                    case 2: document.write(`Ticket Amount: Rs. 3000`); break;
                    case 3: document.write(`Ticket Amount: Rs. 4500`); break;
                    case 4: document.write(`Ticket Amount: Rs. 6000`); break;
                    case 5: document.write(`Ticket Amount: Rs. 7500`); break;
                    case 6: document.write(`Ticket Amount: Rs. 9000`); break;
                    default: document.write(`Please Enter Valid Choice`); break;
                }
                break;

            case 5:
                document.write(`Welcome to AC First Class Booking System. <br>`);
                let ac1 = +prompt(`Enter Number of Persons (1-6):`);

                switch (ac1) {
                    case 1: document.write(`Ticket Amount: Rs. 2000`); break;
                    case 2: document.write(`Ticket Amount: Rs. 4000`); break;
                    case 3: document.write(`Ticket Amount: Rs. 6000`); break;
                    case 4: document.write(`Ticket Amount: Rs. 8000`); break;
                    case 5: document.write(`Ticket Amount: Rs. 10000`); break;
                    case 6: document.write(`Ticket Amount: Rs. 12000`); break;
                    default: document.write(`Please Enter Valid Choice`); break;
                }
                break;

            default:
                document.write(`Please Enter Valid Ticket Choice`);
                break;
        }
        break;


    case 2:
        document.write(`भारतीय रेलवे बुकिंग सिस्टम में आपका स्वागत है। <br>`);

        let hindi = +prompt(`टिकट का प्रकार चुनें:
1. जनरल टिकट
2. स्लीपर क्लास
3. AC 3 Tier
4. AC 2 Tier
5. AC First Class`);

        switch (hindi) {
            case 1:
                document.write(`जनरल टिकट बुकिंग सिस्टम में आपका स्वागत है। <br>`);

                let generalPerson = +prompt(`यात्रियों की संख्या चुनें:
1. 1 व्यक्ति
2. 2 व्यक्ति
3. 3 व्यक्ति
4. 4 व्यक्ति
5. 5 व्यक्ति
6. 6 व्यक्ति`);

                switch (generalPerson) {
                    case 1: document.write(`1 व्यक्ति का टिकट मूल्य: Rs. 485`); break;
                    case 2: document.write(`2 व्यक्तियों का टिकट मूल्य: Rs. 970`); break;
                    case 3: document.write(`3 व्यक्तियों का टिकट मूल्य: Rs. 1455`); break;
                    case 4: document.write(`4 व्यक्तियों का टिकट मूल्य: Rs. 1940`); break;
                    case 5: document.write(`5 व्यक्तियों का टिकट मूल्य: Rs. 2425`); break;
                    case 6: document.write(`6 व्यक्तियों का टिकट मूल्य: Rs. 2910`); break;
                    default: document.write(`कृपया सही विकल्प चुनें।`); break;
                }
                break;

            case 2:
                document.write(`स्लीपर क्लास बुकिंग सिस्टम में आपका स्वागत है। <br>`);

                let sleeperPerson = +prompt(`यात्रियों की संख्या चुनें (1-6):`);

                switch (sleeperPerson) {
                    case 1: document.write(`टिकट मूल्य: Rs. 600`); break;
                    case 2: document.write(`टिकट मूल्य: Rs. 1200`); break;
                    case 3: document.write(`टिकट मूल्य: Rs. 1800`); break;
                    case 4: document.write(`टिकट मूल्य: Rs. 2400`); break;
                    case 5: document.write(`टिकट मूल्य: Rs. 3000`); break;
                    case 6: document.write(`टिकट मूल्य: Rs. 3600`); break;
                    default: document.write(`कृपया सही विकल्प चुनें।`); break;
                }
                break;

            case 3:
                document.write(`AC 3 Tier बुकिंग सिस्टम में आपका स्वागत है। <br>`);

                let ac3Person = +prompt(`यात्रियों की संख्या चुनें (1-6):`);

                switch (ac3Person) {
                    case 1: document.write(`टिकट मूल्य: Rs. 1000`); break;
                    case 2: document.write(`टिकट मूल्य: Rs. 2000`); break;
                    case 3: document.write(`टिकट मूल्य: Rs. 3000`); break;
                    case 4: document.write(`टिकट मूल्य: Rs. 4000`); break;
                    case 5: document.write(`टिकट मूल्य: Rs. 5000`); break;
                    case 6: document.write(`टिकट मूल्य: Rs. 6000`); break;
                    default: document.write(`कृपया सही विकल्प चुनें।`); break;
                }
                break;

            case 4:
                document.write(`AC 2 Tier बुकिंग सिस्टम में आपका स्वागत है। <br>`);

                let ac2Person = +prompt(`यात्रियों की संख्या चुनें (1-6):`);

                switch (ac2Person) {
                    case 1: document.write(`टिकट मूल्य: Rs. 1500`); break;
                    case 2: document.write(`टिकट मूल्य: Rs. 3000`); break;
                    case 3: document.write(`टिकट मूल्य: Rs. 4500`); break;
                    case 4: document.write(`टिकट मूल्य: Rs. 6000`); break;
                    case 5: document.write(`टिकट मूल्य: Rs. 7500`); break;
                    case 6: document.write(`टिकट मूल्य: Rs. 9000`); break;
                    default: document.write(`कृपया सही विकल्प चुनें।`); break;
                }
                break;

            case 5:
                document.write(`AC First Class बुकिंग सिस्टम में आपका स्वागत है। <br>`);

                let ac1Person = +prompt(`यात्रियों की संख्या चुनें (1-6):`);

                switch (ac1Person) {
                    case 1: document.write(`टिकट मूल्य: Rs. 2000`); break;
                    case 2: document.write(`टिकट मूल्य: Rs. 4000`); break;
                    case 3: document.write(`टिकट मूल्य: Rs. 6000`); break;
                    case 4: document.write(`टिकट मूल्य: Rs. 8000`); break;
                    case 5: document.write(`टिकट मूल्य: Rs. 10000`); break;
                    case 6: document.write(`टिकट मूल्य: Rs. 12000`); break;
                    default: document.write(`कृपया सही विकल्प चुनें।`); break;
                }
                break;

            default:
                document.write(`कृपया सही टिकट विकल्प चुनें।`);
                break;
        }
        break;


    default:
        document.write(`Please Select Valid Language`);
        break;
}
