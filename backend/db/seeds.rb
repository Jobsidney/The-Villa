puts "🌱 Seeding spices..."

wines = [{
    description: 'Fresh seasonal apples sreusel Topping cinnamon ice cream',
    title: 'Apple crisp',
    price: '$9.00'
},
{
    description: 'Tangy Custard with Graham Cracker crust. Wripped cream and lime zest',
    title: 'Key Lime pie',
    price: '$8.00'
},
{
    description: 'Topped with caramel, chocolate curls and cocoa powder',
    title: 'Newyork cheesecake ',
    price: '$8.55'
},
{
    description: 'Fresh mixed berries with brown sugar and charbord topped with Fresh Whipped cream',
    title: 'Mixed Berries',
    price: '$8.50'
},
{
    description: 'Chocolate shells with a choice of a white, milk or dark chocolate ganache',
    title: 'Chocolate Molten Lava Cake',
    price: '$11.00'
},
{
    description: 'Chocolate shells with a choice of a white, milk or dark chocolate ganache',
    title: 'Chocolate',
    price: '$10.05'
}
]


wines.each do |wine|
    Food.create(
        meal_name: wine[:title],
        description: wine[:description],
        food_type: 4,
        price: wine[:price],
        image: ''
    )

end












#reviews seed data
# data=['The Villa reputation for the highest quality service and physical comfort is well deserved. Our room was elegant, the lobby a pleasant place for coffee and a perfect croissant, and the pool was heated to our exact specifications, thanks ',
#     'I spent a great week here. Friendly staff, comfortable rooms, excellent buffet breakfast and great in-room dining.',
#     'Luxurious hotel with top quality ammenities. Staff is very attentive since the moment you step in. Rooftop pool is a charm',
#     'The hotel amenities and staff are excellent. Breakfast at Cafe Villa was fantastic.',
#     'The food was delicious and the chefs were always smilling a d welcoming especially Ms Janet Baswati who was always there to prepare delicious omelette for us. She is such a good hearted lady.',
#     'The food at the balcony bar was amazing and tasty ..thanks to chef Jeremy ..who made a pita bread sandwich wch I told him to surprise me and he did it .and excellent cocktails from the bar Antony..will wish other guest to try out the pita bread sandwich ',
#     'Chef Jeremiah and Lucy offered the best services and the food was so good..This made me consider this place my one go to place😂for anything.Thank you so much',
#     'The food was very tasty. The hummus and Muhamara were the perfect starter. The mixed grill was great especially the beef!'
# ]
# for element in data
#     Review.create(
#     review: element,
#     rating: rand(5..10),
#     user_id: rand(1..10),
#     meal_id: rand(1..6)
# )
# end


# Review.delete_all

# Seed your database here

puts "✅ Done seeding!"
