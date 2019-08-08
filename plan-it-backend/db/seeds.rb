# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Trip.destroy_all
UserTrip.destroy_all
Todo.destroy_all
Expense.destroy_all
Itinerary.destroy_all
Destination.destroy_all
ItineraryDestination.destroy_all

u1 = User.create(full_name: 'Chris Yuan', email: 'chris@gmail.com')
u2 = User.create(full_name: 'Jun Takeda', email: 'jun@gmail.com')

t1 = Trip.create(start_date: '2019-08-26', end_date: '2019-08-30', title: 'End of Summer Vacation', description: 'After a long and tiring summer, time to chill out and explore Colorado.')

ut1 = UserTrip.create(user_id: u1.id, trip_id: t1.id)
ut2 = UserTrip.create(user_id: u2.id, trip_id: t1.id)

td1 = Todo.create(trip_id: t1.id, content: 'Get snacks')
td2 = Todo.create(trip_id: t1.id, content: 'Rent car')
td3 = Todo.create(trip_id: t1.id, content: 'Buy water')

e1 = Expense.create(trip_id: t1.id, item: 'Uber', cost: 15.50, count: 1)
e2 = Expense.create(trip_id: t1.id, item: 'Lunch', cost: 42.60, count: 1)

i1 = Itinerary.create(user_trip_id: ut1.id, departure: '2019-08-26T10:00', arrival: '2019-08-26T13:00', address: '650 15th St, Denver, CO 80202')
i2 = Itinerary.create(user_trip_id: ut1.id, departure: '2019-08-30T12:00', arrival: '2019-08-26T18:00', address: '319 Avenue C, New York, NY 10009')
i3 = Itinerary.create(user_trip_id: ut2.id, departure: '2019-08-26T10:00', arrival: '2019-08-26T13:00', address: '650 15th St, Denver, CO 80202')
i4 = Itinerary.create(user_trip_id: ut2.id, departure: '2019-08-26T12:00', arrival: '2019-08-26T18:00', address: '319 Avenue C, New York, NY 10009')

d1 = Destination.create(city: 'Denver', country: 'United States')
d2 = Destination.create(city: 'New York', country: 'United States')

id1 = ItineraryDestination.create(itinerary_id: i1.id, destination_id: d1.id, from: false)
id2 = ItineraryDestination.create(itinerary_id: i1.id, destination_id: d2.id, from: true)
id3 = ItineraryDestination.create(itinerary_id: i2.id, destination_id: d1.id, from: true)
id4 = ItineraryDestination.create(itinerary_id: i2.id, destination_id: d2.id, from: false)
id5 = ItineraryDestination.create(itinerary_id: i3.id, destination_id: d1.id, from: false)
id6 = ItineraryDestination.create(itinerary_id: i3.id, destination_id: d2.id, from: true)
id7 = ItineraryDestination.create(itinerary_id: i4.id, destination_id: d1.id, from: true)
id8 = ItineraryDestination.create(itinerary_id: i4.id, destination_id: d2.id, from: false)
