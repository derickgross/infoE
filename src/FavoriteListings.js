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
	if (!this.isListingFavorited(listing)) {
		this.listings.push(listing);
	}

	this.listings = mergeSort(this.listings);
};

FavoriteListings.prototype.removeListing = function(listing) {
	this.listings = this.listings.filter(x => x.listing_id !== listing.listing_id)
};

FavoriteListings.prototype.getFavorites = function() {
  return this.listings
}

function mergeSort(array) {
  if (array.length > 1) {
    const arrayRight = array.splice(array.length/2);

    return mergeListingArrays(mergeSort(array), mergeSort(arrayRight));
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