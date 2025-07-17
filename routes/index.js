const express = require('express');
const router = express.Router();

// Sample data for destinations
const destinations = [
    { id: 1, name: 'Bali, Indonesia', image: '/images/bali.jpg', price: '$1200', rating: 4.8 },
    { id: 2, name: 'Paris, France', image: '/images/paris.jpg', price: '$1800', rating: 4.9 },
    { id: 3, name: 'Tokyo, Japan', image: '/images/tokyo.jpg', price: '$2000', rating: 4.7 },
];

const tours = [
    { id: 1, name: 'Bali Adventure Tour', duration: '7 days', price: '$1200', image: '/images/tour1.jpg' },
    { id: 2, name: 'European Classic', duration: '14 days', price: '$2500', image: '/images/tour2.jpg' },
];

// Routes
router.get('/', (req, res) => {
    res.render('pages/home', { title: 'Travel Explorer - Discover Amazing Places', destinations, tours });
});

router.get('/destinations', (req, res) => {
    res.render('pages/destinations', { title: 'Destinations', destinations });
});

router.get('/destination/:id', (req, res) => {
    const destination = destinations.find(d => d.id == req.params.id);
    res.render('pages/destination-detail', { title: destination.name, destination });
});

router.get('/tours', (req, res) => {
    res.render('pages/tours', { title: 'Tours', tours });
});

router.get('/tour/:id', (req, res) => {
    const tour = tours.find(t => t.id == req.params.id);
    res.render('pages/tour-detail', { title: tour.name, tour });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Us' });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact Us' });
});

router.get('/gallery', (req, res) => {
    res.render('pages/gallery', { title: 'Gallery' });
});

router.get('/blog', (req, res) => {
    res.render('pages/blog', { title: 'Travel Blog' });
});

router.get('/booking', (req, res) => {
    res.render('pages/booking', { title: 'Book Your Trip' });
});

module.exports = router;