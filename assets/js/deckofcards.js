class DeckOfCards {
	// let ID = "";
 //  	suits = new Array();
 //  	values = new Array();

    constructor(ID) {
        this.ID = ID || "body";
        this.suits = ["spades", "diamonds", "clubs", "hearts"];
		this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    }

    getDeck() {
		var deck = new Array();

		for(var i = 0; i < this.suits.length; i++) {
			for(var x = 0; x < this.values.length; x++) {
				var card = {Value: this.values[x], Suit: this.suits[i]};
				deck.push(card);
			}
		}

		return deck;
	}
    
    shuffle() {
    	var deck = this.getDeck();

		for (var i = 0; i < 1000; i++) {
			var location1 = Math.floor((Math.random() * deck.length));
			var location2 = Math.floor((Math.random() * deck.length));
			var tmp = deck[location1];

			deck[location1] = deck[location2];
			deck[location2] = tmp;
		}

		this.renderDeck(deck);
	}

    renderDeck(deck) {
	    document.getElementById(this.ID).innerHTML = "";

		for(let i = 0; i < deck.length; i++) {
			let card = document.createElement("div");
			let value = document.createElement("div");
			let suit = document.createElement("div");
			card.className = "card";
			value.className = "value";
			suit.className = "suit " + deck[i].Suit;

			value.innerHTML = deck[i].Value;
			card.appendChild(value);
			card.appendChild(suit);

			document.getElementById(this.ID).appendChild(card);
		}
	}

	renderDeck2(deck) {
		document.getElementById(this.ID).innerHTML = '';

		for(var i = 0; i < deck.length; i++) {
			var card = document.createElement("div");
			var icon = '';
			if (deck[i].Suit == 'hearts')
			icon='?';
			else if (deck[i].Suit == 'spades')
			icon = '?';
			else if (deck[i].Suit == 'diamonds')
			icon = '?';
			else
			icon = '?';

			card.innerHTML = deck[i].Value + '' + icon;
			card.className = 'card';

			document.getElementById(this.ID).appendChild(card);
		}
	}
};