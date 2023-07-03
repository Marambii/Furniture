
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
  profile_image: 'https://images.unsplash.com/photo-1630001254873-b5903049571c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  is_admin: true
)
