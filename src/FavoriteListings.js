function FavoriteListings() {
  this.listings = [];
}

FavoriteListings.prototype.isListingFavorited = function(listing) {
  for (var i = 0; i < this.listings.length; i++) {
    if (this.listings[i].listing_id == listing.listing_id) {
      return true;
    }
  }
  return false;
}

FavoriteListings.prototype.addListing = function(listing) {
	console.log(`addListing... current listing: ${listing.title}`);
	console.log(`@@@ current listings before @@@`);
	for (let l of this.listings) {
		console.log(`-- ${l.title}`);
	}
	console.log(`\r`);
	if (!this.isListingFavorited(listing)) {
		this.listings.push(listing);
		// return mergeSort(this.listings);
	}

	console.log(`@@@ current listings after @@@`);
	for (let l of this.listings) {
		console.log(`-- ${l.title}`);
	}
	console.log(`\r`);

	this.listings =  mergeSort(this.listings);
};

FavoriteListings.prototype.removeListing = function(listing) {
	console.log(`\r---------------\r
		current listing_id: ${listing.listing_id}
		\r---------------\r
		`)

	for (let i = 0; i < this.listings.length; i++) {
		console.log(`\r---------------\r
		listing #${i}: ${this.listings[i].listing_id}
		\r---------------\r
		`)
	}
	//if (this.isListingFavorited(listing)) {
		this.listings = this.listings.filter(x => x.listing_id !== listing.listing_id)
	//}
};

FavoriteListings.prototype.getFavorites = function() {
  return this.listings
}

function mergeSort(array) {
  if (array.length > 1) {
    const arrayRight = array.splice(array.length/2);

    const sortedListings =  mergeListingArrays(mergeSort(array), mergeSort(arrayRight));

    sortedListings.map((listing, i) =>  console.log(`sorted listings listing #, num_favorers: ${i} ${listing.num_favorers}`));
    

    return sortedListings;
  }
  else {
    return array;
  }
}

function mergeListingArrays(first, second) {
  const result = [];

  while (!!first.length && !!second.length) {
  	console.log(`\r-------------\r
  		first[0].num_favorers: ${first[0].num_favorers}
  		second[0].num_favorers: ${second[0].num_favorers}
  		\r-------------\r`)
    first[0].num_favorers >= second[0].num_favorers ? result.push(first.shift()) : result.push(second.shift())
  }

  return result.concat(first, second);
}

module.exports = FavoriteListings;