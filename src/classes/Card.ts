class Card {
	constructor(public suit: Suit, public rank: Rank) {}

	toString(): string {
		return Rank[this.rank] + " of " + Suit[this.suit];
	}
}