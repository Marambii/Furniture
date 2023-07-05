
# Create two users
User.create!(
  username: 'Baruch',
  email: 'baruch@gmail.com',
  password: 'bbbb',
  profile_image: 'https://images.unsplash.com/photo-1630001254873-b5903049571c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  is_admin: false
)

User.create!(
  username: 'Consolatta',
  email: 'consolatta@gmail.com',
  password: 'cccc',
  profile_image: 'https://images.unsplash.com/photo-1687996345025-34b478b98546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  is_admin: false
)

User.create!(
  username: 'John',
  email: 'john@gmail.com',
  password: 'jjjj',
  profile_image: 'https://plus.unsplash.com/premium_photo-1670876807290-275ea26f8677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  is_admin: false
)

User.create!(
  username: 'Muchuku',
  email: 'muchuku@gmail.com',
  password: 'mmmm',
  profile_image: 'https://media.istockphoto.com/id/471234978/photo/blue-suede-armchair.jpg?s=612x612&w=0&k=20&c=AEoiNSABYmy9ghK7C0wRpBooGWVS4vnrzgFfxuBk6qg=',
  is_admin: true
)


furnishings_data = [
  {
    image: 'https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk=',
    price: 5500.99,
    description: 'Elegant armchair with a classic design, featuring luxurious velvet upholstery and wooden legs.',
    category: 'Armchair',
    rating: 4,
    user_id: 1
  },
  {
    image: 'https://media.istockphoto.com/id/1281696939/photo/blue-armchair-isolated-on-a-white.jpg?s=612x612&w=0&k=20&c=HkTa1tygfXy-_QGNZICY8usIy0Px4JCoQWIYzC4vkE4=',
    price: 6199.50,
    description: 'Modern armchair with clean lines and a sleek silhouette, upholstered in soft leather for added comfort.',
    category: 'Armchair',
    rating: 5,
    user_id: 1
  },
  {
    image: 'https://media.istockphoto.com/id/1321320075/photo/3d-rendering-of-an-isolated-modern-pale-green-mid-century-cosy-lounge-wingback-armchair.jpg?s=612x612&w=0&k=20&c=ziAdbDP5iUEQ1OZinRyBt5Wy8LvRtcKz9OLU22V2jgs=',
    price: 7950.99,
    description: 'Cozy armchair with a reclining feature, perfect for lounging and relaxing after a long day.',
    category: 'Armchair',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/154926620/photo/armchair.jpg?s=612x612&w=0&k=20&c=lLR_lNVKwo2eiEl-i5QZlCuPWbu8JD06ZdBEmbGeYNI=',
    price: 6999.99,
    description: 'Vintage-inspired armchair with button-tufted backrest and rolled arms, exuding timeless charm.',
    category: 'Armchair',
    rating: 5,
    user_id: 1
  },
  {
    image: 'https://media.istockphoto.com/id/467455578/photo/blue-sofa-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=3nW_hn3PBMCgskBYZLD2ArjUVyMoyYsaxJwM_D67Ebc=',
    price: 23000.99,
    description: 'Contemporary sectional sofa with clean lines and plush cushions, offering ample seating space for the whole family.',
    category: 'Sofa',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/885995110/photo/sofa-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=wI0n7ufL4MP86ooyWL3Lqt39FLSRlf1yQYm52HRiHAM=',
    price: 18000.99,
    description: 'Mid-century modern sofa featuring a tufted backrest, tapered legs, and soft fabric upholstery, adding a touch of retro charm to your living space.',
    category: 'Sofa',
    rating: 5,
    user_id: 1
  },
  {
    image: 'https://media.istockphoto.com/id/499882204/photo/sofa.jpg?s=612x612&w=0&k=20&c=BNV-R3jvtNwV8urBwGNd0RlWKVSFCMQrBT6iqJafEyA=',
    price: 17899.99,
    description: 'Luxurious leather sofa with a reclining feature and adjustable headrests, providing maximum comfort and relaxation.',
    category: 'Sofa',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/97861049/photo/light-blue-modern-style-sofa-on-white-background.jpg?s=612x612&w=0&k=20&c=zKlGMjzIzK-Kpyx968xoxgqcUlF46ZNxOf45z86kKbo=',
    price: 19999.99,
    description: 'Modern convertible sofa bed with a sleek design, allowing you to effortlessly switch between seating and sleeping configurations.',
    category: 'Sofa',
    rating: 5,
    user_id: 1
  },
  {
    image: 'https://media.istockphoto.com/id/1474579509/photo/contemporary-bed-isolated-on-white-background-front-view-include-clipping-path-close-up.jpg?s=612x612&w=0&k=20&c=IbsmtnrDKIUNtWp3S4JnZnq9kVb4ftWPlnhCIloe5GY=',
    price: 30000.99,
    description: 'Elegant platform bed with a tufted headboard and solid wood construction, adding a touch of sophistication to your bedroom.',
    category: 'Beds',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/173694999/photo/bed-isolated-on-white-2.jpg?s=612x612&w=0&k=20&c=kEUlE2hrJd32yJ9GlZvZgBk0USRsvjz3KR4GjkqdqNo=',
    price: 24900.99,
    description: 'Modern upholstered bed frame with sleek lines and a low-profile design, creating a contemporary centerpiece for your bedroom.',
    category: 'Beds',
    rating: 5,
    user_id: 1
  },
  {
    image: 'https://media.istockphoto.com/id/512173791/photo/bed.jpg?s=612x612&w=0&k=20&c=UfrKRvywsNbWUHidQDal4DEzJaIqGqkuXvsYLFLfhXI=',
    price: 45999.99,
    description: 'Classic sleigh bed made from rich mahogany wood, exuding timeless elegance and charm in your sleeping space.',
    category: 'Beds',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/1466757902/photo/elegant-cozy-bed-with-headboard-blanket-and-pillows-on-white-background.jpg?s=612x612&w=0&k=20&c=UXQIIhDap7MaBKiG5lotk102dFQUYTy7D2MdRuhIw64=',
    price: 35899.99,
    description: 'Luxurious canopy bed featuring a sturdy metal frame and flowing curtains, creating a dreamy and romantic ambiance in your bedroom.',
    category: 'Beds',
    rating: 5,
    user_id: 4
  },
  {
    image: 'https://www.istockphoto.com/photo/coffee-table-isolated-on-white-background-with-clipping-path-included-3d-render-gm1250026682-364453649?phrase=furniture%2C%20white%20background',
    price: 4500.99,
    description: 'Sleek and modern dining table with a tempered glass top and stainless steel legs, perfect for contemporary interiors.',
    category: 'Tables',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/1255965482/photo/coffee-table-with-a-round-glass-top.jpg?s=612x612&w=0&k=20&c=Ke53ApCqN284GmrWUFlUPXuragBM1D-c2x1LKRQomFQ=',
    price: 3999.99,
    description: 'Rustic farmhouse table crafted from reclaimed wood, featuring a distressed finish and sturdy construction, adding charm and character to your dining space.',
    category: 'Tables',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/838506140/photo/brown-wooden-design-dinner-table.jpg?s=612x612&w=0&k=20&c=bKl8tNOky3ljvfpQgRUlajpQLCaN-7YykQY33robAp8=',
    price: 3499.99,
    description: 'Compact and versatile coffee table with hidden storage compartments, providing functionality and style in your living room.',
    category: 'Tables',
    rating: 4,
    user_id: 2
  },
  {
    image: 'https://media.istockphoto.com/id/1442102614/photo/3d-rendering-of-a-modern-round-wooden-coffee-table-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=FQo_ox0TELXjWa6M8pF9rJ5JUp26TXSFDYJwkgpcamU=',
    price: 2399.99,
    description: 'Elegant and timeless console table with a marble top and gold-finished metal frame, making a statement in your entryway or hallway.',
    category: 'Tables',
    rating: 4,
    user_id: 3
  }
]
  furnishings_data.each do |data|
    Furnishing.create(data)
  end
