function userCard(index) {
    let credit = 100;
    let transLimit = 100;
    let history = [];
    return {
        getCardOptions: function() {
            return {
                balance: credit,
                transactionLimit: transLimit,
                historyLogs: history,
                key: index
            }
        },
        putCredits: function(value) {
            credit += value;
            return history.push({
                'Operation Type': 'Received Credits',
                'credits': value,
                'Operation Time': new Date().toLocaleString()('en-GB')
            })
        },
        takeCredits: function(value) {
            if(credit < value) {
                console.error('There are not enough money on your card')
            } else if (transLimit < value) {
                console.error('Transaction limit on your card to small');
            } else {
                credit -= value;
            }
            history.push({
                'Operation Type': 'Withdrawal of credits',
                'credits': value,
                'Operation Time': new Date().toLocaleString()('en-GB')
            })
        },
        setTransactionLimit: function(value) {
            transLimit = value;
            return history.push({
                'Operation Type': 'Transaction of limit',
                'credits': value,
                'Operation Time': new Date().toLocaleString()('en-GB')
            })
        },
        transferCredits: function(value, card) {
            let tax = value * 1.005;
            if(credit < tax) {
                console.error('Error: there are not enough money on your card')
            } else if (transLimit < tax) {
                console.error('Error: your transaction limit is too small');
            } else {
                this.takeCredits(tax);
                card.putCredits(value);
            }
        }
    };
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(card) {
        const numberOfcards = 3;
        if(this.cards.length < numberOfcards) {
            if(typeof card !== 'undefined') {
                this.cards.push(card);
            } else {
                this.cards.push(userCard(this.cards.length + 1));
            }
        } else {
            console.error("You have got too many cards")
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}

