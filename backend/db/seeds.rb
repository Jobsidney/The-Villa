puts "🌱 Seeding spices..."

wines = [
    {
      title: "Generali Meakins",
      price: "$56",
      tags: "AU | Bottle"
    },
    {
      title: "Ka Quarter",
      price: "$59",
      tags: "AU | Bottle"
    },
    {
      title: "La Vieillw Rose",
      price: "$44",
      tags: "FR | 750 ml"
    },
    {
      title: "Rhino Pale Ale",
      price: "$31",
      tags: "CA | 750 ml"
    },
    {
      title: "Irish Guinness",
      price: "$26",
      tags: "IE | 750 ml"
    }
  ];

  for element in wines
    Food.create
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
