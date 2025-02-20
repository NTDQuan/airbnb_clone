import React from 'react'
import Container from '../pages/Container/Container'
import Heading from './Heading/Heading'
import ListingCard from './ListingCard/ListingCard'

const FavouriteClient = ({ listings }) => {
  return (
    <div>
      <Container>
        <Heading
            title="Favourites"
            subtitle="List of place you have favourited!"
        />
        <div className='
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
        '>
            {listings.map((listing) => (
                <ListingCard key={listing.id} homestay={listing}/>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default FavouriteClient
