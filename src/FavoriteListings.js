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
	if (!this.listings.includes(listing)) {
		this.listings.push(listing);
	}
};

FavoriteListings.prototype.removeListing = function(listing) {
	if (this.listings.includes(listing)) {
		this.listings = this.listings.filter(x => x.listings_id !== listing.listings_id)
	}
};

FavoriteListings.prototype.getFavorites = function() {
	console.log(`first listing num_favorers: ${!!this.listings[0] ? this.listings[0].num_favorers : 'no listings'}`);
  return mergeSort(this.listings);
  //return this.listings
}

function mergeSort(array) {
  if (array.length > 1) {
    const arrayRight = array.splice(array.length/2);

    const sortedListings =  mergeListingArrays(mergeSort(array), mergeSort(arrayRight));

    console.log(`sorted listings num_favorers: ${sortedListings.map(listing => listing.num_favorers)}`);

    return sortedListings;
  }
  else {
    return array;
  }
}

function mergeListingArrays(first, second) {
  const result = [];

  while (!!first.length && !!second.length) {
    first[0].num_favorers >= second[0].num_favorers ? result.push(first.shift()) : result.push(second.shift())
  }

  return result.concat(first, second);
}

module.exports = FavoriteListings;