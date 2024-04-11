import { Event } from '../models/Event';

export const event1: Event = {
	id: 1,
	name: 'Front-end tuesday virtual meetup: Product-centric funding',
	description:
		'Organized by Product School and structured around the hottest topics in Product Management, ProductCon takes place online four times per year and gathers over 15,000 product professionals from all over the world. You’ll learn from inspirational Heads of Product, VPs, and CPOs from tech giants such as Amazon, Netflix, Spotify, and more.',
	imageUrl: 'https://angularexperts.imgix.net/workshops/frontend.webp?auto=format',
	eventStart: new Date('2024-05-01T19:00:00'),
	eventEnd: new Date('2024-05-01T21:00:00'),
	registrationStart: new Date('2024-04-15T00:00:00'),
	registrationEnd: new Date('2024-04-01T23:59:00'),
	agenda: null,
	price: 10,
	//inviteUrl: 'https://zoom.com' ,
	inviteUrl: null,
	address: null,
	// address: {
	//   venue: 'Greenhouse Loft',
	//   buildingNo: '2545',
	//   city: 'Chicago, IL',
	//   street: 'W Diversey Ave',
	//   zip: '60647'
	// },
	creatorId: 1,
	attendees: [
		{
			id: 1,
			registrationStatus: null,
			paymentStatus: null,
			user: {
				id: 1,
				firstName: 'Guy',
				lastName: 'Hawkins',
				jobTitle: 'Event Organizer',
				imageUrl:
					'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528',
			},
		},
		{
			id: 2,
			registrationStatus: null,
			paymentStatus: null,
			user: {
				id: 2,
				firstName: 'Jane',
				lastName: 'Smith',
				jobTitle: 'Full Stack Developer',
				imageUrl:
					'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			},
		},
		{
			id: 3,
			registrationStatus: null,
			paymentStatus: null,
			user: {
				id: 1,
				firstName: 'Guy',
				lastName: 'Hawkins',
				jobTitle: 'Event Organizer',
				imageUrl:
					'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528',
			},
		},
		{
			id: 4,
			registrationStatus: null,
			paymentStatus: null,
			user: {
				id: 2,
				firstName: 'Jane',
				lastName: 'Smith',
				jobTitle: 'Full Stack Developer',
				imageUrl:
					'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			},
		},
	],
	currentUserRegisteredToEvent: true,
	open: true,
	tags: ['Online', 'Meetup'],
};
